// Requiring mongoose for funcationality
const mongoose = require('mongoose');
const Persons = require('../controllers/Persons');

// require the the controllers from "../controller/<file names>"

// Create instance of the Model

module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    app.get('/', (req, res) => {
        Persons.all(req,res)
    });

    app.get('/new/:name', (req, res) => {
        Persons.create(req,res)
    });

    app.get('/:name', (req, res) => {
        Persons.getOne(req,res)
    });

    app.get('/remove/:name', (req, res) => {
        Persons.remove(req,res)
    });
}