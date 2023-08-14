import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthLayout } from '../components';
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FormSignUp } from './components';
import { IUserSignUp, schema_signup } from './data';
import { useMutation } from 'react-query';
import { ISignUp, signUp } from '@/api/auth';

type Props = {};

export const SignUp = (props: Props) => {
  const toast = useToast();
  const router = useRouter();
  const form = useForm<IUserSignUp>({
    resolver: yupResolver(schema_signup),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  const { mutateAsync: handleSignUpSubmit, isLoading } = useMutation(
    async (data: ISignUp) => {
      const rest = await signUp(data);
      return rest;
    },
    {
      onSuccess: async (data: any) => {
        router.push('/');
        toast({
          description: data.message,
          status: 'success',
        });
      },
      onError: (error: any) => {
        toast({
          description: error.message,
          status: 'error',
        });
      },
    }
  );

  return (
    <AuthLayout>
      <Box h="full" p="36px" bg="#f9fafb">
        <Flex gap={10} flexDir="column">
          <Button
            onClick={() => router.push('/auth/sign-up')}
            ml="auto"
            w="fit-content"
            variant="while-line-while"
          >
            <Text fontSize="16px" fontWeight="400" letterSpacing={1} mr={1}>
              No account yet?{' '}
            </Text>
            <Text display="inline-block" color="rgba(76,53,222)">
              Sign up
            </Text>
          </Button>
          <Stack spacing="30px" mx="auto" maxW="28rem" w="full">
            {/* header */}
            <Stack align="center" spacing="48px">
              <Text
                color="#000"
                fontWeight="bold"
                fontSize="32px"
                lineHeight="40px"
              >
                Welcome back! 🙌
              </Text>
              {/* <Button variant="while-line-while">
                <Icon as={GoogleIcon} mr={4} />
                <Text fontWeight={400} fontSize="16px" lineHeight="16px">
                  Log in with google
                </Text>
              </Button> */}
              {/* <HStack w="full">
                <Divider bg="#e5e7eb" />
                <Text flexShrink={0} color="rgba(107,114,128)">
                  Or continue with
                </Text>
                <Divider bg="#e5e7eb" />
              </HStack> */}
            </Stack>
            {/* form */}
            <FormSignUp form={form} handleSignUp={handleSignUpSubmit} />
            <Box textAlign="center">
              <Text color="rgba(107,114,128)">
                By clicking &quot;Log in&quot; you agree to Durable&apos;s
              </Text>
              <Text color="rgba(107,114,128)">
                <Link color="rgba(76,53,222)" href="#">
                  Privacy Policy
                </Link>
                {` `}and{` `}
                <Link color="rgba(76,53,222)" href="#">
                  Terms of Service.
                </Link>
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </AuthLayout>
  );
};
