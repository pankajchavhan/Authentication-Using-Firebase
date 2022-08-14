# Angulardemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0-rc.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## CLI CMD 
1. Lazy loading module - ng generate module [name] --route [name] --module app.module
2. Enums - ng generate enum [name]
3. component - ng g c [name]
4. module- ng g m [name]
5. interface- ng g i [name]
5. interceptor- ng generate interceptor [name]

## Firebase
ng add @angular/fire 
1. Install ng deploy -- hosting, Authentication, Firestoreng 
2. video link for firebase connection with Angular- https://www.youtube.com/watch?v=O0uVYhRE850
3. video link for how to configure firebase auth api url- https://www.youtube.com/watch?v=NW1nixqRPS0&list=PLLhsXdvz0qjJHtgs1b7nyue6GDcSXfJNA&index=6

## GIT CMD
1. Create new branch - "git checkout -b [name] "
2. Switch from one branch to another - " git checkout [name] "
3. pull from master- "git pull upstream master"
4. push your changes- "git push origin [name] " (here name is the name of branch which you want to push)
4. "git stash"
5. "git stash pop"
6. "git add ."
7. "git commit -m "message"

# CONFLICTS OPTIONS
1. Accept current changes- 
2. Accept Incomming changes-
3. Accept both changes-
4. compare changes- 

# INATALLED PACKAGES
1.Social login button - npm i @angular-cool/social-login-buttons
2. pre-commit checks: npx husky-init && npm install


# NOTES
1. Spinner- https://zoaibkhan.com/blog/how-to-add-loading-spinner-in-angular-with-rxjs/
2. made main branch as default...so from now use main branch instead master to take latest pull. now master branch is useless..our PR will also merged in main branch only. 