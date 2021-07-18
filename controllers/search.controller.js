const  Personas  = require("../models/personas.model")

const search = async (req,res) => {
    const { id } = req.params
   
    try {
       
        const results = await Personas.findById(id)
        res.json({results})
    } catch (error) {
        return res.status(400).json({
            error,
            type:"no"
        })
    }
}

const add = async (req,res) => {
    const { names} = req.body
    const personas = await new Personas({names})

    try {
        await personas.save()
        res.json(personas)
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
} 

module.exports = { 
    search,
    add
}