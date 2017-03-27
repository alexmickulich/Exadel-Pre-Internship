/**
 * Created by Lenovo z50-70 on 06.03.2017.
 */
var articles = [
    {
        id: '1',
        title: '12345',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: '12345',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: 2,
        title: 'SpaceX отправила космический грузовик Dragon к МКС',
        tags: ["Мир", "SpaceX", "Илон Маск"],
        summary: 'Компания SpaceX Илона Маска отправила ракету-носитель Falcon 9 с грузовиком Dragon к МКС. Об этом сообщается в аккаунте компании в Twitter. ',
        createdAt: new Date(2017, 11, 17, 3, 24, 0),
        author: 'Alexander Mikulich'
    },
    {
        id: '3',
        title: 'Минские врачи начали ходить на вызовы с планшетами',
        tags: ["общество", "врачи", "Минск"],
        summary: 'Врачи в Минске начали ходить на вызовы с 3G-планшетами, позволяющими удаленно работать с электронными амбулаторными картами.',
        createdAt: new Date(2017, 11, 17, 6, 24, 0),
        author: 'Alexander Mikulich'
    },
    {
        id: '4',
        title: 'Порошенко назначил посла в Беларусь ',
        tags: ["Порошенко", "Беларусь", "Украина"],
        summary: 'Президент Украины Петр Порошенко назначил Игоря Кизима послом в Беларуси. Раньше Кизим работал замдиректора департамента международной безопасности МИД Украины. О назначении сообщается на сайте украинского президента. ',
        createdAt: new Date(2017, 11, 17, 5, 24, 0),
        author: 'Alexander Mikulich'
    },
    {
        id: '5',
        title:
            'Счет пошел на часы. Сегодня последний день уплаты налога на тунеядство ',
        tags: ["Беларусь", "налог", "тунеядство"],
        summary: 'Компания SpaceX Илона Маска отправила ракету-носитель Falcon 9 с грузовиком Dragon к МКС. Об этом сообщается в аккаунте компании в Twitter. ',
        createdAt: new Date(2017, 11, 17, 7, 24, 0),
        author: 'Alexander Mikulich'
    },
    {
        id: '6',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },


    {
        id: '7',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },


    {
        id: '8',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },


    {
        id: '9',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },


    {
        id: '10',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },


    {
        id: '11',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '12',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '13',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '14',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '15',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '16',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '17',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '18',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '19',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },

    {
        id: '20',
        title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
    },


];

var tagsBase = ["Мир", "SpaceX", "Илон Маск", "Спорт", "Экономика", "общество", "врачи", "Минск", "Беларусь", "налог", "тунеядство", "спорт", "БАТЭ", "Футбол"]


function getArticles(skip, top, filterConfig){
    var newArticles = [];
    articles.forEach(function(item, i, articles){
        newArticles[i]=item;
    });
    var start = skip || 0;
    var size = top || 10;
    if (filterConfig != undefined) {
        if (filterConfig.author != undefined) {
            newArticles =  newArticles.filter(function (element) {
                return element.author == filterConfig.author;
            })
        }
        if (filterConfig.dateStart != undefined) {
            newArticles = newArticles.filter(function (element) {
                return element.createdAt.getTime() >= filterConfig.dateStart.getTime();
            })
        }
        if (filterConfig.dateEnd != undefined) {
            newArticles = newArticles.filter(function (element) {
                return element.createdAt.getTime() <= filterConfig.dateEnd.getTime();
            })
        }
        if (filterConfig.tags != undefined && filterConfig.tags.length != 0) {
            newArticles = newArticles.filter(function (element) {
                return filterConfig.tags.every(function (tag) {
                    return element.tags.indexOf(tag) >= 0;
                })
            })
        }
    }
    newArticles.sort(function (a, b) {
        return b.createdAt - a.createdAt;
    });
    return newArticles.slice(start, start + size);
}


