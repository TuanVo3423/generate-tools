// add message vao Room thi nó sẽ tự động append vào đuôi, đó là component mình muốn
import { Box, Button, HStack, Input, Spinner, Text } from '@chakra-ui/react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { AskType, ReceiveContent, ReplyContent } from './ChatMessage';
import { AskName } from './AskName';
import { AskFeature } from './AskFeature';
import { useState } from 'react';
export interface IRoomChatProps {
  content?: string;
  form: UseFormReturn<any>;
}
export const RoomChat = ({ content, form }: IRoomChatProps) => {
  //
  const { control, handleSubmit, watch } = form;
  const [temp, setTemp] = useState(0);
  const [step] = watch(['step']);
  const [type] = watch(['type']);
  const [name] = watch(['name']);
  const [options] = watch(['options']);
  const [optionsSelected] = watch(['optionsSelected']);
  return (
    <Box w="100%" display="flex" flexDir="column" justifyContent="flex-end">
      <AskType form={form} />
      <AskName form={form} />

      {Array.from('4').map((item) => (
        <AskFeature form={form} />
      ))}
    </Box>
  );
};
