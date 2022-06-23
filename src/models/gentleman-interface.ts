export interface iGentleman {
  id?: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  isSelected: boolean;
}

export interface iMenuOptions {
  path: string;
  label: string;
}
