import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { UseFormReturn } from 'react-hook-form';

type InputFieldProps = FormControlProps & {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  form: UseFormReturn<any>;
};

export const InputField = ({
  name,
  label,
  placeholder,
  type,
  form,
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const isErrors = errors?.[name];
  return (
    <FormControl isInvalid={!!isErrors?.message}>
      <FormLabel color="#000">{label || ''}</FormLabel>
      <InputGroup>
        <Input
          w="full"
          placeholder={placeholder}
          type={type}
          {...register(name, {
            valueAsNumber: type === 'number' ? true : false,
          })}
        />
      </InputGroup>
      <FormErrorMessage>{(isErrors?.message || '') as string}</FormErrorMessage>
    </FormControl>
  );
};