function getArticle(id) {
    if (articles[id-1] != undefined) {
        return articles[id-1];
    } else return false;
}

function validateArticle(article) {
    if (typeof(article.id) == "string"
        && typeof(article.title) == "string" && article.title.length > 0 && article.title.length < 100
        && typeof(article.summary) == "string" && article.summary.length > 0 && article.summary.length < 200
        && typeof(article.createdAt) == "object"
        && typeof(article.author) == "string"
        && article.tags.length >= 0) {
        return true;
    } else return false;
}
function addArticle(article) {
    if (validateArticle(article)) {
        articles.push(article);
        return true;
    } else return false;
}

function editArticle(id, article) {
    if (validateArticle(getArticle(id))) {
        getArticle(id).title = article.title;
        getArticle(id).summary = article.summary;
        return true;
    } else return false;
}

function removeArticle(id) {
    articles.splice(id-1, 1);
}



function addTag(id, teg) {
    var key=0;
    for(var i=0;i<tagsBase.length;i++){
        if(tagsBase[i]==teg){
            key=1;
        }
    }
    if(key>0){
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                articles[i].tags.push(teg);
                return true;
            }
        }
    }else return false;
}
function removeTag(id,teg) {
    for(var i = 0; i < articles.length; i++){
        if(articles[i].id == id){
            for(var j = 0; j < articles[i].tags.length; j++){
                if(articles[i].tags[j] === teg){
                    delete articles[i].tags[j];
                    articles[i].tags.length--;
                    return true;
                }
            }
        }
    }
    return false;
}





/*---------------------------- Логирование основное задание---------------------------------------------*/

console.log(" Новости от 0 до 10: ")
console.log(getArticles(0,10))

console.log(" Новости от 0 до 10 по Автору: ")
var filter1 ={
    author: "Alexander Mikulich"
};
console.log(getArticles(0,10,filter1));

console.log("Выводим Новости от 0 до 10 по Автору и по дате с 05:24:00 и до 08:24:00");
var filter2 ={
    author: "Alexander Mikulich",
    dateStart: new Date(2017, 11, 17, 5, 24, 0),
    dateEnd: new Date(2017, 11, 17, 8, 24, 0)
};
console.log(getArticles(0,10,filter2));



console.log("Удаляем новость с id 5, и выводим все новости, убеждаясь, что число всех новостей уменьшилось на 1");
removeArticle(5);
console.log(getArticles(0,10,filter2));


console.log("Проверка на валидность: заведомо валидные данные");
console.log(articles[0]);
console.log(validateArticle(articles[0]));
console.log("Проверка на валидность: заведомо не валидные данные(id не string)");
console.log(articles[1]);
console.log(validateArticle(articles[1]));


article1 = {
        id: '5',
            title: 'ДОБАВЛЕННАЯ НОВОСТЬ',
        tags: ["спорт", "БАТЭ", "Футбол"],
        summary: 'ДОБАВИЛИ НОВОСТЬ ',
        createdAt: new Date(2017, 11, 17, 8, 24, 0),
        author: 'Ivanov Ivan'
};

addArticle(article1);
console.log(articles[19])



articleEditor = {
    title: 'НОВОСТЬ ПОСЛЕ ИЗМЕНЕНИЯ',
    summary: 'ИЗМЕНИЛИ НОВОСТЬ'
};

console.log(getArticle(1));
editArticle(1,articleEditor);
console.log(getArticle(1));

/*-------------------------------Логирование дополнительное задание: работа с Тегами--------------------------------*/

console.log('Добавим тег "SpaceX" к изменённой новости');
addTag(1,"SpaceX");


console.log(' Новости по тегу "SpaceX": ')
var filter1 ={
    tags: ["SpaceX"]
};

console.log(getArticles(0,10,filter1));

console.log('Уберём тег "SpaceX" из изменённой новости');
removeTag(1,"SpaceX");
console.log(getArticle(1));