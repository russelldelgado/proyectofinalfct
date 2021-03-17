
const path = require('path'); // este me permite unir directorios
const expbs = require('express-handlebars'); //motor de vista para porder visualizar documentos html
const morgan = require('morgan'); //ver peticiones a las rutas y ver respuestas por consola
const multer = require('multer'); //guardar imagenes
const express = require('express'); //lo usamos para configurar json y urlencoder para poder subir imagenes de un formulario
const { routes } = require('../routes/index');
const errorHandler = require('errorhandler');


const config = ( app ) =>{
    //para evitar que las personas sepan las cabeceras de mi servidor ponemos esta linea de codigo  
    app.disable('x-power-by')

    //indicamos en que puerto se encuentra escuchando nuestro servidor
    //Le decimos que busque un puerto que tenemos configurado en nuestro servidor , si no lo encuentra
    //que use el puerto 3000.
    //setting
    app.set('port' , process.env.PORT || 3000 )
    //como hemos cambiado la estructura de nuestro ficheros añadiendo todo dentro de la carpeta src
    //ahora tenemos que indicar donde tenemos nuestra carpeta views
    //para hacer esto requirimmos el modulo path y lo importamos
    app.set('views' , path.join(__dirname ,'../views'));
    //una vez espress sabe donde esta mi fichero con las vistas ya puedo comenzar a configurar mi motor de plantillas
    //hay varios motores de plantillas que podriamos usar , nosotros usaremos .hbs de hundlebars
    //para esto tenemos que importar el express handlebars
    app.engine('.hbs', expbs({
        defaultLayout : 'main', // como se llama el fichero que se va a arrancar
        partialsDir: path.join(app.get('views'),'partials'), // con esto le digo donde estaran las partes de mi codigo reutilizable
        layoutsDir:path.join(app.get('views') , 'layouts'),//este igual que el de arriba
        extname: '.hbs', // como llamaremos a nuestros archivos 
        helpers: require('./helpers')//son funciones que utilizaremos en hbs , no confundir con nuestra carpeta helpers
    }))
    //hemos configurado nuestro motor de plantillas ahora toca indicarlo que vamos a utilizarlo
    app.set('view engine' , '.hbs')
   
   
    //middelwares

    app.use(morgan('dev')); //esto es para ver las peticiones
    app.use(multer(
        {dest : path.join(__dirname ,'../public/upload/temp')}
        ).single('image')) 
        //sinble me sirve para indicar que solo puede subir una imagen en la ruta especificada anteriormente
        //y con la variable image puede acceder a los datos de la imagen , peso , nombre , terminacion (png , jpg etc) .. renombrarla
    
    //con esto podemos recibir los datos que vienen desde formularios desde las plantillas html
    app.use(express.urlencoded({extended:false}))
    //para las peticiones ayax y que no haya que estar recargando el navegador cada dos por tres lo que hacemos es 
    //utilizar objetos en json ,ejemplo seria manejar los likes de mi app
    app.use(express.json())

    //rutas
    //indicamos las rutas en este fichero
    routes(app);

    //static files 
    //estos son ficheros y rutas estaticas que no cambian
    app.use('/public',express.static(path.join(__dirname, '../public')))

    //error handler
    //esto solo lo lanzaremos  cuando estemos en desarrollo , para ello importamos error handlebers
    //y hacemos una comprobacion que estemos en desarollo
    if('development' == app.get('env')){
        app.use(errorHandler)
    }
    return app;
}


module.exports = {
    config,
}