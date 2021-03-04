const { Router } = require('express');
const router = Router();
//const express = require(express);
//const router = express.Router();

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

//RUTAS PRINCIPALES
router.get('/api/alta/json_user', (req, res) => {
    res.json({"nombre":"ponchito", "edad":"40"});
});

router.get('/api/registros', (req, res) => {
    res.send('Registros de API');
});

router.get('/api/registros/ciudad', (req, res) => {
    res.send('Registros de API -> Ciudad');
});

router.get('/api/registros/nombre', (req, res) => {
    res.send('Registros de API -> Nombre');
});

router.get('/api/registros/sexo', (req, res) => {
    res.send('Registros de API -> Sexo');
});

router.get('/api/registros/edades', (req, res) => {
    res.send('Registros de API -> Edades');
});

router.get('/api/registros/locacion', (req, res) => {
    res.send('Registros de API -> Locación');
});

//RUTAS FILTRADAS
router.get('/api/registros/ciudad/nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad y nombre');
});

router.get('/api/registros/ciudad/sexo', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad y sexo');
});

router.get('/api/registros/ciudad/edades', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad y edades');
});

router.get('/api/registros/ciudad/locacion/nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, locacion y nombre');
});

router.get('/api/registros/ciudad/locacion/edades', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, locacion y edades');
});

router.get('/api/registros/ciudad/sexo/nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, sexo y nombre');
});

router.get('/api/registros/ciudad/sexo/edades', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, sexo y edades');
});

router.get('/api/registros/ciudad/sexo/edades/nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por ciudad, sexo, edades y nombre');
});

router.get('/api/registros/locacion/edades', (req, res) => {
    res.send('Registros de API -> Filtrada por locacion y edades');
});

router.get('/api/registros/locacion/sexo', (req, res) => {
    res.send('Registros de API -> Filtrada por locacion y sexo');
});

router.get('/api/registros/locacion/nombre', (req, res) => {
    res.send('Registros de API -> Filtrada por locacion y edades');
});

//RUTAS TÉCNICAS
router.get('/api/registros/id', (req, res) => {
    res.send('Registros de API -> Elegido por ID');
});

module.exports = router;