const mongoose = require('mongoose');

// Create the Schema 
const PersonSchema = new mongoose.Schema({
    name: String
}, {timestamps:{createdAt:'createdAt',updatedAt:'updateAt'}})

//Registering the schema as a model
mongoose.model('Person', PersonSchema)