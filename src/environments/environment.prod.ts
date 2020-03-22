export const environment = {
  production: true,
  version   : require ( '../../package.json' ).version,
  api       : {
    station   : '/api/station/',
    team      : '/api/team/',
    tagtypes  : '/api/tagtypes/',
    tag       : '/api/tag/',
    workmode  : '/api/workmode/',
    shifttype : '/api/shifttype/',
    discipline: '/api/discipline/',
    worker    : '/api/workers/',
    shift     : '/api/shift/'
  }
};
