import { Box, Button, Text } from '@chakra-ui/react';
import { OpenAI } from 'langchain/llms/openai';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';
import { useState } from 'react';

type Props = {};

const Memory = (props: Props) => {
  const [result, setResult] = useState<string>('');
  console.log(result);
  const model = new OpenAI({
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.9,
    streaming: true,
    callbacks: [
      {
        handleLLMNewToken(token: string) {
          setResult((prev) => prev + token);
        },
      },
    ],
  });
  const memory = new BufferMemory();

  const chain = new ConversationChain({ llm: model, memory: memory });
  const [message, setMessage] = useState<string[]>([
    'Hi! I am Tuan.',
    "What's my name?",
  ]);

  const handleSubmit = async () => {
    // const res = await chain.call({ input: message[result.length] });
    // setResult([...result, res.response]);
    await model.call('Write me a song about sparkling water.');
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

export default Memory;
