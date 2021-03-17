//un controlador es un objeto que tiene funciones

const homeControllers = {

    index : async( req ,res) =>{
        res.render('index')
    }

}

module.exports = homeControllers;
