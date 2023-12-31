import { useForm } from 'react-hook-form';
import { DefaultValue, schema, handleSubmitForm, IDefaultValue } from './data';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@chakra-ui/react';
import { AskName, AskQuestions } from './components';
import dynamic from 'next/dynamic';
const GenerateDocumentComp = dynamic(
  () => import('./components/GenerateDocument'),
  {
    ssr: false,
  }
);

export const GenerateDocument = () => {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: DefaultValue,
  });

  const { watch, handleSubmit } = form;
  const [step] = watch(['step']);
  const onSubmit = async (values: IDefaultValue) => {
    await handleSubmitForm({
      form,
      values,
    });
  };

  const renderApp = () => {
    if (step === 'askName') return <AskName form={form} />;
    if (step === 'askQuestions')
      return <AskQuestions handleSubmit={handleSubmit(onSubmit)} form={form} />;
  };
  if (step === 'generateDocument') return <GenerateDocumentComp form={form} />;

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e: any) => e.keyCode === 13 && e.preventDefault()}
      as="form"
      w="full"
      h="full"
    >
      {renderApp()}
    </Box>
  );
};
