import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

interface IAITextProps extends TextProps {
  children?: React.ReactNode;
}
export const AIText = ({ children, ...rest }: IAITextProps) => {
  return (
    <Text fontSize={{ base: 'sm' }} {...rest}>
      {children}
    </Text>
  );
};

export const AIHeading1 = ({ children, ...rest }: IAITextProps) => {
  return (
    <Text
      fontSize={{ base: '2xxl' }}
      color="text.0"
      fontWeight="bold"
      {...rest}
    >
      {children}
    </Text>
  );
};

export const AIHeading2 = ({ children, ...rest }: IAITextProps) => {
  return (
    <Text fontSize={{ base: 'lg' }} color="text.50" fontWeight="bold" {...rest}>
      {children}
    </Text>
  );
};
