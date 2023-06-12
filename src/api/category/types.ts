export interface ICategory {
  id: number;
  name: string;
  thumbnail: string;
  status: string;
  categoryId?: number;
}

export interface ICategoryDetails {
  id: number;
  name: string;
  thumbnail: string;
  status: string;
  apps: ICategory[];
}
