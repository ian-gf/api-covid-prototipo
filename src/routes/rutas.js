const { Router } = require('express');
const router = Router();

const personas = require('./data.json');

//Rutas de práctica
router.get('/', (req, res) => {
    res.send('REGISTROS DE PERSONAS COVID 19 - Página principal');
});

router.get('/home', (req, res) => {
    res.send('Estas en home');
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    personas.forEach(persona => {
        if(persona.id == id){
            res.json(persona);
            console.log(persona.title);
        }
    });


    console.log(id);
})

//RUTAS PRINCIPALES
router.post('/api/alta', (req, res) => {
    const {nombre, sexo, edades, ciudad, locacion} = req.body;
    if(nombre && sexo && edades && ciudad && locacion) {
        const id = personas.length +1;
        const nuevaPersona = {...req.body, id};
        personas.push(nuevaPersona);
        //console.log(nuevaPersona);
        res.status(200).json(personas);
    }
    else
    {
        res.status(500).json({error:'Introduzca una persona con todos los datos.'});
    }

});

router.get('/api/productos', (req, res) => {
    res.json(personas);
});

module.exports = router;