var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());


const db = require('./app/config/db.config.js');

const cartoonModel = require('./app/model/charactersmodel.js');

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync with { force: true }');
//   });

require('./app/route/characters.route.js')(app);

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("App Listening at http://%s:%s" , host, port)
})