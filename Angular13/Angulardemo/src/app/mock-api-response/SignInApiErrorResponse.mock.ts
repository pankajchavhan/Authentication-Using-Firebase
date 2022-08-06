

export function mockSignInApiErrorResponse(){
    return {
        status: 400,
        statusText: "OK",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
        ok: false,
        name: "HttpErrorResponse",
        message: "Http failure response for https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94: 400 OK",
        error: {
            error: {
                code: 400,
                message: "EMAIL_NOT_FOUND",
                
            }
        }
    }
}

export function mockSignInApiErrorResponse1(){
    return {
        status: 400,
        statusText: "OK",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
        ok: false,
        name: "HttpErrorResponse",
        message: "Http failure response for https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94: 400 OK",
        error: {
            error: {
                code: 400,
                message: "INVALID_PASSWORD",
                
            }
        }
    }
}

export function mockSignInApiErrorResponse2(){
    return {
        status: 400,
        statusText: "OK",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
        ok: false,
        name: "HttpErrorResponse",
        message: "Http failure response for https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94: 400 OK",
        error: {
            error: {
                code: 400,
                message: "USER_DISABLED",
                
            }
        }
    }
}