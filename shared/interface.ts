import type { ReactNode } from "react";

export interface IPayload {
  id: string;
  iat: number;
  exp: number;
}

export interface IQuickAccess {
  img: string;
  title: string;
  description: string;
  button_text: string;
  link?: string;
}

export interface IQuickaccessCarouselProps {
  children: ReactNode;
  slides?: IQuickAccess[];
}

export interface IButtonCardProps {
  text: string;
}

export interface ISubCategory {
  name: string;
}

export interface ICategory extends Document {
  name: string;
  subCategories: ISubCategory[];
}

export interface User {
  _id: string;
  email: string;
  address: string;
  username: string;
  password: string;
  cart?: IProduct[];
  purchaseHistory?: PurchaseHistory[];
}

export interface IProduct {
  title: string;
  provider: string;
  image: string;
  price: number;
  stock?: number;
  currentItemCount: number;
}

export interface PurchaseHistory {
  date: string;
  items: IProduct[];
  total: number;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface User {
  _id: string;
  email: string;
  address: string;
  username: string;
  password: string;
  cart?: IProduct[];
  purchaseHistory?: PurchaseHistory[];
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  signup: (user: User) => Promise<void>;
  signin: (user: User) => Promise<void>;
  logout: () => void;
  updateUserLocal: (user: User) => void;
}

export interface CartContextType {
  cart: IProduct[];
  purchaseHistory: PurchaseHistory[];

  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setPurchaseHistory: React.Dispatch<React.SetStateAction<PurchaseHistory[]>>;

  handleAddItem: (item: IProduct) => void;
  handleRemoveItem: (Iproduct: IProduct) => void;
  handleBuy: () => void;
}

export interface UserUpdateRequestProps {
  email: string;
  cart: IProduct[];
  purchaseHistory: PurchaseHistory[];
}

export interface CarouselLoopProps {
  children: React.ReactNode;
}

export interface ButtonsProps {
  onClick: () => void;
}
