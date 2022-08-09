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
    registered: boolean;  
    displayName?: string;
    kind?: string
}

export interface resetPasswordRequest {
    email: string;
    requestType:string;
} 

export interface resetPasswordResponse {
    email: string;
} 