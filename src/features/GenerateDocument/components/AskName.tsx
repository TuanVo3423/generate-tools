import { SendIcon } from '@/icons';
import { movePage } from '@/motion';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import Particles from 'react-particles';
import Typist from 'react-typist';
import { loadFull } from 'tsparticles';
import { particleConfig } from '../data';
import { ReceiveContent, ReplyContent } from './ChatMessage';
import { motion } from 'framer-motion';

const Wrapper = styled(Typist)`
  .Cursor {
    display: inline-block;
  }
  .Cursor--blinking {
    display: none;
  }
`;

type AskNameProps = {
  form: UseFormReturn<any>;
};

export const AskName = ({ form }: AskNameProps) => {
  const router = useRouter();
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {}, []);
  const { watch, setValue } = form;
  const [name, description, questions] = watch([
    'name',
    'description',
    'questions',
  ]);

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

  const renderInput = () => {
    if (!name)
      return (
        <InputGroup>
          <Input
            color="white"
            bg="rgba(136, 135, 143, 0.7)"
            border="none"
            onKeyDown={(e) => e.keyCode === 13 && handleOnSend()}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <InputRightElement>
            <Icon
              onClick={handleOnSend}
              as={SendIcon}
              w="20px"
              h="20px"
              color="white"
            />
          </InputRightElement>
        </InputGroup>
      );
    if (name && !description)
      return (
        <InputGroup>
          <Textarea
            color="white"
            bg="rgba(136, 135, 143, 0.7)"
            border="none"
            onKeyDown={(e) => e.keyCode === 13 && handleOnSend()}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <InputRightElement>
            <Icon
              onClick={handleOnSend}
              as={SendIcon}
              w="20px"
              h="20px"
              color="white"
            />
          </InputRightElement>
        </InputGroup>
      );
  };

  const handleGotoAnswerQuestions = async () => {
    setValue('step', 'askQuestions');
    setValue('isRenderQuestionWithNoAnswer', true);
  };

  return (
    <Flex as={motion.div} {...movePage} gap="10px" w="full" h="full">
      <Flex w="60%" h="full" flexDir="column">
        <VStack align="unset" justify="flex-end" flex={1}>
          <ReceiveContent isTriangle>
            <Wrapper avgTypingDelay={30} cursor={{ hideWhenDone: true }}>
              Hello! Do you have a new project idea? What is it called?
            </Wrapper>
          </ReceiveContent>
          {name && <ReplyContent>{name}</ReplyContent>}
          {!isFirstQuestion && (
            <ReceiveContent isTriangle>
              <Wrapper avgTypingDelay={30} cursor={{ hideWhenDone: true }}>
                Awesome. Can you give me a detailed description of your project?
              </Wrapper>
            </ReceiveContent>
          )}
          {description && <ReplyContent>{description}</ReplyContent>}
          {description && (
            <Wrapper avgTypingDelay={30} cursor={{ hideWhenDone: true }}>
              <ReceiveContent isTriangle>
                {`Ok. Lets follow simple steps that will let us create professional
              documents together in no time. Here is a demo version for a Project
              Specifications Document for ${name}`}
              </ReceiveContent>
            </Wrapper>
          )}
          <Text>
            {questions.map((item: any) => (
              <Text>{item.content}</Text>
            ))}
          </Text>
        </VStack>
        <HStack justify="center">
          {renderInput()}
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
      <Box w="50%" h="full" position="relative">
        <Box display="flex" h="100%" zIndex={1} pos="absolute">
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            spacing={4}
            // spacing={{ base: 10, md: 20 }}
          >
            <Text
              w="full"
              textAlign="center"
              py={10}
              fontWeight={700}
              fontSize={{
                base: 'xl',
                sm: '2xl',
                md: '3xl',
                lg: '4xl',
              }}
            >
              Where Words and Images Merge to Create Impactful Documents!{' '}
            </Text>
            <Button
              onClick={() => router.push('/generate-image')}
              mx="auto"
              w="fit-content"
              variant="primary-v2"
            >
              Try generate Image Now!
            </Button>
          </Stack>
        </Box>
        <Particles
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleConfig}
        />
      </Box>
    </Flex>
  );
};
