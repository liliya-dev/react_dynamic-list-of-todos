export interface TodoInterface {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoWithUserInterface {
  completed: boolean;
  title: string;
  user: string | undefined;
  id: number;
}

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: {
    city: string;
    createdAt: string;
    id: number;
    street: string;
    suite: string;
    updatedAt: string;
    userId: number;
    zipcode: string;
  };
  createdAt: string;
  updatedAt: string;
}
