let opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 9
    }
}


const argv = require('yargs').
command('listar', 'Imprime la tabla de multiplicar en consola', opciones)
    .command('crear', 'crea un acrhivo con la tabla de multiplicar', opciones).help().argv;

module.exports = {
    argv
}