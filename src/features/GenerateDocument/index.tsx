import { Box, Button, Flex, HStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultValue, IDefaultValue, handleSubmitForm, schema } from './data';
import { RoomChat } from './components';

type Props = {};

type mapping = {
  [key in string]: 'name' | 'type' | 'options' | 'step';
};
const StringMapping: mapping = {
  askType: 'type',
  askName: 'name',
  askOptions: 'options',
  step: 'step',
};

export function GenerateDocument({}: Props) {
  const [text, setText] = useState('');
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: DefaultValue,
  });

  const { control, handleSubmit, watch, setValue } = form;
  const [step] = watch(['step']);

  const onSubmit = async (values: IDefaultValue) => {
    setValue(StringMapping[step], text);
    setText('');
    await handleSubmitForm({
      values,
      form,
      // toggleLoading,
    });
  };

  const renderChat = () => {
    return <RoomChat form={form} />;
  };

  return (
    <Box id="create-project" as="form" onSubmit={handleSubmit(onSubmit)}>
      <Flex minH="85vh">{renderChat()}</Flex>
      <HStack>
        <Input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button type="submit" maxW="200px">
          Send
        </Button>
      </HStack>
    </Box>
  );
}
type option = {
  id: number;
  content: string;
};

export interface IFeature {
  id: number;
  content: string;
  options: Array<option>;
}
