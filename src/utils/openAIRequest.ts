import { ChatCompletionRequestMessage } from 'openai';
import openai from './openai';

export const chatGPTResquest = async (
  messages: ChatCompletionRequestMessage[],
  maxToken?: number
) => {
  const completion = await openai.createChatCompletion(
    {
      model: 'gpt-3.5-turbo',
      messages: [...messages],
      temperature: 0.2,
      max_tokens: maxToken,
    },
    {
      headers: {
        Authorization:
          'Bearer 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',
        'OpenAI-Organization': 'org-gWNo6FnNIe7ocUcHN7ii3wIA',
      },
    }
  );
  return completion.data.choices[0].message;
};

export const chatGPTResquestImage = async (prompt: string, n: number) => {
  const response = await openai.createImage(
    {
      prompt,
      n,
      response_format: 'url',
      size: '1024x1024',
    },
    {
      headers: {
        Authorization:
          'Bearer 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',
        'OpenAI-Organization': 'org-gWNo6FnNIe7ocUcHN7ii3wIA',
      },
    }
  );
  return response.data;
};
