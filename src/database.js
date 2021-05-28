const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/backmusic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(db => console.log('MongoDB - Running'))
.catch((err) => console.error(err));