
const express = require('express')
const routerApi = require('./routes')
const app = express();
const port = 3001;

// middleware para que el body sea un json
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Buenas tardes')
});

routerApi(app);

app.listen(port, () =>{
    console.log('Corriendo en el puerto ', port)
})