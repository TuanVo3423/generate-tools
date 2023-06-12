import { EyeClosedIcon, EyeIcon } from '@/icons';
import {
  Box,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { AILabel } from '../AILabel';
import { ClearTextIcon } from '@/icons/clear-text';

interface AIInputPasswordProps extends InputProps {
  label?: string;
  name: string;
  isRequired?: boolean;
  form: any;
}

export const AIInputPassword = ({
  form,
  name,
  label,
  isRequired = false,
  ...rest
}: AIInputPasswordProps) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const handClearText = () => {
    resetField(label, '');
  };

  const {
    register,
    resetField,
    formState: { errors },
  } = form;

  const isError = errors?.[name];

  return (
    <FormControl isInvalid={Boolean(isError?.message)}>
      <AILabel isRequired={isRequired}>{t(label || '')}</AILabel>
      <InputGroup>
        <Input
          pr="3.5rem"
          type={show ? 'text' : 'password'}
          variant={isError ? 'in-valid' : 'primary'}
          size={{ base: 'sm' }}
          {...register(name as string)}
          {...rest}
        />

        <InputRightElement
          gap="5px"
          width="5rem"
          h={{ base: '44px', xxxl: '50px' }}
        >
          <Box onClick={handClearText} cursor="pointer">
            <Icon
              as={ClearTextIcon}
              w={{ base: '1rem', xxxl: '1.5rem' }}
              h={{ base: '1rem', xxxl: '1.5rem' }}
              color="text.300"
            />
          </Box>

          {show ? (
            <Box onClick={handleClick} cursor="pointer">
              <Icon
                as={EyeClosedIcon}
                w={{ base: '1rem', xxxl: '1.5rem' }}
                h={{ base: '1rem', xxxl: '1.5rem' }}
                color="text.300"
              />
            </Box>
          ) : (
            <Box onClick={handleClick} cursor="pointer">
              <Icon
                as={EyeIcon}
                w={{ base: '1rem', xxxl: '1.5rem' }}
                h={{ base: '1rem', xxxl: '1.5rem' }}
                color="text.300"
              />
            </Box>
          )}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage color="fail" fontSize="xs">
        {errors[name] && t(errors[name].message)}
      </FormErrorMessage>
    </FormControl>
  );
};
