

export function mockSignUpErrorResponse(){
    return{
        status: 400,
        statusText: "OK",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
        ok: false,
        name: "HttpErrorResponse",
        message: "Http failure response for https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94: 400 OK",
        error: {
            error: {
                code: 400,
                message: "EMAIL_EXISTS",
                errors: [
                    {
                        message: "EMAIL_EXISTS",
                        domain: "global",
                        reason: "invalid"
                    }
                ]
            }
        }
    }
}

export function mockSignUpErrorResponse1(){
    return{
        status: 400,
        statusText: "OK",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
        ok: false,
        name: "HttpErrorResponse",
        message: "Http failure response for https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94: 400 OK",
        error: {
            error: {
                code: 400,
                message: "TOO_MANY_ATTEMPTS_TRY_LATER",
                errors: [
                    {
                        message: "TOO_MANY_ATTEMPTS_TRY_LATER",
                        domain: "global",
                        reason: "invalid"
                    }
                ]
            }
        }
    }
}

export function mockSignUpErrorResponse2(){
    return{
        status: 400,
        statusText: "OK",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
        ok: false,
        name: "HttpErrorResponse",
        message: "Http failure response for https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94: 400 OK",
        error: {
            error: {
                code: 400,
                message: "OPERATION_NOT_ALLOWED",
                errors: [
                    {
                        message: "OPERATION_NOT_ALLOWED",
                        domain: "global",
                        reason: "invalid"
                    }
                ]
            }
        }
    }
}

export function mockSignUpErrorResponse3(){
    return{
        status: 400,
        statusText: "OK",
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
        ok: false,
        name: "HttpErrorResponse",
        message: "Http failure response for https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94: 400 OK",
        error: {
            error: {
                code: 400,
                message: "INVALID_EMAIL",
                errors: [
                    {
                        message: "INVALID_EMAIL",
                        domain: "global",
                        reason: "invalid"
                    }
                ]
            }
        }
    }
}