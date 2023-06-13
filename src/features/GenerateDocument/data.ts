import * as Yup from 'yup';
import { UseFormReturn } from 'react-hook-form';

// handle init value of form
// handle check validator using yup

export interface IOptions {
  id: number;
  content: string;
}

export interface IDefaultValue {
  name: string;
  type: string;
  options: Array<IOptions>;
  step: string;
}

export const DefaultValue: IDefaultValue = {
  name: '',
  type: '',
  options: [],
  step: 'askType',
};

export const schema = Yup.object({});

export const handleSubmitForm = async ({
  values,
  form,
}: {
  values: IDefaultValue;
  form: UseFormReturn<any>;
}) => {
  const { setValue } = form;
  const { step } = values;
  if (step === 'askType') {
    setValue('step', 'askName');
  }
  if (step === 'askName') {
    setValue('step', 'askOptions');
  }
};
