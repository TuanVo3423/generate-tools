import { request } from '../axios';
import { IQuestion } from './types';

export const getQuestion = async (appId: number) => {
  const res = await request({
    url: `questions/apps/${appId}`,
    method: 'GET',
  });

  return res as { data: IQuestion[]; message: string };
};
