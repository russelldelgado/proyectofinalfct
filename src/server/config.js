


const config = ( app ) =>{

    //indicamos en que puerto se encuentra escuchando nuestro servidor
    //Le decimos que busque un puerto que tenemos configurado en nuestro servidor , si no lo encuentra
    //que use el puerto 3000.
    app.set('port' , process.env.PORT || 3000 )

    return app;
}


module.exports = {
    config,
}