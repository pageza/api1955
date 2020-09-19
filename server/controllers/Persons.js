const mongoose = require('mongoose');

//Pulling the 'Person' model into the file
const Person = mongoose.model('Person')

module.exports = {
    all: (req,res) => {
        Person.find({})
            .then( persons => res.json(persons))
            .catch( err => res.json(err))
    },
    create: (req,res) => {
        const person = new Person()
        person.name = req.params.name;
        person.save()
            .then(res.redirect('/'))
            .catch(err => res.json(err))
    },
    getOne: (req,res) => {
        Person.find({name:req.params.name})
            .then(person => res.json(person))
            .catch(err => res.json(err))
    },
    remove: (req,res) => {
        Person.remove({name:req.params.name})
            .then(res.json('Deleted'))
            .catch(err => res.json(err))
    }
}