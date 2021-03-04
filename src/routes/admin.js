const { Router } = require('express');
const adminRouter = Router();

adminRouter.get('/', (req, res) => {
    res.send('Soy el panel de administración!');
});

adminRouter.get('/users', (req, res) => {
    res.send('Muestro todos los usuarios!');
});

adminRouter.get('/posts', (req, res) => {
    res.send('Muestro todos los posts!');
});

module.exports = adminRouter;
