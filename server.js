var app = require('./server-config.js');
//fresh new comment

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Server now listening on port ' + port);
