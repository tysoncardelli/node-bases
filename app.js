const fs = require('fs'); //require propio de node
//require('express'); //paquetes no nativos de node
//require('./fs') archivos que pertenecen al proyecto 


const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js');
const argv =require('./config/yargs').argv;
const colors = require('colors');
//let base = 7
//let argv2 = process.argv;

//let argv2 = 
//let parametro = argv[2]
//let base= parametro.split('=')[1];

console.log(argv);
let comando = argv._[0];

switch(comando){
    case 'listar':
        console.log('Listar')
        listarTabla(argv.base,argv.limite);
    break;
    case 'crear':
        console.log('crear')
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log(`Archivo creado ${archivo}`)
        )
    break;
}
//console.log(argv2)

