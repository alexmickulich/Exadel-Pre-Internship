/**
 * Created by Lenovo z50-70 on 12.03.2017.
 */
let GLOBAL_DETAILED_ARTICLE_ID;

let articleModel = (function () {
            let GLOBAL_ARTICLES = [{}];
            let GLOBAL_USERNAME;
            let TAGS_BASE = ["Мир", "SpaceX", "Илон Маск", "Спорт", "Экономика", "общество", "врачи", "Минск", "Беларусь", "налог", "тунеядство", "спорт", "БАТЭ", "Футбол"]

            function dbGetArticles(skip, top, filterConfig) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('PUT', '/articles');
                    request.setRequestHeader('content-type', 'application/json');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve(JSON.parse(this.response, (key, value) => {
                                if (key === 'createdAt') return new Date(value);
                                return value;
                            }));
                        }
                    };
                    request.onerror = function () {
                        reject(new Error("Network Error"));
                    };
                    request.send(JSON.stringify({skip, top, filterConfig}));
                });
            }

            function dbGetArticle(id) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('PUT', '/articlesid');
                    request.setRequestHeader('content-type', 'application/json');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve(JSON.parse(this.response, (key, value) => {
                                if (key === 'createdAt') return new Date(value);
                                return value;
                            }));
                        }
                    };
                    request.onerror = function () {
                        reject(new Error("Canget detail article"));
                    };
                    request.send(JSON.stringify({id}));
                });
            }

            function dbAddArticle(article) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', '/articles');
                    request.setRequestHeader('content-type', 'application/json');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve();
                        }
                    };
                    request.onerror = function () {
                        reject(new Error("Article is not valid"));
                    };

                    request.send(JSON.stringify(article));
                });
            }

            function dbDeleteArticle(id) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('DELETE', '/articles/' + id);
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve();
                        }
                    };
                    request.onerror = function () {
                        reject(new Error("Can't delete article"));
                    };
                    request.send();
                });
            }


            function dbEditArticle(article) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('PATCH', '/articles');
                    request.setRequestHeader('content-type', 'application/json');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve();
                        }
                    };
                    request.onerror = function () {
                        reject(new Error("Article is not valid"));
                    };
                    request.send(JSON.stringify(article));
                });
            }


            function dbLogIn(user) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', '/login');
                    request.setRequestHeader('content-type', 'application/json');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve();
                        }
                        else reject();
                    };
                    request.onerror = function () {
                        reject(new Error("User is not valid"));
                    };
                    request.send(JSON.stringify(user));
                });
            }

            function dbLogOut() {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('GET', '/logout');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve();
                        }
                    };

                    request.send();
                });
            }

            function dbGetUsername() {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('GET', '/username');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve(request.responseText);
                        }
                        else reject();
                    };
                    request.onerror = function () {
                        reject(new Error("Article is not valid"));
                    };
                    request.send();
                });
            }


            function getArticles(skip, top, filterConfig) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('GET', '/username');
                    request.onload = function () {
                        if (this.status === 200) {
                            resolve(request.responseText);
                        }
                        else reject();
                    };
                    request.onerror = function () {
                        reject(new Error("Article is not valid"));
                    };
                    request.send();
                });
            }

            /*
            function getArticle(curid) {
                return GLOBAL_ARTICLES.filter(function (currentElement) {
                    return currentElement.id == curid;
                });
            }


             function validateArticle(article) {
             if (typeof(article.title) != "string") return false;
             if (typeof(article.title.length) < 0) return false;
             if (typeof(article.summary) != "string") return false;
             if (typeof(article.summary.length) < 0) return false;
             if (typeof(article.createdAt) != "object") return false;
             if (typeof(article.author) != "string") return false;
             if (article.tags.length < 0) return false;
             return true;
             }



            function addArticle(article) {
                if (validateArticle(article)) {
                    GLOBAL_ARTICLES.push(article);
                    return true;
                } else return false;
            }

            function editArticle(id, article) {
                if (validateArticle(article)) {
                    getArticle(id)[0].title = article.title;
                    getArticle(id)[0].summary = article.summary;
                    getArticle(id)[0].content = article.content;
                    getArticle(id)[0].image = article.image;
                    getArticle(id)[0].tags = article.tags;
                    return true;
                } else return false;
            }

            function removeArticle(id) {
                for (let i = 0; i < GLOBAL_ARTICLES.length; i++) {
                    if (GLOBAL_ARTICLES[i].id === id) {
                        GLOBAL_ARTICLES.splice(i, 1);
                    }
                }
            };


            function addTag(id, tag) {
                let key = 0;
                for (let i = 0; i < TAGS_BASE.length; i++) {
                    if (TAGS_BASE[i] == tag) {
                        key = 1;
                    }
                }
                if (key > 0) {
                    for (let i = 0; i < GLOBAL_ARTICLES.length; i++) {
                        if (GLOBAL_ARTICLES[i].id == id) {
                            GLOBAL_ARTICLES[i].tags.push(teg);
                            return true;
                        }
                    }
                } else return false;
            }

            function removeTag(id, teg) {
                for (let i = 0; i < GLOBAL_ARTICLES.length; i++) {
                    if (GLOBAL_ARTICLES[i].id == id) {
                        for (let j = 0; j < GLOBAL_ARTICLES[i].tags.length; j++) {
                            if (GLOBAL_ARTICLES[i].tags[j] === teg) {
                                delete GLOBAL_ARTICLES[i].tags[j];
                                GLOBAL_ARTICLES[i].tags.length--;
                                return true;
                            }
                        }
                    }
                }
                return false;
            }
            */

            function replaceArticles() {
                return new Promise((resolve) => {
                    articleModel.getArticles().then(
                        response => {
                            GLOBAL_ARTICLES = response;
                            resolve();
                        },
                        error => console.log(error)
                    )
                });
            }

            function replaceUsername() {
                return new Promise((resolve) => {
                    articleModel.dbGetUsername().then(
                        response => {
                            GLOBAL_USERNAME = response;
                            document.querySelector(".nav-hide-menu-user").innerHTML = "Hi, " + GLOBAL_USERNAME + "!";
                            resolve();
                        },
                        error => console.log(error)
                    )
                });
            }


            return {
                GLOBAL_ARTICLES: GLOBAL_ARTICLES,
                GLOBAL_USERNAME: GLOBAL_USERNAME,
                replaceUsername: replaceUsername,
                replaceArticles: replaceArticles,
                getArticles: getArticles,
                dbGetArticle: dbGetArticle,
                /*
                validateArticle: validateArticle,
                addArticle: addArticle,
                editArticle: editArticle,
                removeArticle: removeArticle,
                addTag: addTag,
                removeTag: removeTag,

                */
                dbEditArticle: dbEditArticle,
                dbDeleteArticle: dbDeleteArticle,
                dbAddArticle: dbAddArticle,
                dbGetArticles: dbGetArticles,
                dbLogIn: dbLogIn,
                dbLogOut: dbLogOut,
                dbGetUsername: dbGetUsername

            };
        }

        ()
    )
    ;


