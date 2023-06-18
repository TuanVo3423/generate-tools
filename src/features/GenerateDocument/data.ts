import * as Yup from 'yup';
import { UseFormReturn } from 'react-hook-form';
import { DocumentPrompt } from '@/utils/openaiPrompt';
import { chatGPTResquest } from '@/utils/openAIRequest';
import MarkdownIt from 'markdown-it';

export interface IOption {
  id: string;
  questionId: string;
  checked: boolean;
  content: string;
}

export interface IQuestion {
  id: string;
  content: string;
}
export interface IDefaultValue {
  name: string;
  description: string;
  questions: Array<IQuestion>;
  options: Array<IOption>;
  step: string;
  htmlDocument: string;
}

export const DefaultValue: IDefaultValue = {
  name: '',
  description: '',
  questions: [],
  options: [],
  htmlDocument: '',
  step: 'askName',
};

export const schema = Yup.object({});

export const handleSubmitForm = async ({
  form,
  values,
}: {
  values: IDefaultValue;
  form: UseFormReturn<any>;
}) => {
  const { step, description, name, options, questions } = values;
  const { setValue } = form;
  if (step === 'generateDocument') {
    const optionsObject = questions.map((question) => {
      const matchingOptions = options.filter(
        (option) => option.questionId === question.id && option.checked
      );
      const optionsContent = matchingOptions.map(
        (matchingOption) => matchingOption.content
      );
      return {
        content: question.content,
        options: optionsContent.join(''),
        // 'Answer: ' +
      };
    });
    const promptGenerateDocument = DocumentPrompt(
      name,
      description,
      optionsObject
    );
    const response = await chatGPTResquest([
      {
        role: 'user',
        content: promptGenerateDocument,
      },
    ]);
    if (response) {
      const md = new MarkdownIt();
      const htmlRes = md.render(response?.content);
      setValue('htmlDocument', htmlRes);
    }
  }
};

export const replaceSpecialCharacters = (response: string): Array<string> => {
  return response
    .split(/<br\/>|<br>|<br \/>|\n/)
    .filter(function (item) {
      return /^\d/.test(item);
    })
    .map((item) => item.replace(/^\d+\.\s/, ''));
};

const isQuestionIdExists = (questionId: string, options: IOption[]) => {
  return options.some(
    (option: any) => option.questionId === questionId && option.checked === true
  );
};
export const isReadyForRequestGeneration = (
  questions: IQuestion[],
  options: IOption[]
) => {
  if (questions.length !== 0) {
    return questions.every((question: any) =>
      isQuestionIdExists(question.id, options)
    );
  }
  return false;
};
