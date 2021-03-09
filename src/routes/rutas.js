const { Router } = require('express');
const router = Router();

const juegos = require('./data.json');
console.log(juegos);

//Rutas de práctica
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/json', (req, res) => {
    res.json({"name":"John Doe"})
});

router.get('/home', (req, res) => {
    res.send('Estas en home');
});

router.get('/json2', (req, res) => {
    const data = {
        "name":"John Doe",
        "id": "1234"
    }
    res.json(data);
});

router.get('/json3', (req, res) => {
    res.json(juegos);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    juegos.forEach(juego => {
        if(juego.id == id){
            res.json(juego);
            console.log(juego.title);
        }
    });


    console.log(id);
})

router.post('/json3', (req, res) => {
    const {title, version, genre} = req.body;
    if(title && version && genre) {
        const id = juegos.length +1;
        const nuevoJuego = {...req.body, id};
        juegos.push(nuevoJuego);
        //console.log(nuevoJuego);
        res.status(200).json(juegos);
    }else
    {
        res.status(500).json({error:'no data'});
    }

});

//RUTAS PRINCIPALES
router.get('/api/alta/json_user', (req, res) => {
    res.json({"nombre":"ponchito", "edad":"40"});
});

router.get('/api/registros', (req, res) => {
    res.send('Registros de API');
});

router.get('/api/registros/:ciudad', (req, res) => {
    res.send('Registros de API -> Ciudad');
});

router.get('/api/registros/:nombre', (req, res) => {
    res.send('Registros de API -> Nombre');
});

router.get('/api/registros/:sexo', (req, res) => {
    res.send('Registros de API -> Sexo');
});

router.get('/api/registros/:edades', (req, res) => {
    res.send('Registros de API -> Edades');
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

//RUTAS TÉCNICAS
router.get('/api/registros/:id', (req, res) => {
    //res.send('Registros de API -> Elegido por ID');
    const {id} = req.params;
    juegos.forEach(juego => {
        if(juego.id == id){
            res.json(juego);
            console.log(juego.title);
        }
    });
});

module.exports = router;