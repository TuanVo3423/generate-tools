import { UseFormReturn } from 'react-hook-form';
import * as Yup from 'yup';

export interface IOption {
  id?: string;
  questionId?: string;
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
  result: string;
  isRenderQuestionWithNoAnswer: boolean;
}

export const DefaultValue: IDefaultValue = {
  name: '',
  description: '',
  questions: [],
  options: [],
  htmlDocument: '',
  step: 'askName',
  result: '',
  isRenderQuestionWithNoAnswer: false,
};

export const schema = Yup.object({});

export const handleSubmitForm = async ({
  form,
  values,
}: {
  values: IDefaultValue;
  form: UseFormReturn<any>;
}) => {
  return;
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

export const getQuestionById = (questions: IQuestion[], questionId: string) => {
  return questions.filter(
    (question: IQuestion, idx: number) => question.id === questionId
  )[0];
};

export const convertQA = (
  name: string,
  description: string,
  options: any[],
  questions: any[]
) => {
  const QuestionAndAnswers = questions.map((item) => {
    const answer = options.filter(
      (option) => option.questionId === item.id && option.checked === true
    );
    if (answer.length > 0) {
      return {
        questionName: item.content,
        answer: answer,
      };
    }
    return null; // Không trả về gì nếu không có tùy chọn cho câu hỏi này
  });
  const QASelectedPrompt = `The project name is ${name}, described as ${description}. 
  ${
    QuestionAndAnswers[0] && QuestionAndAnswers[0].answer.length !== 0
      ? 'There are some details which describing project:'
      : ''
  } 
         ${QuestionAndAnswers.map((item: any, idx: number) => {
           if (item?.answer.length !== 0 && item?.answer.length !== undefined) {
             return `${item?.questionName} -> ${item?.answer.map(
               (test: any) => test.content
             )}`;
           }
           return '';
         })}.`;
  return QASelectedPrompt;
};

export const convertOptionToString = (
  options: any[],
  questions: any[]
): string => {
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
    };
  });

  return optionsObject
    .map((option) => `Question: ${option.content} Answer: ${option.options}`)
    .join('\n');
};

export const particleConfig: any = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: '#111827',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
