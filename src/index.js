const express = require('express');
const { config } = require('./server/config')


//con esto requiero la coneccion a la bbdd
require('./database');
//con esto lo que hacemos es almacenar en app lo que nos devulve config donde vamos a configurar
//todo lo relacionado con nuestro servidor , lo hemos hecho asi para poder separar de una manera mas
//ordenada nuesstro codigo;
//RESUMEN ESTE CODIGO SIRVE PARA CONFIGURAR EXPRESS()
const app = config(express());



//este archivo nos sirve para lanzar nuesstro servidor
//como en las configuraciones anteriores hemos indicado en que puerto se encuentra escuchando nuestro
//servidor ya podemos traernos nuestro puerto con app.get('port')
app.listen(app.get('port') , () =>{
    console.log(`Escuchando en el puerto ${app.get('port')}`)
});