/**
 * Created by Lenovo z50-70 on 12.03.2017.
 */
var articleModel = (function () {
    var GLOBAL_ARTICLES = [
        {
            id: '1',
            image: "./img/bate2.jpg",
            title: 'Показал, кто в доме хозяин». БАТЭ стал обладателем Суперкубка страны',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'Ну вот и дождались: сегодня в матче за Суперкубок в Минске сошлись географические соседи из Борисова и Жодино. Прошлогодние чемпион и обладатель Кубка оспорили Суперкубок. И спор этот, ставший официальным открытием футбольного сезона, получился весьма содержательным.',
            createdAt: new Date(2017, 11, 17, 8, 1, 0),
            author: 'Ivanov Ivan'
        },
        {
            id: 2,
            image: "./img/spacex.jpg",
            title: 'SpaceX отправила космический грузовик Dragon к МКС',
            tags: ["Мир", "SpaceX", "Илон Маск"],
            summary: 'Компания SpaceX Илона Маска отправила ракету-носитель Falcon 9 с грузовиком Dragon к МКС. Об этом сообщается в аккаунте компании в Twitter. ',
            createdAt: new Date(2017, 11, 17, 3, 24, 0),
            author: 'Alexander Mikulich'
        },
        {
            id: '3',
            image: "./img/doctor.jpg",
            title: 'Минские врачи начали ходить на вызовы с планшетами',
            tags: ["общество", "врачи", "Минск"],
            summary: 'Врачи в Минске начали ходить на вызовы с 3G-планшетами, позволяющими удаленно работать с электронными амбулаторными картами.',
            createdAt: new Date(2017, 11, 17, 6, 24, 0),
            author: 'Alexander Mikulich'
        },
        {
            id: '4',
            image: "./img/president.jpg",
            title: 'Порошенко назначил посла в Беларусь ',
            tags: ["Порошенко", "Беларусь", "Украина"],
            summary: 'Президент Украины Петр Порошенко назначил Игоря Кизима послом в Беларуси. Раньше Кизим работал замдиректора департамента международной безопасности МИД Украины. О назначении сообщается на сайте украинского президента. ',
            createdAt: new Date(2017, 11, 17, 5, 24, 0),
            author: 'Alexander Mikulich'
        },
        {
            id: '5',
            image: "./img/mail.jpg",
            title: 'Счет пошел на часы. Сегодня последний день уплаты налога на тунеядство ',
            tags: ["Беларусь", "налог", "тунеядство"],
            summary: 'Компания SpaceX Илона Маска отправила ракету-носитель Falcon 9 с грузовиком Dragon к МКС. Об этом сообщается в аккаунте компании в Twitter. ',
            createdAt: new Date(2017, 11, 17, 7, 24, 0),
            author: 'Alexander Mikulich'
        },
        {
            id: '6',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },


        {
            id: '7',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },


        {
            id: '8',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },


        {
            id: '9',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },


        {
            id: '10',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },


        {
            id: '11',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '12',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '13',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '14',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '15',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '16',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '17',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '18',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '19',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        },

        {
            id: '20',
            image: "./img/bate.jpg",
            title: 'Футболист сборной Финляндии прибыл на просмотр в БАТЭ ',
            tags: ["спорт", "БАТЭ", "Футбол"],
            summary: 'В расположение БАТЭ, работающего на втором турецком сборе-2017, прибыл финский нападающий Яссе Туоминен (1995), которому предстоит недельный просмотр, сообщает официальный сайт борисовчан. ',
            createdAt: new Date(2017, 10, 17, 8, 24, 0),
            author: 'Ivanov Ivan'
        }


    ];

    var TAGS_BASE = ["Мир", "SpaceX", "Илон Маск", "Спорт", "Экономика", "общество", "врачи", "Минск", "Беларусь", "налог", "тунеядство", "спорт", "БАТЭ", "Футбол"]
    var AUTOR_BASE =['Alexander Mikulich','Ivanov Ivan'];

    function getArticles(skip, top, filterConfig) {
        var newArticles = [];
        GLOBAL_ARTICLES.forEach(function (item, i, articles) {
            newArticles[i] = item;
        });
        var start = skip || 0;
        var size = top || 10;
        if (filterConfig) {
            if (filterConfig.author) {
                newArticles = newArticles.filter(function (element) {
                    return element.author == filterConfig.author;
                })
            }
            if (filterConfig.dateStart) {
                newArticles = newArticles.filter(function (element) {
                    return element.createdAt.getTime() >= filterConfig.dateStart.getTime();
                })
            }
            if (filterConfig.dateEnd) {
                newArticles = newArticles.filter(function (element) {
                    return element.createdAt.getTime() <= filterConfig.dateEnd.getTime();
                })
            }
            if (filterConfig.tags  && filterConfig.tags.length != 0) {
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
        return GLOBAL_ARTICLES.filter(function (currentElement) {
            return currentElement.id == id;
        });
    }

    function validateArticle(article) {
        if (typeof(article.id) == "string"
            && typeof(article.title) == "string" && article.title.length > 0 && article.title.length < 100
            && typeof(article.summary) == "string" && article.summary.length > 0 && article.summary.length < 200
            && typeof(article.createdAt) == "object"
            && typeof(article.author) == "string"
            && article.tags.length >= 0 ){
            return true;
        } else return false;
    }




    function addArticle(article) {
        if (validateArticle(article)) {
            GLOBAL_ARTICLES.push(article);
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
        GLOBAL_ARTICLES.splice(id-1, 1);
    }



    function addTag(id, teg) {
        var key=0;
        for(var i=0;i<TAGS_BASE.length;i++){
            if(TAGS_BASE[i]==teg){
                key=1;
            }
        }
        if(key>0){
            for (var i = 0; i < GLOBAL_ARTICLES.length; i++) {
                if (GLOBAL_ARTICLES[i].id == id) {
                    GLOBAL_ARTICLES[i].tags.push(teg);
                    return true;
                }
            }
        }else return false;
    }
    function removeTag(id,teg) {
        for(var i = 0; i < GLOBAL_ARTICLES.length; i++){
            if(GLOBAL_ARTICLES[i].id == id){
                for(var j = 0; j < GLOBAL_ARTICLES[i].tags.length; j++){
                    if(GLOBAL_ARTICLES[i].tags[j] === teg){
                        delete GLOBAL_ARTICLES[i].tags[j];
                        GLOBAL_ARTICLES[i].tags.length--;
                        return true;
                    }
                }
            }
        }
        return false;
    }



    return {
        getArticles: getArticles,
        getArticle: getArticle,
        validateArticle:  validateArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addTag: addTag,
        removeTag:removeTag
    };
}())





var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('#news');
    }

    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        ARTICLE_LIST_NODE.innerHTML = '';
    }

    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.article-list-item-img').setAttribute("src", article.image);

        var newTags=[];
        for(var i=0;i<article.tags.length;i++){
            newTags[i]="#"+article.tags[i];
        }

        template.content.querySelector('#article-list-item-tags-first').textContent = newTags[0];
        template.content.querySelector('#article-list-item-tags-second').textContent = newTags[1];
        template.content.querySelector('#article-list-item-tags-third').textContent =  newTags[2];
        template.content.querySelector('#article-list-item-tags-fourth').textContent =  newTags[3];
        template.content.querySelector('#article-list-item-tags-fifth').textContent =  newTags[4];

        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    function formatDate(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + " | " +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());


document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    articleRenderer.init();
    renderArticles();
}

