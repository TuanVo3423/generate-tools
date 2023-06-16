import React from 'react';
import { ReceiveContent, ReplyContent } from './ChatMessage';
import { UseFormReturn } from 'react-hook-form';

export type AskTypeProps = {
  form: UseFormReturn<any>;
};

export const AskType = ({ form }: AskTypeProps) => {
  const { watch } = form;
  const [type] = watch(['type']);
  return (
    <>
      <ReceiveContent isTriangle>what type?</ReceiveContent>
      {type && <ReplyContent isTriangle>{type}</ReplyContent>}
    </>
  );
};

