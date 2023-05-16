require('dotenv').config()

const express = require('express')

const app = express()

app.listen(process.env.SERVER_PORT, () =>{
    console.log(`Servidor hospedado em: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)
})