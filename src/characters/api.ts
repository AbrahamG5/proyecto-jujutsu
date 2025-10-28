export interface Characters {
  data: Datos[];
}

export interface Datos {
  id: number;
  name: string;
  species?: string;
  birthday?: string | null;
  gender?: string;
  age?: string | null;
  status?: string;
  grade?: string;
  appearance?: string;
  personality?: string;
  abilities?: string;
  image_url?: string;
}
