export interface SignInReponse {
    token:string,
    user:User
  }
  


export interface User {
    _id?: number;
    firstName?: string;
    lastName?: string;
    email: string;
    gender?: string;
    password?: string;
    family_name?: string;
    given_name?: string;
    id?: string;
    locale?: string;
    name?: string;
    picture?: string;
    verified_email?: boolean;
    google_user?: boolean;
  }
 