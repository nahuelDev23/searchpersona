const {Schema,model } = require("mongoose")

const PersonaSchema = Schema({
    names:{
        type:String,
    },

})

module.exports = model('Personas',PersonaSchema)