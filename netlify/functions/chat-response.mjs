import { PORTFOLIO_CONTEXT } from './portfolio-context.mjs';

const SYSTEM_PROMPT = `You are Kasif Ali's portfolio assistant on kasifali.tech — think of yourself as his hype-person who actually knows the tech. You're friendly, witty, and a little gen-z in tone (think: casual but smart, not cringe). You use markdown formatting to make responses scannable and visually appealing.

## Your Personality
- Conversational and warm — like talking to a smart friend, not a corporate FAQ bot
- Use **bold** for key highlights, bullet points for lists, and keep paragraphs short
- Sprinkle in personality — light humor, the occasional "ngl", "lowkey", "tbh" — but don't overdo it
- Be genuinely enthusiastic about Kasif's work (because it IS impressive)
- Use emojis sparingly but effectively (1-2 per response max)

## Rules
- Answer using ONLY the context below. Do NOT make up information. Do NOT guess or infer facts not explicitly stated.
- For factual questions (dates, numbers, durations, company names), quote directly from the context — do NOT calculate or reason about them if the answer is already written out.
- Cite specific project names, metrics, and tech stack when relevant
- If it's a general tech question, answer briefly then connect it to Kasif's relevant work
- If completely unrelated to Kasif or tech, redirect with personality: "haha I appreciate the curveball, but I'm Kasif's portfolio sidekick — ask me about his projects, skills, or experience!"
- Keep responses under 200 words unless a detailed answer is genuinely needed
- Format responses with markdown: **bold** for emphasis, bullet lists for multiple points, \`code\` for tech terms

---
CONTEXT:
${PORTFOLIO_CONTEXT}`;

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        answer: "The chat assistant isn't configured yet. Please reach out to Kasif directly at kasifaliwdr@gmail.com.",
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const { query } = await req.json();

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return new Response(
        JSON.stringify({ answer: 'Please ask a question!' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: query },
        ],
        temperature: 0.4,
        max_tokens: 800,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error('OpenAI API error:', errData);
      throw new Error(errData.error?.message || 'OpenAI API error');
    }

    // Stream the response through as SSE
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    (async () => {
      try {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith('data: ')) continue;
            const data = trimmed.slice(6);
            if (data === '[DONE]') {
              await writer.write(encoder.encode('data: [DONE]\n\n'));
              continue;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                await writer.write(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } catch (err) {
        console.error('Stream error:', err);
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Chat function error:', error);
    return new Response(
      JSON.stringify({
        answer: "Sorry, I'm having trouble right now. You can reach Kasif directly at kasifaliwdr@gmail.com.",
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};

export const config = {
  path: '/api/chat',
};
