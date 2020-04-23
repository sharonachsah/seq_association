module.exports = function(app) {
    const characters = require('../controller/characters.controller.js');

    app.post('/insert', characters.insert);

    app.get('/get', characters.findAll);

    app.get('/getbyid/:id', characters.findByPk);

    app.put('/update/:id', characters.update);

    app.delete('/delete/:id', characters.delete);
}