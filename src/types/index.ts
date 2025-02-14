// import {s} from "vitest/dist/types-198fd1d9";

import type {Themes} from "@/constants";

export type SideMenuLink = {
  name: string;
  label: string;
  iconClass?: string;
  children?: SideMenuLink[];
};

export interface Account {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  idType: string;
  idNumber: string;
  departmentId: string;
  email: string;
  phone: string;
  status: string;
  createdAt: string;
}

export interface CreateAccount {
  firstName: string;
  lastName: string;
  middleName: string;
  idType: string;
  idNumber: string;
  departmentId: string;
  email: string;
  phone: string;
}

export interface ApiSuccess {
  status:number
  data:Object
  config:ApiConfig
}
export interface ApiError {
  code:string
  name:string
  message:string
  request:ApiRequest
  response: ApiResponse
  config:ApiConfig
}

export type APIResponse<T> = {
  success: boolean
  content: T;
  status?: number;
}

export interface  ApiResponse {
  data:{
    data:Object
    message:string
    status:number
  }
}
export interface  ApiRequest {
  response:string
  responseText:string
  responseURL:string
  status:number
}

export interface  ApiConfig {
  baseURL:string
  data:string
}

export type TTheme = (typeof Themes)[number]
