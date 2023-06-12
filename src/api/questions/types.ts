export type TOption = {
  id: number;
  name: string;
  description: string;
  type: string;
  questionId: number;
};

export interface IQuestion {
  id: number;
  name: string;
  description: string;
  questionGPT: string;
  keyword: string;
  status: boolean;
  type: 'SINGLE' | 'MULTI' | 'YESNO';
  appId: number;
  options: TOption[];
}
