const  mongoose  = require("mongoose")
const {database} = require('./keys')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

mongoose.connect(database.URI , options)
                            .then(db => console.log(`Conectado correctamente a la BBDD DE MONGO`))
                            .catch(err => console.error(err))