function renderArticles(skip, top) {
    articleRenderer.removeArticlesFromDom();
    var articles = articleModel.getArticles(skip, top);
    articleRenderer.insertArticlesInDOM(articles);
}


/*---------------------------- Логирование основное задание---------------------------------------------*/

console.log(" Новости от 0 до 10: ");
console.log(articleModel.getArticle(0,10));

console.log(" Новости от 0 до 10 по Автору: ");
var filter1 ={
    author: "Alexander Mikulich"
};
console.log(articleModel.getArticles(0,10,filter1));

console.log("Выводим Новости от 0 до 10 по Автору и по дате с 05:24:00 и до 08:24:00");
var filter2 ={
    author: "Alexander Mikulich",
    dateStart: new Date(2017, 11, 17, 5, 24, 0),
    dateEnd: new Date(2017, 11, 17, 8, 24, 0)
};
console.log(articleModel.getArticles(0,10,filter2));



console.log("Удаляем новость с id 5, и выводим все новости, убеждаясь, что число всех новостей уменьшилось на 1");
articleModel.removeArticle(5);
console.log(articleModel.getArticles(0,10,filter2));


console.log("Проверка на валидность: заведомо валидные данные");

//console.log(articleModel.validateArticle(GLOBAL_ARTICLES[0]));
console.log("Проверка на валидность: заведомо не валидные данные(id не string)");
//console.log(articles[1]);
//console.log(validateArticle(articles[1]));


article1 = {
    id: '5',
    title: 'ДОБАВЛЕННАЯ НОВОСТЬ',
    tags: ["спорт", "БАТЭ", "Футбол"],
    summary: 'ДОБАВИЛИ НОВОСТЬ ',
    createdAt: new Date(2017, 11, 17, 8, 24, 0),
    author: 'Ivanov Ivan'
};

articleModel.addArticle(article1);
//console.log(articleModel.GLOBAL_ARTICLES[19])

startApp();

articleEditor = {
    title: 'НОВОСТЬ ПОСЛЕ ИЗМЕНЕНИЯ',
    summary: 'ИЗМЕНИЛИ НОВОСТЬ'
};

console.log(articleModel.getArticle(1));
articleModel.editArticle(1,articleEditor);
console.log(articleModel.getArticle(1));
startApp();
/*-------------------------------Логирование дополнительное задание: работа с Тегами--------------------------------*/

console.log('Добавим тег "SpaceX" к изменённой новости');
articleModel.addTag(1,"SpaceX");

startApp();
console.log(' Новости по тегу "SpaceX": ')
var filter1 ={
    tags: ["SpaceX"]
};
startApp();
console.log(articleModel.getArticles(0,10,filter1));

console.log('Уберём тег "SpaceX" из изменённой новости');
articleModel.removeTag(1,"SpaceX");
console.log(articleModel.getArticle(1));
startApp();