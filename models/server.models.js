const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')
// const fileUpload = require('express-fileupload')


class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            persons:'/api/persons',
        }
       
        this.conectarDb()
       
        this.middlewares()
       
        this.routes()
    }

    async conectarDb(){
        await dbConnection()
    }

    middlewares(){
        
        this.app.use( cors() )
        
        this.app.use(express.json())
        
        this.app.use( express.static('public') )
       
        // this.app.use(fileUpload({
        //     useTempFiles:true,
        //     tempFileDir:'/tmp/',
        //     createParentPath:true,
        // }))
    }
    
    routes(){
        this.app.use(this.paths.persons,require('../routes/persons.routes'))
    }

    listen(){
        this.app.listen(this.port)
    }
}

module.exports = Server