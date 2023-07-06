import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

type InputFieldProps = FormControlProps & {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  form: UseFormReturn<any>;
};

export const InputPassword = ({
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
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <FormControl isInvalid={!!isErrors?.message}>
      <FormLabel color="#000">{label || ''}</FormLabel>
      <InputGroup>
        <Input
          w="full"
          placeholder={placeholder}
          type={show ? 'text' : 'password'}
          {...register(name, {
            valueAsNumber: type === 'number' ? true : false,
          })}
        />
        <InputRightElement>
          {show ? (
            <ViewOffIcon onClick={handleClick} />
          ) : (
            <ViewIcon onClick={handleClick} />
          )}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{(isErrors?.message || '') as string}</FormErrorMessage>
    </FormControl>
  );
};
