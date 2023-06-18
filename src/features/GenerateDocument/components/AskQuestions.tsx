import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  Text,
  VStack,
  Skeleton,
  Divider,
} from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form';
import { chatGPTResquest, OptionsPrompt } from '@/utils';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  IOption,
  IQuestion,
  replaceSpecialCharacters,
  isReadyForRequestGeneration,
} from '../data';

type AskQuestionsProps = {
  form: UseFormReturn<any>;
  handleSubmit: any;
};

export const AskQuestions = ({ form, handleSubmit }: AskQuestionsProps) => {
  const { watch, setValue } = form;
  const [id, setId] = useState<string>();
  const [isDisabledQuestion, setIsDisabledQuestion] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<IOption[]>([]);
  const [questions, options] = watch(['questions', 'options']);

  const getQuestionById = (questionId?: string) => {
    if (questionId) {
      return questions.find((item: IQuestion) => item.id === questionId);
    }
    return '';
  };

  const checkExistOptionAtCurrentQuestion = (questionId: string) => {
    if (options) {
      const result = options.some(
        (option: IOption) =>
          option.questionId === questionId && option.checked === true
      );
      return result;
    }
    return false;
  };

  const handleOnChangeQuestions = async (id: string) => {
    setId(id);
    const questionById = questions.filter(
      (question: IQuestion) => question.id === id
    );
    // not first time
    if (options.length !== 0) {
      const isOldSelect = options.some(
        (item: IOption) => item.questionId === questionById[0].id
      );
      if (isOldSelect) {
        const optionsAfterResponses = options.filter(
          (item: IOption) => item.questionId === id
        );
        setCurrentOptions(optionsAfterResponses);
      } else {
        setIsDisabledQuestion(true);
        setCurrentOptions([]);
        const promptGetOptions = OptionsPrompt(questionById[0].content);
        const optionsRes = await chatGPTResquest([
          { role: 'user', content: promptGetOptions },
        ]);
        if (optionsRes) {
          const optionsAfterResponses = replaceSpecialCharacters(
            optionsRes?.content
          ).map((option: string) => ({
            id: uuidv4(),
            questionId: id,
            checked: false,
            content: option,
          }));

          setValue('options', [...options, ...optionsAfterResponses]);
          setCurrentOptions(optionsAfterResponses);
          setIsDisabledQuestion(false);
        }
      }
    }
    // first time
    else {
      setIsDisabledQuestion(true);
      const promptGetOptions = OptionsPrompt(questionById[0].content);
      const optionsRes = await chatGPTResquest([
        { role: 'user', content: promptGetOptions },
      ]);
      if (optionsRes) {
        const optionsAfterResponses = replaceSpecialCharacters(
          optionsRes?.content
        ).map((option: string) => ({
          id: uuidv4(),
          questionId: id,
          checked: false,
          content: option,
        }));
        setValue('options', [...options, ...optionsAfterResponses]);
        setCurrentOptions(optionsAfterResponses);
        setIsDisabledQuestion(false);
      }
    }
  };

  const handleOnChangeOptions = (optionId: string) => {
    const optionsChanged = options.map((option: IOption) => {
      if (option.id === optionId) {
        return {
          ...option,
          checked: !option.checked,
        };
      } else {
        return {
          ...option,
        };
      }
    });
    setValue('options', optionsChanged);
  };

  return (
    <Stack justify="center" h="full">
      <Flex h="full" gap={4}>
        <VStack
          p="24px"
          bg="#212028"
          borderRadius="16px"
          borderColor="#373543"
          flex={1}
          gap="0.5rem"
        >
          <Flex
            w="full"
            align="flex-start"
            justify="flex-start"
            flexDir="column"
          >
            <Text fontSize="md" fontWeight="bold">
              Questions list
            </Text>
            <Divider mt="12px" w="full" />
          </Flex>
          <CheckboxGroup>
            {questions.length === 0
              ? Array.from({ length: 5 }, (_, _idx) => (
                  <Skeleton key={_idx} w="full" h="full" />
                ))
              : questions.map((question: IQuestion, idx: number) => {
                  return (
                    <Checkbox
                      opacity={
                        isDisabledQuestion && question.id === id ? 0.5 : 1
                      }
                      isDisabled={isDisabledQuestion && question.id !== id}
                      isChecked={checkExistOptionAtCurrentQuestion(question.id)}
                      key={question.id}
                      onChange={() => handleOnChangeQuestions(question.id)}
                    >
                      <Text color={question.id === id ? '#efeff0' : '#b7b6bb'}>
                        {idx + 1}: {question.content}
                      </Text>
                    </Checkbox>
                  );
                })}
          </CheckboxGroup>
        </VStack>
        <VStack
          p="24px"
          bg="#212028"
          borderRadius="16px"
          borderColor="#373543"
          align="flex-start"
          flex={2}
        >
          <Text fontSize="2xl" fontWeight="bold">
            {getQuestionById(id)?.content}
          </Text>
          <Stack w="full" gap="1rem" overflowY="auto" maxH="500px">
            <CheckboxGroup>
              {currentOptions.length !== 0 ? (
                currentOptions.map((option, idx: number) => (
                  <Box
                    key={idx}
                    w="full"
                    cursor="pointer"
                    bg="#373543"
                    p="14px 20px"
                    borderRadius="6px"
                  >
                    <Checkbox
                      key={option.id}
                      onChange={() => handleOnChangeOptions(option.id)}
                      isChecked={option.checked}
                      value={option.id}
                    >
                      {idx + 1}: {option.content}
                    </Checkbox>
                  </Box>
                ))
              ) : currentOptions.length === 0 && id ? (
                Array.from({ length: 5 }, (_, _idx) => (
                  <Skeleton
                    h="80px"
                    p="14px 20px"
                    borderRadius="6px"
                    key={_idx}
                    w="full"
                  />
                ))
              ) : (
                <Text fontSize="xl" fontWeight="bold">
                  Please choose questions for generating the options!
                </Text>
              )}
            </CheckboxGroup>
          </Stack>
        </VStack>
      </Flex>
      <Box>
        <Button
          mx="auto"
          maxW="200px"
          isDisabled={
            isReadyForRequestGeneration(questions, options) ? false : true
          }
          onClick={() => {
            setValue('step', 'generateDocument');
            handleSubmit();
          }}
        >
          Continue
        </Button>
      </Box>
    </Stack>
  );
};
