import { UseFormReturn } from 'react-hook-form';
import { InputField, InputPassword } from '@/ui-kit';
import { Button, Stack } from '@chakra-ui/react';

type FormSignUpProps = {
  form: UseFormReturn<any>;
  handleSignUp: (value: any) => void;
};
export const FormSignUp = ({ form, handleSignUp }: FormSignUpProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  return (
    <Stack
      h="100%"
      justify="center"
      spacing={6}
      as="form"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <InputField
        form={form}
        label="Username"
        name="name"
        placeholder="Please enter your username..."
        type="text"
      />
      <InputField
        form={form}
        label="Email"
        name="email"
        placeholder="Please enter your email..."
        type="text"
      />
      <InputPassword
        form={form}
        label="Password"
        name="password"
        placeholder="Please enter password..."
        type="password"
      />

      <InputPassword
        form={form}
        label="Confirm Password"
        name="confirm_password"
        placeholder="Please enter confirm password..."
        type="password"
      />

      <Button
        bg="rgba(76,53,222)"
        opacity={0.9}
        color="white"
        isLoading={isSubmitting}
        type="submit"
        _hover={{
          opacity: 1,
        }}
      >
        SignUp
      </Button>
    </Stack>
  );
};
