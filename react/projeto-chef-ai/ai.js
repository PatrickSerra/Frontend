/**
 * Módulo de integração com APIs de IA para geração de receitas baseadas em ingredientes fornecidos pelo usuário.
 * 
 * Utiliza os modelos da Anthropic (Claude) e Hugging Face (Mistral) para processar a entrada e gerar receitas.
 */
import Anthropic from "@anthropic-ai/sdk";
import { HfInference } from "@huggingface/inference";

// Chave de API obtida do ambiente
const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;

/**
 * Prompt do sistema que define as regras para a IA gerar receitas corretamente.
 * 
 * A IA:
 * - Se apresenta como "Chef" na mesma língua dos ingredientes.
 * - Mantém a resposta no mesmo idioma dos ingredientes.
 * - Tenta usar a maioria dos ingredientes fornecidos.
 * - Pode adicionar ingredientes extras, mas com moderação.
 * - Formata a receita em Markdown.
 */
const SYSTEM_PROMPT = `
You are a smart culinary assistant that receives a list of ingredients in a specific language and suggests a recipe the user can prepare using some or all of those ingredients.

- You must introduce yourself with: "Chef here! I'm ready to provide a recipe based on the ingredients you've shared." Ensure this introduction is translated to match the language of the ingredients provided.
- From this point onward, everything you say must be in the same language as the ingredients. Do not mix languages under any circumstance. This includes the recipe name, instructions, ingredients list, and any other text.
- You don't need to use every ingredient listed, but try to incorporate as many as possible.
- Feel free to add extra ingredients if necessary, but keep them to a minimum.
- Format the recipe in markdown for easy readability on a web page.
- Provide clear, structured, and easy-to-follow instructions.

Make sure the recipe is completely in the language of the ingredients, and ensure there is no mixing of languages throughout your response.
`;

// Instância do cliente Anthropic para comunicação com Claude
const anthropic = new Anthropic({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

/**
 * Obtém uma receita do modelo Claude baseado nos ingredientes fornecidos.
 * 
 * @param {string[]} ingredientsArr - Lista de ingredientes informados pelo usuário.
 * @returns {Promise<string>} - Receita gerada pela IA no mesmo idioma dos ingredientes.
 */
export async function getRecipeFromChefClaude(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
      },
    ],
  });
  return msg.content[0].text;
}

// Instância do cliente Hugging Face para comunicação com Mistral
const hf = new HfInference(apiKey);

/**
 * Obtém uma receita do modelo Mistral baseado nos ingredientes fornecidos.
 * 
 * @param {string[]} ingredientsArr - Lista de ingredientes informados pelo usuário.
 * @returns {Promise<string>} - Receita gerada pela IA no mesmo idioma dos ingredientes.
 */
export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `${ingredientsString}`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
