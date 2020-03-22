const FtpDeploy = require('ftp-deploy');

function zz(val) {
    if (val < 10) {
        return '0' + val;
    }
    return val;
}

const config = {
    host        : process.argv[3],
    port        : 21,
    localRoot   : __dirname + '/../' + process.argv[2],
    remoteRoot  : '/',
    include     : [
        '*',
        '.htaccess',
        '**/**'
    ],
    deleteRemote: true,
    forcePasv   : true,
    user        : process.argv[4],
    password    : process.argv[5]
};

// use with promises
new FtpDeploy().deploy(config)
               .then(console.log)
               .catch(console.error);
