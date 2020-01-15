import path from 'path'
import express from 'express'

var app = express();
const DIST_DIR =  __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('*', function(request, response){
    response.sendFile(HTML_FILE);
});

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Opened http://%s:%s', host, port);
})