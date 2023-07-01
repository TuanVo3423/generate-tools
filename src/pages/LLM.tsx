import { Box, Button } from '@chakra-ui/react';
import { OpenAI } from 'langchain/llms/openai';
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate,
} from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate('You are a project manager.'),
  HumanMessagePromptTemplate.fromTemplate(
    'The new client project is called {name}.The project description is: {description}.List 5 questions necessary for writing a detailed and complete Project Specifications document for this project.Write in a clear and concise style.'
  ),
]);
const chat = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0.3,
});
const chain = new LLMChain({
  prompt: translationPrompt,
  llm: chat,
});
const LLM = () => {
  const handleSubmit = async () => {
    const responseB = await chain.call({
      name: 'VKU map',
      description: 'simple UI',
    });
    console.log(responseB);
  };

  return (
    <Box>
      <Button onClick={handleSubmit} maxW="200px">
        Trigger acction!
      </Button>
    </Box>
  );
};
export default LLM;
