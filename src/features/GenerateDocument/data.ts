import * as Yup from 'yup';
import { UseFormReturn } from 'react-hook-form';
import { chatGPTResquest } from '@/utils/openAIRequest';
import { chatGPTPrompt } from '@/utils/openaiPrompt';
import { ChatCompletionRequestMessage } from 'openai';
import { ConvertResChatGPT } from '@/utils/convertResChatGPT';

// handle init value of form
// handle check validator using yup

export interface IFeature {
  id: number;
  content: string;
  options: Array<IOption>;
}

export interface IOption {
  id: string;
  content: string;
}

export interface IDefaultValue {
  name: string;
  type: string;
  features: Array<IFeature>;
  step: string;
  currentFeatureSelected: any;
  featuresSelected: Array<FeaturesSelected>;
}

export type FeaturesSelected = {
  id: string;
  options: Array<IOption>;
};

export const DefaultValue: IDefaultValue = {
  name: '',
  type: '',
  features: [],
  featuresSelected: [],
  currentFeatureSelected: {},
  step: 'askType',
};

export const schema = Yup.object({});

export const handleSubmitForm = async ({
  currentOptionId,
  values,
  form,
  answer,
}: {
  currentOptionId: string;
  values: IDefaultValue;
  form: UseFormReturn<any>;
  answer: string;
}) => {
  // khi nhan thi value la askName
  // khi nhan thi value la
  const {
    step,
    name,
    type,
    features,
    featuresSelected,
    currentFeatureSelected,
  } = values;
  // console.log('step', step);
  const { setValue } = form;
  if (step === 'askType') {
    setValue('type', answer);
    setValue('step', 'askName');
  }
  if (step === 'askName') {
    setValue('name', answer);
    setValue('step', 'askFeature');
    const content = chatGPTPrompt(type, name);
    const promptResquest: ChatCompletionRequestMessage[] = [
      {
        role: 'user',
        content,
      },
    ];
    const response = await chatGPTResquest(promptResquest);
    const convertedData = await ConvertResChatGPT(response?.content || '');
    // console.log(convertedData);
    setValue('features', convertedData);
  }
  // you are current at askName and when you click submit, it will handle the value and return setValue = askOptions
  // dang ask name -> nhan send -> askOptions
  if (step === 'askFeature') {
    if (features.length === 0) {
      console.log(featuresSelected);
    }
    // khi chon thi se chon id cua feature dua vao stt
    const featureSelected = features[Number(answer)];

    setValue('currentFeatureSelected', featureSelected);
    setValue('step', 'askOptions');
  }

  if (step === 'askOptions') {
    const arrayIdOrders = answer.split(',');
    const optionsSelected = arrayIdOrders.map(
      (item, idx) => currentFeatureSelected.options[Number(arrayIdOrders[idx])]
    );
    setValue('featuresSelected', [
      ...featuresSelected,
      {
        id: currentFeatureSelected.id,
        content: currentFeatureSelected.content,
        options: optionsSelected,
      },
    ]);
    const featureAlive = features.filter(
      (item) => item.id !== currentFeatureSelected.id
    );
    setValue('features', featureAlive);
    setValue('currentFeatureSelected', {});
    setValue('step', 'askFeature');
    // select feature by id and submit form -> data will saved into optionsSelected
    // with idOption and idListFeature
  }
};
