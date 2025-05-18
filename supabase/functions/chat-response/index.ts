
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, siteContent } = await req.json();
    
    let prompt = "";
    
    // If we have site content, use it for personal questions
    if (siteContent && siteContent.trim() !== "") {
      prompt = `
As Kasi Ali's assistant, please answer this question based on the information provided about Kasi.
Here's information about Kasi extracted from the website:

${siteContent}

Question: ${query}

Answer the question based on the provided information. If the information doesn't contain an answer to this specific question, 
respond with "I don't have specific information about that in my current data about Kasi."
      `;
    } else {
      // For technical questions, use a different prompt
      prompt = `
You are a helpful technical assistant answering on behalf of Kasi Ali, an IT Systems Architect with 10+ years of experience.
The user has asked a technical question that requires your expertise. Please provide a knowledgeable and helpful response.

Question: ${query}

Provide a clear, well-structured answer that demonstrates technical expertise. If the question is unclear or requires 
specific context that's missing, ask for clarification.
      `;
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a knowledgeable assistant for Kasi Ali, an IT Systems Architect.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const generatedText = data.choices[0].message.content;

    return new Response(JSON.stringify({ 
      answer: generatedText,
      source: siteContent ? 'site' : 'openai'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-response function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
