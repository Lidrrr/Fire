const express = require('express')
const web = express()
const cors = require('cors')
const bodyParser = require('body-parser')


web.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}))
web.use(express.urlencoded({extended: false}))
web.use(bodyParser.json())


// running server
web.listen(3300, ()=>{
    console.log('server running')
})