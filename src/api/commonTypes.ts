export type ResponseWithPagination<T> = {
  message: string;
  count: number;
  data: T[];
};

export interface GetParams {
  limit?: number;
  page?: string;
  status?: number;
}
