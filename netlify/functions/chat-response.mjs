import { PORTFOLIO_CONTEXT } from './portfolio-context.mjs';

const SYSTEM_PROMPT = `You are Kasif Ali's portfolio assistant on kasifali.tech. You answer questions about Kasif's experience, projects, skills, and career using ONLY the context provided below. Be conversational, concise, and specific — cite project names, metrics, and tech when relevant.

If the question is a general technical question (not about Kasif), you may answer it briefly but always relate it back to Kasif's relevant experience when possible.

If the question is completely unrelated to Kasif or tech, politely redirect: "I'm Kasif's portfolio assistant — I can tell you about his projects, experience, and skills. What would you like to know?"

Do NOT make up information that isn't in the context. If you don't know, say so.
Keep responses under 200 words unless the question requires a detailed answer.

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
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: query },
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI API error:', data);
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    const answer = data.choices?.[0]?.message?.content;
    if (!answer) {
      throw new Error('Empty response from OpenAI');
    }

    return new Response(JSON.stringify({ answer }), {
      headers: {
        'Content-Type': 'application/json',
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
