import { request } from '../axios';
import { ISelection } from './types';

export const createSelections = async (data: ISelection) => {
  const res = await request({
    url: `selections`,
    method: 'POST',
    data,
  });
  return res;
};

export const generateDocument = async (selectionId: number) => {
  const res = await request({
    url: `/chatgpt/generate-document/${selectionId}`,
    method: 'POST',
  });
  return res;
};

export const generateUserflow = async (selectionId: number) => {
  const res = await request({
    url: `/chatgpt/generate-user-flow/${selectionId}`,
    method: 'POST',
  });
  return res;
};

export const getDocument = async (selectionId: number) => {
  const res = await request({
    url: `/chatgpt/generate-document/${selectionId}`,
    method: 'GET',
  });
  return res;
};
