import { OpenAI } from 'langchain/llms/openai';
import { ConversationSummaryMemory } from 'langchain/memory';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';

interface IOpenAIRequest {
  handleStream: (token: string) => void;
  prompt?: any;
  OpenAIParams?: any;
}

export const OpenAIRequest = ({
  handleStream,
  prompt,
  OpenAIParams,
}: IOpenAIRequest) => {
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.3,
    streaming: true,
    modelName: 'gpt-3.5-turbo',
    callbacks: [
      {
        handleLLMNewToken(token: string) {
          handleStream(token);
        },
      },
    ],
    ...OpenAIParams,
  });
  const memory = new ConversationSummaryMemory({
    memoryKey: 'chat_history',
    llm: model,
  });
  const chain = new LLMChain({ llm: model, prompt });
  return {
    chain,
  };
};
