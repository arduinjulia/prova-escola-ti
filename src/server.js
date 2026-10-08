const express = require('express')
const app = express()
const mongoose = require('mongoose')

const URI = 'mongodb+srv://juliaarduin1502_db_user:xZEq3wMYgKRzmecm@cluster0.jrntp6o.mongodb.net/?appName=Cluster0'

const databaseConnection = () => {
    global.mongoose = mongoose.connect(URI)
}

export default databaseConnection

app.get('/healthz', (req, res) => {
    res.status(200).json({
        status: 'ok'
    })
})

app.post('/senhas', (req, res) => {

})


app.listen(8080, () => {
  console.log(`App rodando em http://localhost:8080`)
})


