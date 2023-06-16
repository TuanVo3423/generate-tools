import { Box, Button, Flex, HStack, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DefaultValue, IDefaultValue, handleSubmitForm, schema } from './data';
import { AskType, AskName, AskFeature, RoomChat } from './components';

type Props = {};

type mapping = {
  [key in string]: 'name' | 'type' | 'features' | 'featuresSelected' | 'step';
};
const StringMapping: mapping = {
  askType: 'type',
  askName: 'name',
  askFeature: 'features',
  askOptions: 'featuresSelected',
  step: 'step',
};

export function GenerateDocument({}: Props) {
  const [text, setText] = useState('');
  // console.log(text);
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: DefaultValue,
  });

  const { control, handleSubmit, watch, setValue } = form;
  const [features] = watch(['features']);

  const onSubmit = async (values: IDefaultValue) => {
    

    await handleSubmitForm({
      values,
      form,
      currentOptionId: '',
      answer: text,
    });
    setText('');
  };

  return (
    <Box id="create-project" as="form" onSubmit={handleSubmit(onSubmit)}>
      <Flex justify="flex-end" flexDir="column" minH="85vh">
        <RoomChat form={form} />
      </Flex>
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
