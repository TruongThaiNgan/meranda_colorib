import path from 'path'
import express from 'express'

var app = express();
const DIST_DIR =  __dirname
const INDEX_FILE = path.join(DIST_DIR, 'index.html');
const BLOG_FILE = path.join(DIST_DIR, 'blog-single.html');
const CONTACT_FILE = path.join(DIST_DIR, 'contact.html');
const CATEGORIES_FILE = path.join(DIST_DIR, 'categories.html');
const router = express.Router();

app.use(express.static(DIST_DIR))

app.get('/index', function(request, response){
    response.sendFile(INDEX_FILE);
});
app.get('/blog-single', function(request, response){
    response.sendFile(BLOG_FILE);
});

app.use(express.static(__dirname+'/blog-single'))
app.get('/contact', function(request, response){
    response.sendFile(CONTACT_FILE);
});

app.get('/categories', function(request, response){
    response.sendFile(CATEGORIES_FILE);
});

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Opened http://%s:%s', host, port);
})