import { OpenAI } from 'langchain/llms/openai';
import { ConversationSummaryMemory } from 'langchain/memory';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';

interface IOpenAIRequest {
  handleStream: (token: string) => void;
  handleStreamEnd: (token: string) => void;
  prompt?: any;
  OpenAIParams?: any;
}

export const OpenAIRequest = ({
  handleStream,
  handleStreamEnd,
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
        handleLLMEnd(token: string) {
          handleStreamEnd(token);
        },
      },
    ],
    ...OpenAIParams,
  });

  const chain = new LLMChain({ llm: model, prompt });
  return {
    chain,
  };
};

export const OpenAIRequestNotStream = ({ prompt }: IOpenAIRequest) => {
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.3,
    modelName: 'gpt-3.5-turbo',
  });

  const chain = new LLMChain({ llm: model, prompt });
  return {
    chain,
  };
};

export const OpenAIRequestWithMemory = ({
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
  const chain = new LLMChain({ llm: model, prompt, memory });
  return {
    memory,
    chain,
  };
};
