const fs = require('fs'); 
const colors = require('colors/safe');

listarTabla = async(base, limite) =>{

    console.log('=============Tabla de multiplicar==============='.green)
    for(let i = 1;  i <= limite ; i ++){
        console.log( `${base} * ${ i} = ${base * i} \n`);
    }
}

crearArchivo = async(base, limite = 10) =>{


    let data = '';

    for(let i = 1;  i <= limite ; i ++){
        data += `${base} * ${ i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if(err) throw err;
        console.log(colors.green('The file has been saved!'))
    })

   
    return `tabla-${base}.txt`
}

module.exports = {
    crearArchivo,
    listarTabla
}