let articleRenderer = (function () {
    let ARTICLE_TEMPLATE;
    let ARTICLE_LIST_NODE;
    let DETAILED_ARTICLE_TEMPLATE;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('#news');
    }

    function insertArticlesInDOM(articles) {
        let articlesNodes = renderArticles(articles);
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
        let template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-section').textContent = article.section;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.article-list-item-img').setAttribute("src", article.image);

        let newTags = [];
        for (let i = 0; i < article.tags.length; i++) {
            newTags[i] = "#" + article.tags[i];
        }

        template.content.querySelector('#article-list-item-tags-first').textContent = newTags[0];
        template.content.querySelector('#article-list-item-tags-second').textContent = newTags[1];
        template.content.querySelector('#article-list-item-tags-third').textContent = newTags[2];
        template.content.querySelector('#article-list-item-tags-fourth').textContent = newTags[3];
        template.content.querySelector('#article-list-item-tags-fifth').textContent = newTags[4];

        return template.content.querySelector('.article-list-item').cloneNode(true);
    }


    function formatDate(d) {
        let dayZero = d.getDate();
        let monthZero = d.getMonth() + 1;
        let minZero = d.getMinutes();
        let hourZero = d.getHours();
        if (dayZero < 10) dayZero = '0' + dayZero;
        if (minZero < 10) minZero = '0' + minZero;
        if (hourZero < 10) hourZero = '0' + hourZero;
        if (monthZero < 10) monthZero = '0' + monthZero;

        return dayZero + '.' + monthZero + '.' + d.getFullYear() + " | " +
            hourZero + ':' + minZero;
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
    renderArticles(0, 10);

    articleModel.dbGetUsername().then(
        function () {
            articleModel.replaceUsername().then(
                ready => {
                    signIn();
                }
            );
        }
    );
}

