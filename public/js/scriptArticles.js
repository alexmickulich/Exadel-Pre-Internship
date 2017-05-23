/**
 * Created by Lenovo z50-70 on 12.03.2017.
 */
let GLOBAL_DETAILED_ARTICLE_ID;

let articleModel = (function () {
            let GLOBAL_USERNAME;

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
                console.log(id);
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
                GLOBAL_USERNAME: GLOBAL_USERNAME,
                replaceUsername: replaceUsername,
                getArticles: getArticles,
                dbGetArticle: dbGetArticle,
                validateArticle: validateArticle,
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
    let ARTICLE_CURRENT_COUNT;
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
        template.content.querySelector('.article-list-item').dataset.id = article._id;
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
        ARTICLE_CURRENT_COUNT: ARTICLE_CURRENT_COUNT,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());


document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    articleRenderer.init();
    renderArticles(0, 5);

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
            articleRenderer.ARTICLE_CURRENT_COUNT = response.size;
            if (articleRenderer.ARTICLE_CURRENT_COUNT <= 5) {
                document.querySelector(".pagination").style.display = "none";
            }
            articleRenderer.insertArticlesInDOM(response.articles);
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
    document.querySelector('.detailed-article-list-item').dataset.id = article._id;
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

let GLOBAL_TOP = 10;
let GLOBAL_FILTER;
function showMore() {
    let position = window.pageYOffset;
    document.querySelector(".pagination").style.display = "block";
    articleRenderer.init();
    renderArticles(0, GLOBAL_TOP, GLOBAL_FILTER);
    if (articleRenderer.ARTICLE_CURRENT_COUNT <= GLOBAL_TOP) {
        document.querySelector(".pagination").style.display = "none";
    }
    GLOBAL_TOP = GLOBAL_TOP + 5;
    scrollTo(0, position);
}


function filterArticle() {
    document.querySelector(".pagination").style.display = "block";
    let dateS = document.querySelector("#filter-form-date-start").value.split("-");
    let dateE = document.querySelector("#filter-form-date-end").value.split("-");
    GLOBAL_FILTER = {
        author: document.querySelector("#filter-form-author").value,
        dateStart: new Date(dateS[0], dateS[1] - 1, dateS[2], 0, 0, 1),
        dateEnd: new Date(dateE[0], dateE[1] - 1, dateE[2], 23, 59, 0),
        tags: document.querySelector("#filter-form-tags").value.split(",")
    };
    renderArticles(0, 5, GLOBAL_FILTER);
    console.log(articleRenderer.ARTICLE_CURRENT_COUNT);
    document.querySelector(".wrap").style.display = "none";
}

function bySection(sectionConfig) {
    document.querySelector(".pagination").style.display = "block";
    GLOBAL_FILTER = {
        section: sectionConfig
    };

    renderArticles(0, 5, GLOBAL_FILTER);
    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "none";
    document.querySelector("#main-article").style.display = "none";
    console.log(articleRenderer.ARTICLE_CURRENT_COUNT);
}