import { InputField, InputPassword } from '@/ui-kit';
import { Button, Stack } from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form';

type FormLoginProps = {
  form: UseFormReturn<any>;
  handleLogin: (value: any) => void;
};

export const FormLogin = ({ form, handleLogin }: FormLoginProps) => {
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
      onSubmit={handleSubmit(handleLogin)}
    >
      <InputField
        form={form}
        label="Username"
        name="username"
        placeholder="Please enter username..."
        type="text"
      />
      <InputPassword
        form={form}
        label="Password"
        name="password"
        placeholder="Please enter password..."
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
        Login
      </Button>
    </Stack>
  );
};
