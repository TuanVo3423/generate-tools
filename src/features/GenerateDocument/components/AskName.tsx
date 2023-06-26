import { Button, Flex, HStack, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ReceiveContent, ReplyContent } from './ChatMessage';
import { chatGPTResquest, QuestionsPrompt } from '@/utils';
import { v4 as uuidv4 } from 'uuid';
import { replaceSpecialCharacters } from '../data';

type AskNameProps = {
  form: UseFormReturn<any>;
};

export const AskName = ({ form }: AskNameProps) => {
  const [inputText, setInputText] = useState<string>('');
  const { watch, setValue } = form;
  const [name, description] = watch(['name', 'description']);
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
    console.log('handleGotoAnswerQuestions');
    setValue('step', 'askQuestions');
    const promptGetQuestions = QuestionsPrompt(description, name);
    const questions = await chatGPTResquest([
      { role: 'user', content: promptGetQuestions },
    ]);
    if (questions) {
      const questionsAfterResponses = replaceSpecialCharacters(
        questions?.content
      ).map((question: string) => ({
        id: uuidv4(),
        content: question,
      }));
      setValue('questions', questionsAfterResponses);
    }
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
      </VStack>
      <HStack justify="center">
        {!description && (
          <>
            <Input
              onKeyDown={(e) => console.log(e.keyCode === 13 && handleOnSend())}
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
