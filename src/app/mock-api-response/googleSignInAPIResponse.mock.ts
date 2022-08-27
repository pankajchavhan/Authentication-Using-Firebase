export function mockGoogleSignInApiResponse(){
    return {
        credential: {
            idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkYTEwNjY0NTNkYzlkYzNkZDkzM2E0MWVhNTdkYTNlZjI0MmIwZjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTI4NDQyMTgzNzQ1LWk2cWRpNmExdTlsOGRpOWExZjk4b3VtbThlMmc5NmduLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTI4NDQyMTgzNzQ1LWk2cWRpNmExdTlsOGRpOWExZjk4b3VtbThlMmc5NmduLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEyNTc0MjUwNzk5ODMwMjk0NjA2IiwiZW1haWwiOiJwYW5rYWpjaGF2aGFuNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Im9ZRXltLUJCLXV1ckNxaks1ODYyZ1EiLCJpYXQiOjE2NjA0NzgzMzYsImV4cCI6MTY2MDQ4MTkzNn0.PHHNc86maMAtA3PtQ2EHyV5ca4k3GNIyN1OsXcIO8BK8l8dTm-D0pTCXSKACRshkCfEO4m0eyMGC8SZR856y09d9mAqowDMZGYApjGGwxmwFq5fVcphY96Rm2284Dyoq3IeRzH6gbvHaHjo0VBntxKmGhWnMQ1lg0gY5z82Dm_ZTOyZO2sd8HeLv-rrwf257iAuVtiO3w0Du5l-j4ESAOmOBCMFKZLo93BUP21UFEjL4Qycp6HUCbc9aO8ocGlK9Hqq-533wPmUK127n-A9vgOtVDyRT4ptOoaABKrYOmRWPzRbKwj1tIksTXV8CAcQUQXI0_J64_916gbvdrq1bfg",
            accessToken: "ya29.A0AVA9y1vQiXKgIWFc6HArZDZoku-5oDSV2x2hGM4s-MJbXpl60QoP9hSJ5PpoEl8X9zEorJYGxta0iZOSxx-sOz73LHvcpkobTjcE3RLuGBFSckDq99kiQw1fwtsbLmV80bprB7egUtyl-mpzPouT5twOl3V-MAaCgYKATASATASFQE65dr8SI_XZbFbtij-wDcVygrQMg0165",
            pendingToken: null,
        },
        additionalUserInfo: {
            isNewUser: false,
            providerId: "google.com",
            profile: {
                name: "pankaj chavhan",
                granted_scopes: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
                id: "112574250799830294606",
                verified_email: true,
                given_name: "pankaj",
                locale: "en",
                family_name: "chavhan",
                email: "pankajchavhan5@gmail.com",
                picture: "https://lh3.googleusercontent.com/a-/AFdZuco-JekahFr7IdV00HuCJCgWUnWJip-zr4QPJTeHWw=s96-c"
            }
        },
        user: {
            uid: "Vi6eouGFzXU3woTuNFtAYlfjFQ93",
            email: "pankajchavhan5@gmail.com",
            emailVerified: true,
            displayName: "pankaj chavhan",
            isAnonymous: false,
            photoURL: "https://lh3.googleusercontent.com/a-/AFdZuco-JekahFr7IdV00HuCJCgWUnWJip-zr4QPJTeHWw=s96-c",
            providerData: [
                {
                    providerId: "google.com",
                    uid: "112574250799830294606",
                    displayName: "pankaj chavhan",
                    email: "pankajchavhan5@gmail.com",
                    phoneNumber: null,
                    photoURL: "https://lh3.googleusercontent.com/a-/AFdZuco-JekahFr7IdV00HuCJCgWUnWJip-zr4QPJTeHWw=s96-c"
                }
            ],
            stsTokenManager: {
                refreshToken: "AOEOulYCNuDz_DeYHE2sbmqxaZ6xEoI1g3BJhy3vqPbs90yBncvW-qVEZbmN4iuXf1I0uvY6Fvoq3kqinudyCteHhLP_vLpoWGKNV1SiMsAGdb-YniEd4sQfvM8qIIuJgO4ow1FztPqG9MgoUWU0qYHubjWGQsgfZTW17PM1ZSfDjWemzfFLnCtBcGHuS9EwDo8yHgH9v8VbZdFDmge7Vh7KEs9Of7BamVHJI33YiNxgDGtmoUUaPNmtTDcgLQ46OxroguexsJKFnHSNK2l8UBHwMQWV474A3938VMhTAYQxSLRPIYeRDcpAzzMFIZi9poPBkgXAKgQrIyv8GAvQ9OoguhzNMHt7pxe_eML-NNl13vKCOeM3cnnH6viSIbNzGtrMyTC2iavV471D-oxn2NA_rGLFrfs6x6nF9rJCFlKSHuBxMfTMumrDhb-vwZHNP87OI5UUKnLV",
                accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFkMWIxOWYwZjU4ZTJjOWE5Njc3M2M5MmNmODA0NDEwMTc5NzEzMjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoicGFua2FqIGNoYXZoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FGZFp1Y28tSmVrYWhGcjdJZFYwMEh1Q0pDZ1dVbldKaXAtenI0UVBKVGVIV3c9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5ndWxhci0xMy1hNTJmOSIsImF1ZCI6ImFuZ3VsYXItMTMtYTUyZjkiLCJhdXRoX3RpbWUiOjE2NjA0NzgzMzYsInVzZXJfaWQiOiJWaTZlb3VHRnpYVTN3b1R1TkZ0QVlsZmpGUTkzIiwic3ViIjoiVmk2ZW91R0Z6WFUzd29UdU5GdEFZbGZqRlE5MyIsImlhdCI6MTY2MDQ3ODMzNiwiZXhwIjoxNjYwNDgxOTM2LCJlbWFpbCI6InBhbmthamNoYXZoYW41QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEyNTc0MjUwNzk5ODMwMjk0NjA2Il0sImVtYWlsIjpbInBhbmthamNoYXZoYW41QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.JZqz8HSfYrKV-eLeijZ8ttGMUu2avHEByPZt8t7s0v6RwNlwTBNUnWrTf5Hvj7EBdfjUlcD9Er6-0aOHU4_O9eAi63DNQGQDaQ_yrsqxZ4f9OrHl6DeHrFbC7NfA4aifdgDNf7d7u3FM4sNtLuRbzTWaOime3g97KYLV0P_WhB4L8XUxrkx16uDdAKVakZJiP05Q_ketsYv6dZpcpIDMepEoeORYCIxnnuaNuXt4U1IsDDDL1lmVWc7Ydv5fid8Xvy_A4fv-kUqE0KRkJQo8qt-2NWd5Bjb8_wAl8lQMLpaUaZHj9rfwf0tHpoOuQ5If2-Ql9iTILsV0OYyeav5p3w",
                expirationTime: 1660481936269
            },
            createdAt: "1659889700168",
            lastLoginAt: "1660478336376",
            apiKey: "AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94",
            appName: "[DEFAULT]"
        }
    }
}