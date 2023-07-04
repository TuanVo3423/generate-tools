import { Button, Stack, Text } from '@chakra-ui/react';
import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { ConversationSummaryMemory } from 'langchain/memory';
import { PromptTemplate } from 'langchain/prompts';
import { useEffect, useMemo, useState } from 'react';

const prompt =
  PromptTemplate.fromTemplate(`The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.

  Current conversation:
  {chat_history}
  Human: {input}
  AI:`);

const Memory = () => {
  const [temp, setTemp] = useState('');
  const [text, setText] = useState('');

  const model = useMemo(() => {
    console.log('model render');
    return new OpenAI({
      openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      temperature: 0.3,
      modelName: 'gpt-3.5-turbo',
      streaming: false,
      callbacks: [
        {
          handleLLMNewToken(token: string) {
            console.log(token);
            setText((prev) => (prev += token));
          },
        },
      ],
    });
  }, []);
  const memory = useMemo(() => {
    console.log('memory render');
    return new ConversationSummaryMemory({
      memoryKey: 'chat_history',
      llm: model,
    });
  }, []);

  const chain = useMemo(() => {
    console.log('re-render chain');
    return new LLMChain({
      llm: model,
      prompt,
      memory,
    });
  }, [model]);

  const trigger1 = async () => {
    setText('');
    const res1 = await chain.call({
      input: "Hi! I'm Jim. After this time, you should call me Jim.",
    });
    console.log({ res1, memory: await memory.loadMemoryVariables({}) });
    setTemp('lan 1');
    /*
  {
    res1: {
      text: " Hi Jim, I'm AI! It's nice to meet you. I'm an AI programmed to provide information about the environment around me. Do you have any specific questions about the area that I can answer for you?"
    },
    memory: {
      chat_history: 'Jim introduces himself to the AI and the AI responds, introducing itself as a program designed to provide information about the environment. The AI offers to answer any specific questions Jim may have about the area.'
    }
  }
  */
  };

  const trigger2 = async () => {
    setText('');
    const res2 = await chain.call({ input: "What's my name?" });
    console.log({ res2, memory: await memory.loadMemoryVariables({}) });
    setTemp('lan 2');
    /*
  {
    res2: { text: ' You told me your name is Jim.' },
    memory: {
      chat_history: 'Jim introduces himself to the AI and the AI responds, introducing itself as a program designed to provide information about the environment. The AI offers to answer any specific questions Jim may have about the area. Jim asks the AI what his name is, and the AI responds that Jim had previously told it his name.'
    }
  }
  */
  };

  return (
    <Stack maxW="200px">
      <Button onClick={trigger1}>Trigger 1</Button>
      <Button onClick={trigger2}>Trigger 2</Button>
      <Text>{text}</Text>
    </Stack>
  );
};

export default Memory;
