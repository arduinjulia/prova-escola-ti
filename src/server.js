const express = require('express')
const app = express()

app.get('/healthz', (req, res) => {
    res.status(200).json({
        status: 'ok'
    })
})

app.listen(8080, () => {
  console.log(`App rodando em http://localhost:8080`)
})


