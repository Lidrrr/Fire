const mongoose = require('mongoose')
const Upload = require('./upload')
const mongodb = 'mongodb+srv://liderrrrrr0310:liderrrrrr0310@bone.oimsjib.mongodb.net/'
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection


db.on('open', ()=>{
    console.log('successful')
})

db.on('error', ()=>{
    console.log('error')
})

module.exports = db