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
    }
    else
    {
        res.status(500).json({error:'Introduzca una persona con todos los datos.'});
    }

});

router.get('/api/registros', (req, res) => {
    res.json(personas);
});

router.get('/api/registros/ciudad/:ciudad', (req, res) => {
    const {ciudad} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase()){
            arrpersonas.push(persona);
            //console.log(persona.title);
        }

    });

    res.json(arrpersonas);
});

router.get('/api/registros/nombre/:nombre', (req, res) => {
    const {nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.nombre.toLowerCase() == nombre.toLowerCase()){
            arrpersonas.push(persona);
            //console.log(persona.title);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/sexo/:sexo', (req, res) => {
    const {sexo} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.sexo.toLowerCase() == sexo.toLowerCase()){
            arrpersonas.push(persona);
            //console.log(persona.sexo);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/edades/:edades', (req, res) => {
    const {edades} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.edades == edades){
            arrpersonas.push(persona);
            //console.log(persona.nombre);
        }
    });

    
});

router.get('/api/registros/:locacion', (req, res) => {
    const {locacion} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.locacion.toLowerCase() == locacion.toLowerCase()){
            arrpersonas.push(persona);
            //console.log(persona.nombre);
        }
    });
});

//RUTAS FILTRADAS
router.get('/api/registros/filtros/cn/:ciudad/:nombre', (req, res) => {
    const {ciudad, nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.nombre.toLowerCase() == nombre.toLowerCase())
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/cs/:ciudad/:sexo', (req, res) => {
    const {ciudad, sexo} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.sexo.toLowerCase() == sexo.toLowerCase())
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/ce/:ciudad/:edades', (req, res) => {
    const {ciudad, edades} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.edades == edades);
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/cln/:ciudad/:locacion/:nombre', (req, res) => {
    const {ciudad, locacion, nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.locacion.toLowerCase() == locacion.toLowerCase() && persona.nombre.toLowerCase() == nombre.toLowerCase());
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/cle/:ciudad/:locacion/:edades', (req, res) => {
    const {ciudad, locacion, nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.locacion.toLowerCase() == locacion.toLowerCase() && persona.nombre.toLowerCase() == nombre.toLowerCase());
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/csn/:ciudad/:sexo/:nombre', (req, res) => {
    const {ciudad, sexo, nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.sexo.toLowerCase() == sexo.toLowerCase() && persona.nombre.toLowerCase() == nombre.toLowerCase());
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/cse/:ciudad/:sexo/:edades', (req, res) => {
    const {ciudad, locacion, nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.edades.toLowerCase() == sexo.toLowerCase() && persona.edades == edades);
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/csen/:ciudad/:sexo/:edades/:nombre', (req, res) => {
    const {ciudad, locacion, nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.ciudad.toLowerCase() == ciudad.toLowerCase() && persona.locacion.toLowerCase() == locacion.toLowerCase() && persona.nombre.toLowerCase() == nombre.toLowerCase());
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/le/:locacion/:edades', (req, res) => {
    const {locacion, edades} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.locacion.toLowerCase() == locacion.toLowerCase() && persona.edades == edades);
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/ls/:locacion/:sexo', (req, res) => {
    const {locacion, sexo} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.locacion.toLowerCase() == locacion.toLowerCase() && persona.sexo.toLowerCase() == sexo.toLowerCase());
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});

router.get('/api/registros/filtros/ln/:locacion/:nombre', (req, res) => {
    const {locacion, nombre} = req.params;
    let arrpersonas = [];

    personas.forEach(persona => {
        if(persona.locacion.toLowerCase() == locacion.toLowerCase() && persona.nombre.toLowerCase() == nombre.toLowerCase());
        {
            arrpersonas.push(persona);
        }
    });

    res.json(arrpersonas);
});




module.exports = router;