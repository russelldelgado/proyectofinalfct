//un controlador es un objeto que tiene funciones

const homeControllers = {

    index : async( req ,res) =>{
        res.send('PAGINA DE INICIO EN CONTROLADORES')
    }

}

module.exports = homeControllers;
