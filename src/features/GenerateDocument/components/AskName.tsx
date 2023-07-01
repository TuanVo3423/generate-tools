import { OpenAIRequest } from '@/services/openai';
import { useGenerateQuestionWithNoAnswerPrompt } from '@/services/openai/prompt';
import { Button, Flex, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ReceiveContent, ReplyContent } from './ChatMessage';
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { replaceSpecialCharacters } from '../data';
import { v4 as uuidv4 } from 'uuid';

type AskNameProps = {
  form: UseFormReturn<any>;
};

const chat = new OpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0.3,
  // streaming: true,
  modelName: 'gpt-3.5-turbo',
});
const chatPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'You are a helpful assistant that translates {input_language} to {output_language}.'
  ),
  HumanMessagePromptTemplate.fromTemplate('{text}'),
]);
const chainB = new LLMChain({
  prompt: chatPrompt,
  llm: chat,
});

export const AskName = ({ form }: AskNameProps) => {
  const [test, setTest] = useState('');
  const { watch, setValue } = form;
  const [name, description, questions, result] = watch([
    'name',
    'description',
    'questions',
    'result',
  ]);

  // const { chatPrompt } = useGenerateQuestionWithNoAnswerPrompt();
  // const [result, setResult] = useState<string>('');
  // const { chain } = OpenAIRequest({
  //   prompt: chatPrompt,
  //   handleStream: (token: string) => {
  //     // console.log('appendToken: ', appendToken);
  //     setValue('result', result + token);
  //     const questionsAfterResponses = replaceSpecialCharacters(result).map(
  //       (question: string) => ({
  //         id: uuidv4(),
  //         content: question,
  //       })
  //     );
  //     setValue('questions', questionsAfterResponses);
  //   },
  // });
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);

  const [inputText, setInputText] = useState<string>('');

  const isFirstQuestion = !name && !description;

  const handleOnSend = () => {
    if (isFirstQuestion) {
      setValue('name', inputText);
      setInputText('');
    } else {
      setValue('description', inputText);
      setInputText('');
    }
  };
  const handleGotoAnswerQuestions = async () => {
    setValue('step', 'askQuestions');
    setValue('isRenderQuestionWithNoAnswer', true);
  };

  return (
    <Flex w="full" h="full" flexDir="column">
      <VStack align="unset" justify="flex-end" flex={1}>
        <ReceiveContent isTriangle>
          Hello! Do you have a new project idea? What is it called?
        </ReceiveContent>
        {name && <ReplyContent>{name}</ReplyContent>}
        {!isFirstQuestion && (
          <ReceiveContent isTriangle>
            Awesome. Can you give me a detailed description of your project?
          </ReceiveContent>
        )}
        {description && <ReplyContent>{description}</ReplyContent>}
        {description && (
          <ReceiveContent isTriangle>
            {`Ok. Lets follow simple steps that will let us create professional
              documents together in no time. Here is a demo version for a Project
              Specifications Document for ${name}`}
          </ReceiveContent>
        )}
        <Text>
          {questions.map((item: any) => (
            <Text>{item.content}</Text>
          ))}
        </Text>
      </VStack>
      <HStack justify="center">
        {!description && (
          <>
            <Input
              onKeyDown={(e) => e.keyCode === 13 && handleOnSend()}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button variant="primary-v2" onClick={handleOnSend} maxW="200px">
              Send
            </Button>
          </>
        )}
        {description && (
          <Button
            variant="primary-v2"
            onClick={handleGotoAnswerQuestions}
            maxW="200px"
          >
            Continue
          </Button>
        )}
      </HStack>
    </Flex>
  );
};
