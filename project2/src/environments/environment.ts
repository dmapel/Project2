// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  context: `http://localhost:4200/swagger-ui.html`,
  apiUrl : 'http://ec2-18-188-229-73.us-east-2.compute.amazonaws.com:8080',
  apiUrlLogin: 'http://ec2-18-188-229-73.us-east-2.compute.amazonaws.com:8080/login/user',
  apiUrlUpdate: 'http://ec2-18-188-229-73.us-east-2.compute.amazonaws.com:8080/update/user'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
