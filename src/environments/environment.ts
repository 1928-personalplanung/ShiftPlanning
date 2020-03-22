// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version   : require ( '../../package.json' ).version,
  api       : {
    station   : 'http://localhost:3000/station/',
    team      : 'http://localhost:3000/team/',
    tagtypes  : 'http://localhost:3000/tagtypes/',
    tag       : 'http://localhost:3000/tag/',
    workmode  : 'http://localhost:3000/workmode/',
    shifttype : 'http://localhost:3000/shifttype/',
    discipline: 'http://localhost:3000/discipline/',
    worker    : 'http://localhost:3000/worker/',
    shift     : 'http://localhost:3000/shift/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
