var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();

app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.logger('dev')); // выводим все запросы со статусами в консоль

app.use(app.router); // модуль для простого задания обработчиков путей



app.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});