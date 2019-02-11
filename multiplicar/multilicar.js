const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(' no es un numero');
            return;
        }

        for (let index = 1; index <= 10; index++) {
            data += `${index} * ${base} = ${index*base} 
            \r\n`;
        }

        fs.writeFile('tablas/tabladel' + base + '.txt', data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('Archivo creado tabla del ' + base + ' se creo');
            }

        });
    });
}

let tablamultiplicar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('La base o el limite no son numeros');
            return;
        } else {
            console.log('=============='.green);
            console.log(colors.blue('Tabla de multiplicar del ') + colors.red(base));
            console.log('=============='.green);
            for (let index = 1; index <= limite; index++) {
                console.log(colors.yellow(index + ' * '.magenta + base + ' = '.blue +
                    index * base));
            }
        }
    });
}




module.exports = { crearArchivo, tablamultiplicar }