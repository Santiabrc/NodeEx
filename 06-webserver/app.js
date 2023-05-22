const express = require('express');
const app = express();

app.use(express.static('public'))


app.get('/hola-mundo', (req, res)=> {
    res.send('Hello on hello-world route')
  })
app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(8080)