//requireds
const argv = require('./config/yargs').argv;
var colors = require('colors');

//este console es para ver como actua la funcion de yargs
//console.log(argv.limite);

//const fs = require('fs');

const { crearArchivo } = require('./multiplicar/multilicar.js');
const { tablamultiplicar } = require('./multiplicar/multilicar.js');
//let base = '9';

//let argv2 = process.argv; //asi recibimos desde la terminal parametros

let comando = argv._[0];

switch (comando) {
    case 'listar':
        tablamultiplicar(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log('error ' + base + err);
        });
        break;
    case 'crear':

        crearArchivo(argv.base).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log('error ' + base + err);
        });

        break;
    default:
        console.log('comando no reconocido');
        break;
}


//let parametro = argv[2];
//let base = parametro.split('=')[1];





// crearArchivo(base).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log('error ' + base + err);
// });