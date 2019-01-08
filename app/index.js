// const Sequelize = require('sequelize')

// const database = new Sequelize('seq-demo', 'chizaalba', '', {
//     dialect: 'postgres'
// })

const models = require('../models')

models.user.findAll()
    .then((results) => {
        console.log(results)
    })

models.user.create({firstName:'Eric', lastName: 'Fisher', email: 'me@me.com'})
    .then(function(user){
        console.log(user);
    });