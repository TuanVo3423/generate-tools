import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { AILabel } from '../AILabel';
import { AIInputSkeleton } from '../AISkeleton';

interface AITextareaProps extends TextareaProps {
  label?: string;
  name: string;
  isRequired?: boolean;
  disabled?: boolean;
  boxProps?: FormControlProps;
  isLoading?: boolean;
  skeletonProps?: FormControlProps;
  form: any;
}

export const AITextarea = ({
  form,
  placeholder,
  name,
  isLoading,
  label,
  disabled,
  isRequired,
  boxProps,
  ...rest
}: AITextareaProps) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = form;

  const isError = errors?.[name];

  if (isLoading) return <AIInputSkeleton isLoading={isLoading} />;

  return (
    <FormControl isInvalid={Boolean(isError?.message)} {...boxProps}>
      <AILabel isRequired={isRequired}>{t(label || '')}</AILabel>
      <Textarea
        //@ts-ignore
        onWheel={(e) => e.target.blur()}
        variant={isError ? 'in-valid' : 'primary'}
        placeholder={t(placeholder || '') || ''}
        opacity={disabled ? '0.4' : '1'}
        cursor={disabled ? 'not-allowed' : 'auto'}
        disabled={disabled}
        size={{ base: 'sm' }}
        {...rest}
      />

      <FormErrorMessage color="fail" fontSize="xs">
        {isError && t(isError.message)}
      </FormErrorMessage>
    </FormControl>
  );
};
