import { Text, TextProps } from '@chakra-ui/react';
import React, { useState } from 'react';

interface ReadMoreProps extends TextProps {
  text: string;
  numberOfChars: number;
}
export const ReadMore = ({ text, numberOfChars, ...rest }: ReadMoreProps) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Text
      {...rest}
      mt="0 !important"
      lineHeight="160%"
      fontSize="14px"
      color="#B7B6BB"
    >
      {isReadMore ? text.slice(0, numberOfChars) : text}
      {text.length > numberOfChars && (
        <Text
          fontSize="14px"
          cursor="pointer"
          display="inline"
          lineHeight="160%"
          color="rgba(255,255,255,.2)"
          onClick={toggleReadMore}
        >
          {isReadMore ? ' ... See more' : ' Show less'}
        </Text>
      )}
    </Text>
  );
};
