var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let db=require('diskdb');
db.connect('./db',['articles']);
var GLOBAL_ARTICLES = [
                {
                    id: "1",
                    image: "./img/bate2.jpg",
                    title: 'Показал, кто в доме хозяин». БАТЭ стал обладателем Суперкубка страны',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'Ну вот и дождались: сегодня в матче за Суперкубок в Минске сошлись географические соседи из Борисова и Жодино. Прошлогодние чемпион и обладатель Кубка оспорили Суперкубок. И спор этот, ставший официальным открытием футбольного сезона, получился весьма содержательным.',
                    createdAt: new Date(2015, 11, 17, 8, 1, 0),
                    author: 'Ivanov Ivan'
                },
                {
                    id: "2",
                    image: "./img/spacex.jpg",
                    title: 'SpaceX отправила космический грузовик Dragon к МКС',
                    tags: ["Мир", "SpaceX", "Илон Маск"],
                    summary: 'Компания SpaceX Илона Маска отправила ракету-носитель Falcon 9 с грузовиком Dragon к МКС. Об этом сообщается в аккаунте компании в Twitter. ',
                    createdAt: new Date(2015, 11, 17, 3, 24, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: "3",
                    image: "./img/doctor.jpg",
                    title: 'Минские врачи начали ходить на вызовы с планшетами',
                    tags: ["общество", "врачи", "Минск"],
                    summary: 'Врачи в Минске начали ходить на вызовы с 3G-планшетами, позволяющими удаленно работать с электронными амбулаторными картами.',
                    createdAt: new Date(2015, 11, 17, 6, 24, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: '4',
                    image: "./img/president.jpg",
                    title: 'Порошенко назначил посла в Беларусь ',
                    tags: ["Порошенко", "Беларусь", "Украина"],
                    summary: 'Президент Украины Петр Порошенко назначил Игоря Кизима послом в Беларуси. Раньше Кизим работал замдиректора департамента международной безопасности МИД Украины. О назначении сообщается на сайте украинского президента. ',
                    createdAt: new Date(2015, 11, 17, 5, 24, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: '5',
                    image: "./img/mail.jpg",
                    title: 'Счет пошел на часы. Сегодня последний день уплаты налога на тунеядство ',
                    tags: ["Беларусь", "налог", "тунеядство"],
                    summary: 'Компания SpaceX Илона Маска отправила ракету-носитель Falcon 9 с грузовиком Dragon к МКС. Об этом сообщается в аккаунте компании в Twitter. ',
                    createdAt: new Date(2015, 11, 17, 7, 24, 0),
                    author: 'Alexander Mikulich'
                },
                {
                    id: '6',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },


                {
                    id: '7',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },


                {
                    id: '8',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },


                {
                    id: '9',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },


                {
                    id: '10',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },


                {
                    id: '11',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '12',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '13',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '14',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '15',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '16',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '17',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '18',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '19',
                    image: "./img/bate.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                },

                {
                    id: '20',
                    image: "./img/spacex.jpg",
                    title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
                    tags: ["спорт", "БАТЭ", "Футбол"],
                    summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
                    createdAt: new Date(2015, 10, 17, 8, 24, 0),
                    author: 'Ivanov Ivan'
                }
            ];

            db.articles.save(GLOBAL_ARTICLES);
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// we need it to parse content-type application/json
app.use(bodyParser.json());

// we need it to parse content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function(){
  console.log("fhdjhj", app.get('port'));
})

app.get('/articles', function(request,response){
  response.json(db.articles.find());
})

app.get('/articles/:id',function(request,response){
  response.json(db.articles.findOne(
    {id: request.params.id}
  ));
})

app.post('/articles', function (request, response) {
  response.json(db.articles.save(request.body));
});

app.put('/articles', function (request, response) {
  response.json(db.articles.findOne({ id: request.body.id }));
});

app.put('/articles:id', function (request, response) {
  response.json(db.articles.findOne({ id: request.params.id }));
});

app.delete('/articles', function (request, response) {
  response.json(db.articles.remove({ id: request.body.id }));
});

app.delete('/articles:id', function (request, response) {
  response.json(db.articles.remove({ id: request.params.id }));
});

app.patch('/articles', function (req, res) {
  let options = {
    multi: false,
    upsert: false
  };
  let query = db.articles.findOne({ id: request.body.id });
  response.json(db.articles.update(query, request.body, options));
});

app.patch('/articles:id', function (request, response) {
  let options = {
    multi: false,
    upsert: false
  };
  let query = db.articles.findOne({ id: request.params.id });
  response.json(db.articles.update(query, request.body, options));
});

