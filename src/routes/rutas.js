const { Router } = require('express');
const router = Router();

//const juegos = require('./data.json');
//console.log(juegos);

const personas = require('./data.json');
//console.log(personas);

//Rutas de práctica
router.get('/', (req, res) => {
    res.send('REGISTROS DE PERSONAS COVID 19 - Página principal');
});

//router.get('/json', (req, res) => {
//    res.json({"name":"John Doe"})
//});

router.get('/home', (req, res) => {
    res.send('Estas en home');
});

//router.get('/json2', (req, res) => {
//    const data = {
//        "name":"John Doe",
//        "id": "1234"
//    }
//    res.json(data);
//});

//router.get('/json3', (req, res) => {
//    res.json(juegos);
//});

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

//router.post('/json3', (req, res) => {
//    const {title, version, genre} = req.body;
//    if(title && version && genre) {
//        const id = juegos.length +1;
//        const nuevoJuego = {...req.body, id};
//        juegos.push(nuevoJuego);
//        //console.log(nuevoJuego);
//        res.status(200).json(juegos);
//    }else
//    {
//        res.status(500).json({error:'no data'});
//    }
//
//});

//RUTAS TÉCNICAS
router.get('/api/registros/:id', (req, res) => {
    //res.send('Registros de API -> Elegido por ID');
    const {id} = req.params;
    personas.forEach(persona => {
        if(persona.id == id){
            res.json(persona);
            console.log(persona.title);
        }
    });
});

//RUTAS PRINCIPALES
router.post('/api/alta', (req, res) => {
    const {nombre, sexo, edades, ciudad, locacion} = req.body;
    if(nombre && sexo && edades && ciudad && locacion) {
        const id = personas.length +1;
        const nuevaPersona = {...req.body, id};
        personas.push(nuevaPersona);
        //console.log(nuevaPersona);
        res.status(200).json(personas);
    }else
    {
        res.status(500).json({error:'Introduzca una persona con todos los datos.'});
    }

});

router.get('/api/registros', (req, res) => {
    res.json(personas);
});

router.get('/api/registros/ciudad/:ciudad', (req, res) => {
    const {ciudad} = req.params;
    personas.forEach(persona => {
        if(persona.ciudad == ciudad){
            res.json(persona);
            console.log(persona.title);
        }
    });
});

router.get('/api/registros/nombre/:nombre', (req, res) => {
    const {nombre} = req.params;
    personas.forEach(persona => {
        if(persona.nombre == nombre){
            res.json(persona);
            console.log(persona.title);
        }
    });
});

router.get('/api/registros/sexo/:sexo', (req, res) => {
    const {sexo} = req.params;
    personas.forEach(persona => {
        if(persona.sexo == sexo){
            res.json(persona);
            console.log(persona.sexo);
        }
    });
});

router.get('/api/registros/edades/:edades', (req, res) => {
    const {edades} = req.params;
    let arrpersonas = [''];

    personas.forEach(persona => {
        if(persona.edades == edades){
            res.json(persona);
            console.log(persona.nombre);
        }
    });

    
});

router.get('/api/registros/:locacion', (req, res) => {
    res.send('Registros de API -> Locación');
});

//RUTAS FILTRADAS
router.get('/api/registros/:ciudad/:nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad y nombre');
});

router.get('/api/registros/:ciudad/:sexo', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad y sexo');
});

router.get('/api/registros/:ciudad/:edades', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad y edades');
});

router.get('/api/registros/:ciudad/:locacion/:nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, locacion y nombre');
});

router.get('/api/registros/:ciudad/:locacion/:edades', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, locacion y edades');
});

router.get('/api/registros/:ciudad/:sexo/:nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, sexo y nombre');
});

router.get('/api/registros/:ciudad/:sexo/:edades', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, sexo y edades');
});

router.get('/api/registros/:ciudad/:sexo/:edades/:nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, sexo, edades y nombre');
});

router.get('/api/registros/:locacion/:edades', (req, res) => {
    res.send('Registros de API -> Filtrada por locacion y edades');
});

router.get('/api/registros/:locacion/:sexo', (req, res) => {
    res.send('Registros de API -> Filtrada por locacion y sexo');
});

router.get('/api/registros/:locacion/:nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por locacion y edades');
});




module.exports = router;