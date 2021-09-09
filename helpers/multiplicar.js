const fs = require('fs');
const colors = require('colors');
//Forma 1: Promesas
// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log('===================');
//     console.log('   Tabla del: ', base);
//     console.log('===================');
//     let salida = '';
//     for (i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     console.log(salida);
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     resolve(`tabla-${base}.txt`);
//   });
// };
//Forma 2 con Async
const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
  try {
    let salida = '';
    let consola = '';
    for (i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    if (listar) {
      console.log('==================='.green);
      console.log('   Tabla del: '.green, colors.cyan(base));
      console.log('==================='.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
