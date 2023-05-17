const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8084

app.use(express.static('public'))

app.set('views', path.join(__dirname + '/public/views'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', (req, res) => {
    res.render('disponibilidad',{
        titulo: 'home',
        nombre: 'Santiago'
    })
})

app.listen(puerto, () =>{
    console.log(`escuchando por el puerto ${puerto}`)
})