function renderArticles(skip, top, filterConfig) {
    return new Promise(resolve => {
        articleRenderer.removeArticlesFromDom();
        articleModel.dbGetArticles(skip, top, filterConfig).then(response => {
            articleRenderer.insertArticlesInDOM(response);
            resolve();
        })
    });
}

function renderDetailedArticle(object) {
    return new Promise(resolve => {
        document.querySelector(".wrap").style.display = "none";

        GLOBAL_DETAILED_ARTICLE_ID = object.dataset.id;
        articleModel.dbGetArticle(GLOBAL_DETAILED_ARTICLE_ID).then(response => {
            document.querySelector("#news").style.display = "none";
            document.querySelector("#main-article").style.display = "block";
            renderMainArticle(response);
            articleModel.dbGetUsername().then(
                function () {
                    document.querySelector(".detailed-article-list-item-edit-buttons").style.visibility = "visible";
                }, function () {
                    document.querySelector(".detailed-article-list-item-edit-buttons").style.visibility = "hidden";
                }
            );
            document.querySelector(".pagination").style.display = "none";
            resolve();
        })
    });
}


function renderMainArticle(article) {
    console.log(article.tags.length);
    document.querySelector('.detailed-article-list-item').dataset.id = article.id;
    document.querySelector('.detailed-article-list-item-title').textContent = article.title;
    document.querySelector('.detailed-article-list-item-summary').textContent = article.summary;
    document.querySelector('.detailed-article-list-item-author').textContent = article.author;
    document.querySelector('.detailed-article-list-item-date').textContent = formatDate(article.createdAt);
    document.querySelector('.detailed-article-list-item-img').setAttribute("src", article.image);
    document.querySelector('.detailed-article-list-item-content').textContent = article.content;
    document.querySelector('.detailed-article-list-item-section').textContent = article.section;

    let newTags = [];
    for (let i = 0; i < article.tags.length; i++) {
        newTags[i] = "#" + article.tags[i];
    }
    document.querySelector('#detailed-article-list-item-tags-first').textContent = newTags[0];
    document.querySelector('#detailed-article-list-item-tags-second').textContent = newTags[1];
    document.querySelector('#detailed-article-list-item-tags-third').textContent = newTags[2];
    document.querySelector('#detailed-article-list-item-tags-fourth').textContent = newTags[3];
    document.querySelector('#detailed-article-list-item-tags-fifth').textContent = newTags[4];
}

function formatDate(d) {
    if (d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + " | " +
            d.getHours() + ':' + d.getMinutes();
    }
}


