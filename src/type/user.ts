export interface SignInReponse {
    token:string,
    user:User
  }
  


export interface User {
    _id?: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    password: string;
  }
  