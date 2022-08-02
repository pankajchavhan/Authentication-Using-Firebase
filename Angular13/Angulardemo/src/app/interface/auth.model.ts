export interface SignUpRequest {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface SignUpResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
   
}

export interface SignInRequest {
    email: string;
    password: string;
    returnSecureToken?: boolean;
} 

export interface SignInResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: string;  
}