function addArticleItem() {
    articleModel.dbGetUsername().then(
        response => {
            articleModel.GLOBAL_USERNAME = response;
            resolve();
        },
        error => console.log(error)
    );


    let article_add = {
        id: new Date().toString() + articleModel.GLOBAL_USERNAME,
        title: document.querySelector("#add-news-form-title").value,
        tags: document.querySelector("#add-news-form-tags").value.split(","),
        summary: document.querySelector("#add-news-form-summary").value,
        content: document.querySelector("#add-news-form-content").value,
        section: document.querySelector("#add-news-form-section").value,
        image: document.querySelector("#add-news-form-image").value,
        createdAt: new Date(),
        author: articleModel.GLOBAL_USERNAME
    };


    articleModel.dbAddArticle(article_add).then(
        ready => {
            startApp();
        },
        error => console.log(error)
    );


    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".pagination").style.display = "block";

    document.querySelector("#add-news-block").style.display = "none";
}


function showAddArticleForm() {
    document.querySelector("#add-news-block").style.display = "block";
    document.querySelector("#news").style.display = "none";
    document.querySelector(".wrap").style.display = "none";
    document.querySelector(".pagination").style.display = "none";
}

function showEditArticleForm(article) {
    articleModel.dbGetArticle(GLOBAL_DETAILED_ARTICLE_ID).then(response => {
        let article = response;
        document.querySelector("#edit-news-form-title").value = article.title;
        document.querySelector("#edit-news-form-summary").value = article.summary;
        document.querySelector("#edit-news-form-content").value = article.content;
        document.querySelector("#edit-news-form-image").value = article.image;
        document.querySelector("#edit-news-form-tags").value = article.tags;
        document.querySelector("#edit-news-form-section").value = article.section;
        document.querySelector("#edit-news-block").style.display = "block";
        document.querySelector("#main-article").style.display = "none";
        document.querySelector(".pagination").style.display = "none";
    });
}


function editArticleItem() {
    let article = {
        id: "9000",
        title: document.querySelector("#edit-news-form-title").value,
        summary: document.querySelector("#edit-news-form-summary").value,
        content: document.querySelector("#edit-news-form-content").value,
        image: document.querySelector("#edit-news-form-image").value,
        section: document.querySelector("#edit-news-form-section").value,
        tags: document.querySelector("#edit-news-form-tags").value.split(",")
    };

    articleModel.dbGetArticle(GLOBAL_DETAILED_ARTICLE_ID).then(response => {
        let articleBeforeChanging = response;
        articleBeforeChanging.title = article.title;
        articleBeforeChanging.summary = article.summary;
        articleBeforeChanging.content = article.content;
        articleBeforeChanging.image = article.image;
        articleBeforeChanging.tags = article.tags;
        articleBeforeChanging.section = article.section;
        articleModel.dbEditArticle(articleBeforeChanging).then(
            ready => {
                startApp();
            },
            error => console.log(error)
        );
        resolve();
    });


    document.querySelector("#edit-news-block").style.display = "none";
    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".pagination").style.display = "block";
}

function deleteArticle() {
    articleModel.dbDeleteArticle(GLOBAL_DETAILED_ARTICLE_ID).then(
        ready => {
            startApp();
        },
        error => console.log(error)
    );

    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".pagination").style.display = "block";
    document.querySelector("#main-article").style.display = "none";
}

let GLOBAL_TOP = 20;
function showMore() {
    let y = window.pageYOffset;
    document.querySelector(".pagination").style.display = "block";
    articleRenderer.init();
    renderArticles(0, GLOBAL_TOP);
    if (articleModel.GLOBAL_ARTICLES.length <= GLOBAL_TOP) {
        document.querySelector(".pagination").style.display = "none";
    }
    GLOBAL_TOP = GLOBAL_TOP + 10;
    scrollTo(0, y);
}


function filterArticle() {

    let dateS = document.querySelector("#filter-form-date-start").value.split(".");
    let dateE = document.querySelector("#filter-form-date-end").value.split(".");

    let filter = {
        author: document.querySelector("#filter-form-author").value,
        dateStart: new Date(dateS[2], dateS[1], dateS[0], 0, 0, 1),
        dateEnd: new Date(dateE[2], dateE[1], dateE[0], 23, 59, 0),
        tags: document.querySelector("#filter-form-tags").value.split(",")
    };
    renderArticles(0,100,filter);
    document.querySelector(".pagination").style.display = "none";
}
