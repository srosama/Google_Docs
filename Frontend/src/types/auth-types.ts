export type AuthTypes = {
    LoginOrRegister: boolean,

};

export type User = {
    user_id: string;
    email: string;
    role: string;
    first_name: string;
    last_name: string;
    token: string;
    refreshToken?: string; // Optional: if you manage refresh tokens client-side
};


export type AuthState = {
    user: User | null,
    loading: boolean,
}

export type AuthAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean };


export type FormValues = {
    email: string;
    password: string;
}