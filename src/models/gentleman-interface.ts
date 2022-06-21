export interface iGentleman {
  id?: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

export interface iMenuOptions {
  path: string;
  label: string;
}
