import { Box, Button } from '@chakra-ui/react';
import { OpenAI } from 'langchain/llms/openai';
import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';

type Props = {};

const model = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0.9,
});
const tools = [
  new SerpAPI(process.env.NEXT_PUBLIC_SERPARI_API_KEY, {
    location: 'Austin,Texas,United States',
    hl: 'en',
    gl: 'us',
  }),
  new Calculator(),
];

const LangChainJS = (props: Props) => {
  const handleSubmit = async () => {
    const executor = await initializeAgentExecutorWithOptions(tools, model, {
      agentType: 'zero-shot-react-description',
    });
    console.log('Loaded agent.');
    const input =
      "Who is Olivia Wilde's boyfriend?" +
      ' What is his current age raised to the 0.23 power?';
    console.log(`Executing with input "${input}"...`);
    const result = await executor.call({ input });

    console.log(`Got output ${result.output}`);
  };

  return (
    <Box>
      <Button onClick={handleSubmit} maxW="200px">
        Trigger acction!
      </Button>
    </Box>
  );
};

export default LangChainJS;
