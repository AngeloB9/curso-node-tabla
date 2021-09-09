const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b, argv.h, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo.bgMagenta, 'creado'))
  .catch((err) => console.log(err));
