import { ChatCompletionRequestMessage } from 'openai';
import openai from './openai';

export const chatGPTResquest = async (
  messages: ChatCompletionRequestMessage[]
) => {
  const completion = await openai.createChatCompletion(
    {
      model: 'gpt-3.5-turbo',
      messages: [...messages],
      temperature: 0.2,
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
