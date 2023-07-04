import { OpenAIRequest } from '@/services/openai';
import {
  useGenerateQuestionWithAnswerPrompt,
  useGenerateQuestionWithNoAnswerPrompt,
} from '@/services/openai/prompt';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import {
  IOption,
  IQuestion,
  convertQA,
  isReadyForRequestGeneration,
  replaceSpecialCharacters,
} from '../data';
import { motion } from 'framer-motion';
import { movePage } from '@/motion';

type AskQuestionsProps = {
  form: UseFormReturn<any>;
  handleSubmit: any;
};

export const AskQuestions = ({ form, handleSubmit }: AskQuestionsProps) => {
  const { watch, setValue } = form;
  const [id, setId] = useState<string>();
  const [isFinish, setisFinish] = useState<boolean>(true);
  const [questionToken, setQuestionToken] = useState('');
  const [optionToken, setOptionToken] = useState('');
  const [currentOptions, setCurrentOptions] = useState<IOption[]>([]);
  const [questions, options, description, name, isRenderQuestionWithNoAnswer] =
    watch([
      'questions',
      'options',
      'description',
      'name',
      'isRenderQuestionWithNoAnswer',
    ]);

  const { Qchain, QAChain } = useMemo(() => {
    const { chatPrompt: QPrompt } = useGenerateQuestionWithNoAnswerPrompt();
    const { chatPrompt: QAPrompt } = useGenerateQuestionWithAnswerPrompt();
    const { chain: Qchain } = OpenAIRequest({
      prompt: QPrompt,
      handleStream: (token: string) => {
        setQuestionToken((prev) => (prev += token));
      },
    });
    const { chain: QAChain } = OpenAIRequest({
      prompt: QAPrompt,
      handleStream: (token: string) => {
        setOptionToken((prev) => (prev += token));
      },
    });
    return { Qchain, QAChain };
  }, []);

  // request question token
  useEffect(() => {
    async function ChainRequest() {
      const res = await Qchain.call({
        name,
        description,
      });
    }
    if (isRenderQuestionWithNoAnswer) {
      ChainRequest();
    }
  }, [isRenderQuestionWithNoAnswer]);
  // set token for question token
  useEffect(() => {
    const questionsAfterResponses = replaceSpecialCharacters(questionToken).map(
      (question: string) => ({
        id: uuidv4(),
        content: question,
      })
    );
    setValue('questions', questionsAfterResponses);
  }, [questionToken]);

  useEffect(() => {
    if (!optionToken) {
      if (isFinish) {
        setValue('options', [...options, ...currentOptions]);
      }
    } else {
      const optionsAfterResponses = replaceSpecialCharacters(optionToken).map(
        (option: string) => ({
          id: uuidv4(),
          questionId: id,
          checked: false,
          content: option,
        })
      );
      const correctResponse = optionsAfterResponses.map((item, idx: number) => {
        const matchingItem = currentOptions.find((option) =>
          item.content.includes(option.content)
        );
        if (matchingItem) {
          return { ...item, checked: matchingItem.checked };
        }
        return item;
      });

      setCurrentOptions(correctResponse);
    }
  }, [optionToken]);

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
    setisFinish(false);
    setOptionToken('');
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
        setisFinish(true);
        const optionsAfterResponses = options.filter(
          (item: IOption) => item.questionId === id
        );
        setCurrentOptions(optionsAfterResponses);
      } else {
        setCurrentOptions([]);
        const res = await QAChain.call({
          QASelectedPrompt: convertQA(name, description, options, questions),
          question: questionById[0].content,
        });
        setOptionToken('');
        setisFinish(true);
      }
    }
    // first time
    else {
      const res = await QAChain.call({
        QASelectedPrompt: convertQA(name, description, options, questions),
        question: questionById[0].content,
      });
      setOptionToken('');
      setisFinish(true);
    }
  };

  const handleOnChangeOptions = (optionId?: string) => {
    if (isFinish) {
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
    } else {
      const optionsChanged = currentOptions.map((option: IOption) => {
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
      setCurrentOptions(optionsChanged);
    }
  };

  return (
    <Stack as={motion.div} {...movePage} justify="center" h="full">
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
          <Flex gap={2} flexDir="column" justify="flex-start">
            <CheckboxGroup>
              {questions.length === 0
                ? Array.from({ length: 5 }, (_, _idx) => (
                    <Skeleton key={_idx} w="full" h="full" />
                  ))
                : questions.map((question: IQuestion, idx: number) => {
                    return (
                      <Checkbox
                        opacity={!isFinish && question.id === id ? 0.5 : 1}
                        isDisabled={!isFinish && question.id !== id}
                        isChecked={checkExistOptionAtCurrentQuestion(
                          question.id
                        )}
                        key={question.id}
                        onChange={() => handleOnChangeQuestions(question.id)}
                      >
                        <Text
                          color={question.id === id ? '#efeff0' : '#b7b6bb'}
                        >
                          {idx + 1}: {question.content}
                        </Text>
                      </Checkbox>
                    );
                  })}
            </CheckboxGroup>
          </Flex>
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
                      key={option.content}
                      onChange={() => handleOnChangeOptions(option.id)}
                      isChecked={option.checked}
                      value={option.content}
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
          variant="primary-v2"
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
