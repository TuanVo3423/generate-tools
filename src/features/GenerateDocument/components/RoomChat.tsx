// add message vao Room thi nó sẽ tự động append vào đuôi, đó là component mình muốn
import { Box } from '@chakra-ui/react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { ReceiveContent, ReplyContent } from './ChatMessage';
export interface IRoomChatProps {
  content?: string;
  form: UseFormReturn<any>;
}
export const RoomChat = ({ content, form }: IRoomChatProps) => {
  //
  const { control, handleSubmit, watch } = form;
  const [step] = watch(['step']);
  const [type] = watch(['type']);
  const [name] = watch(['name']);
  const [options] = watch(['options']);

  return (
    <Box w="100%" display="flex" flexDir="column" justifyContent="flex-end">
      <ReceiveContent isTriangle>what type?</ReceiveContent>
      {type && <ReplyContent isTriangle>{type}</ReplyContent>}
      {(step === 'askName' || name) && (
        <ReceiveContent isTriangle>what name?</ReceiveContent>
      )}
      {name && <ReplyContent isTriangle>{name}</ReplyContent>}
      {step === 'askOptions' && !options && <></>}
    </Box>
  );
};
