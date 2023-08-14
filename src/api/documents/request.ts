import { IDocument } from './types';
import { request } from '../axios';

export const createDocuments = async (data: IDocument) => {
  const res = await request({
    url: `documents`,
    method: 'POST',
    data,
  });
  return res;
};

export const getDocument = async (document_id: string) => {
  const res = await request({
    url: `documents/${document_id}`,
    method: 'GET',
  });
  return res;
};

export const deleteDocument = async (document_id: string) => {
  const res = await request({
    url: `documents/${document_id}`,
    method: 'DELETE',
  });
  return res;
};

export const updateDocument = async ({
  document_id,
  data,
}: {
  document_id: string;
  data: any;
}) => {
  const res = await request({
    url: `documents/${document_id}`,
    method: 'PATCH',
    data,
  });
  return res;
};
