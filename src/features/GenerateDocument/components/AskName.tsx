import React from 'react';
import { ReceiveContent, ReplyContent } from './ChatMessage';
import { UseFormReturn } from 'react-hook-form';

export type AskNameProps = {
  form: UseFormReturn<any>;
};

export const AskName = ({ form }: AskNameProps) => {
  const { watch } = form;
  const [step] = watch(['step']);
  const [name] = watch(['name']);
  return (
    <>
      {(step === 'askName' || name) && (
        <ReceiveContent isTriangle>what name?</ReceiveContent>
      )}
      {name && <ReplyContent isTriangle>{name}</ReplyContent>}
    </>
  );
};
