import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { AILabel } from '../AILabel';
import { AIInputSkeleton } from '../AISkeleton';

interface AIInputProps extends InputProps {
  label?: string;
  name: string;
  isRequired?: boolean;
  disabled?: boolean;
  boxProps?: FormControlProps;
  isLoading?: boolean;
  skeletonProps?: FormControlProps;
  rightElement?: React.ReactElement;
  form: any;
}

export const AIInput = ({
  form,
  placeholder,
  type,
  name,
  isLoading,
  label,
  disabled,
  isRequired,
  boxProps,
  rightElement,
  ...rest
}: AIInputProps) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = form;

  const isError = errors?.[name];

  if (isLoading) return <AIInputSkeleton isLoading={isLoading} />;

  return (
    <FormControl isInvalid={Boolean(isError?.message)} {...boxProps}>
      <AILabel isRequired={isRequired}>{t(label || '')}</AILabel>
      <InputGroup>
        <Input
          //@ts-ignore
          onWheel={(e) => e.target.blur()}
          variant={isError ? 'in-valid' : 'primary'}
          placeholder={t(placeholder || '')}
          opacity={disabled ? '0.4' : '1'}
          cursor={disabled ? 'not-allowed' : 'auto'}
          disabled={disabled}
          type={type}
          size={{ base: 'sm' }}
          {...register(name as string, {
            valueAsNumber: type === 'number' ? true : false,
          })}
          {...rest}
        />
        <InputRightElement w="44px" h="44px">
          {rightElement}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage color="fail" fontSize="xs">
        {isError && t(isError.message)}
      </FormErrorMessage>
    </FormControl>
  );
};
