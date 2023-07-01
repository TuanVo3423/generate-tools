import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from 'langchain/prompts';
import { OpenAI } from 'langchain/llms/openai';
import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { LLMChain } from 'langchain/chains';

const model = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0.9,
});

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'You are a helpful assistant that translates {input_language} to {output_language}.'
  ),
  HumanMessagePromptTemplate.fromTemplate('{text}'),
]);

const ChatModel = () => {
  const chain = new LLMChain({
    prompt: translationPrompt,
    llm: model,
  });
  const [result, setResult] = useState<string>('');
  console.log(result);

  const [message, setMessage] = useState<string[]>([
    'Hi! I am Tuan.',
    "What's my name?",
  ]);

  const handleSubmit = async () => {
    const responseB = await chain.call({
      input_language: 'English',
      output_language: 'French',
      text: 'I love programming.',
    });

    console.log(responseB);
  };

  return (
    <Box>
      <Button onClick={handleSubmit} maxW="200px">
        Send message
      </Button>
      <Box>
        <Text>{result}</Text>
      </Box>
    </Box>
  );
};

export default ChatModel;
