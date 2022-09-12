const SignUpErrorConstants = {
  EMAIL_EXISTS: 'The email address is already in use by another account.',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'We have blocked all requests from this device due to unusual activity. Try again later.',
  OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
  INVALID_EMAIL: 'The email address is not valid please enter valid email i.e P****J@gmail.com '
};

export { SignUpErrorConstants };

const SignUpSuccessConstant = {
  REGISTRATION_SUCCESS: 'Congratulations, your account has been successfully created.'
}

export {SignUpSuccessConstant};
