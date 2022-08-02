// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // firebase auth api
  signUpApi: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94',
  signInApi: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94',
  

  //firebase setup code
  firebase: {
    projectId: 'angular-13-a52f9',
    appId: '1:928442183745:web:2dc9f5e094fc97fcd296c0',
    databaseURL: 'https://angular-13-a52f9-default-rtdb.firebaseio.com',
    storageBucket: 'angular-13-a52f9.appspot.com',
    apiKey: 'AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94',
    authDomain: 'angular-13-a52f9.firebaseapp.com',
    messagingSenderId: '928442183745',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
