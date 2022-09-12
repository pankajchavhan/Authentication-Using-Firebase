export interface GoogleSignInApiResponse {
    credential: {
        idToken: string,
        accessToken: string,
        pendingToken?: any,
    },
    additionalUserInfo: {
        isNewUser?: boolean,
        providerId?: string,
        profile: {
            name: string,
            granted_scopes?: string,
            id: string,
            verified_email: boolean,
            given_name: string,
            locale?: string,
            family_name: string,
            email: string,
            picture?: string
        }
    },
    user: {
        uid: string,
        email: string,
        emailVerified: boolean,
        displayName: string,
        isAnonymous?: boolean,
        photoURL?: string,
        providerData: Array<providerData>,
        stsTokenManager: {
            refreshToken: string,
            accessToken: string,
            expirationTime: number
        },
        createdAt?: string,
        lastLoginAt?: string,
        apiKey?: string,
        appName?: string
    }
}
 
interface providerData {
    providerId: string,
    uid: string,
    displayName: string,
    email: string,
    phoneNumber?: any,
    photoURL?: string
}