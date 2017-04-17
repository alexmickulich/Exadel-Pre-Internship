/**
 * Created by Lenovo z50-70 on 12.03.2017.
 */
let GLOBAL_DETAILED_ARTICLE_ID;

let articleModel = (function () {
            let GLOBAL_ARTICLES = [{}];

            let TAGS_BASE = ["Мир", "SpaceX", "Илон Маск", "Спорт", "Экономика", "общество", "врачи", "Минск", "Беларусь", "налог", "тунеядство", "спорт", "БАТЭ", "Футбол"]


            function getArticles(skip, top, filterConfig) {
                skip = skip || 0;
                top = top || 10;

                let newArticles = [];
                GLOBAL_ARTICLES.forEach(function (item, i, GLOBAL_ARTICLES) {
                    newArticles[i] = item;
                });

                newArticles.sort(function (a, b) {
                    return b.createdAt - a.createdAt;
                });

                if (filterConfig) {
                    return newArticles.filter(function (element) {
                        if (filterConfig.author) {
                            if (element.author !== filterConfig.author) {
                                return false;
                            }
                        }

                        if (filterConfig.section) {
                            if (element.section !== filterConfig.section) {
                                return false;
                            }
                        }

                        if (filterConfig.dateStart) {
                            if (element.createdAt.getTime() <= filterConfig.dateStart.getTime()) {
                                return false;
                            }
                        }

                        if (filterConfig.dateEnd) {
                            if (element.createdAt.getTime() >= filterConfig.dateEnd.getTime()) {
                                return false;
                            }
                        }


                        if (filterConfig.tags && filterConfig.tags != "") {
                            let flag = false;
                            for (let i = 0; i < filterConfig.tags.length; i++) {
                                for (let j = 0; j < element.tags.length; j++) {
                                    if (element.tags[j] === filterConfig.tags[i]) {
                                        flag = true;
                                    }
                                }
                            }
                            if (flag === false)
                                return false;
                        }

                        return true;
                    }).slice(skip, skip + top);
                }
                else {
                    return newArticles.slice(skip, skip + top);
                }
            }


            function getArticle(curid) {
                return GLOBAL_ARTICLES.filter(function (currentElement) {
                    return currentElement.id == curid;
                });
            }


            function validateArticle(article) {
                if (typeof(article.id) != "string") return false;
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

            function replaceArticles() {
                return new Promise((resolve) => {
                    dbRequestModel.getArticles().then(
                        response => {
                            GLOBAL_ARTICLES = response;
                            resolve();
                        },
                        error => console.log(error)
                    )
                });
            }


            return {
                GLOBAL_ARTICLES: GLOBAL_ARTICLES,
                replaceArticles: replaceArticles,
                getArticles: getArticles,
                getArticle: getArticle,
                validateArticle: validateArticle,
                addArticle: addArticle,
                editArticle: editArticle,
                removeArticle: removeArticle,
                addTag: addTag,
                removeTag: removeTag
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
    articleModel.replaceArticles().then(
        ready => {
            articleRenderer.init();
            renderArticles(0, 10);
        }
    );
}

function renderArticles(skip, top) {
    articleRenderer.removeArticlesFromDom();
    let articles = articleModel.getArticles(skip, top);
    articleRenderer.insertArticlesInDOM(articles);
}

function renderDetailedArticle(object) {
    document.querySelector(".wrap").style.display = "none";
    articleRenderer.removeArticlesFromDom();
    GLOBAL_DETAILED_ARTICLE_ID = object.dataset.id;
    let detailedArticle = articleModel.getArticle(GLOBAL_DETAILED_ARTICLE_ID);

    insertDetailedArticlesInDOM(detailedArticle);
    document.querySelector("#news").style.display = "none";
    document.querySelector("#main-article").style.display = "block";
    if (username) document.querySelector(".detailed-article-list-item-edit-buttons").style.visibility = "visible";
    else document.querySelector(".detailed-article-list-item-edit-buttons").style.visibility = "hidden";
    document.querySelector(".pagination").style.display = "none";
}

function insertDetailedArticlesInDOM(articles) {
    DETAILED_ARTICLE_LIST_NODE = document.querySelector("#main-article");
    DETAILED_ARTICLE_LIST_NODE.innerHTML = '';
    let articlesNodes = renderDetailedMapArticle(articles);
    articlesNodes.forEach(function (node) {
        DETAILED_ARTICLE_LIST_NODE.appendChild(node);
    });
}


function renderDetailedMapArticle(articles) {
    return articles.map(function (article) {
        return renderMainArticle(article);
    });
}
function renderMainArticle(article) {
    DETAILED_ARTICLE_TEMPLATE = document.querySelector('#template-detaild-article-list-item');
    let template = DETAILED_ARTICLE_TEMPLATE;
    template.content.querySelector('.detailed-article-list-item').dataset.id = article.id;
    template.content.querySelector('.detailed-article-list-item-title').textContent = article.title;
    template.content.querySelector('.detailed-article-list-item-summary').textContent = article.summary;
    template.content.querySelector('.detailed-article-list-item-author').textContent = article.author;
    template.content.querySelector('.detailed-article-list-item-date').textContent = formatDate(article.createdAt);
    template.content.querySelector('.detailed-article-list-item-img').setAttribute("src", article.image);
    template.content.querySelector('.detailed-article-list-item-content').textContent = article.content;
    template.content.querySelector('.detailed-article-list-item-section').textContent = article.section;

    let newTags = [];
    for (let i = 0; i < article.tags.length; i++) {
        newTags[i] = "#" + article.tags[i];
    }

    template.content.querySelector('#detailed-article-list-item-tags-first').textContent = newTags[0];
    template.content.querySelector('#detailed-article-list-item-tags-second').textContent = newTags[1];
    template.content.querySelector('#detailed-article-list-item-tags-third').textContent = newTags[2];
    template.content.querySelector('#detailed-article-list-item-tags-fourth').textContent = newTags[3];
    template.content.querySelector('#detailed-article-list-item-tags-fifth').textContent = newTags[4];


    return template.content.querySelector('.detailed-article-list-item').cloneNode(true);
}

function formatDate(d) {
    return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + " | " +
        d.getHours() + ':' + d.getMinutes();
}


function addArticleItem() {
    let article_add = {
        id: new Date().toString() + username,
        title: document.querySelector("#add-news-form-title").value,
        tags: document.querySelector("#add-news-form-tags").value.split(","),
        summary: document.querySelector("#add-news-form-summary").value,
        content: document.querySelector("#add-news-form-content").value,
        section: document.querySelector("#add-news-form-section").value,
        image: document.querySelector("#add-news-form-image").value,
        createdAt: new Date(),
        author: username
    };


    dbRequestModel.addArticle(article_add).then(
        response => {
            resolve();
        },
        error => console.log(error)
    );

    startApp();
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

function showEditArticleForm() {
    let article = articleModel.getArticle(GLOBAL_DETAILED_ARTICLE_ID)[0];
    document.querySelector("#edit-news-form-title").value = article.title;
    document.querySelector("#edit-news-form-summary").value = article.summary;
    document.querySelector("#edit-news-form-content").value = article.content;
    document.querySelector("#edit-news-form-image").value = article.image;
    document.querySelector("#edit-news-form-tags").value = article.tags;
    document.querySelector("#edit-news-form-section").value = article.section;
    document.querySelector("#edit-news-block").style.display = "block";
    document.querySelector("#main-article").style.display = "none";
    document.querySelector(".pagination").style.display = "none";
}


function editArticleItem() {
    let article = {
        id: "9000",
        title: document.querySelector("#edit-news-form-title").value,
        summary: document.querySelector("#edit-news-form-summary").value,
        content: document.querySelector("#edit-news-form-content").value,
        author: username,
        image: document.querySelector("#edit-news-form-image").value,
        tags: document.querySelector("#edit-news-form-tags").value.split(",")
    };

    let articleBeforeChanging = articleModel.getArticle(GLOBAL_DETAILED_ARTICLE_ID)[0];
    articleBeforeChanging.title = article.title;
    articleBeforeChanging.summary = article.summary;
    articleBeforeChanging.content = article.content;
    dbRequestModel.editArticle(articleBeforeChanging).then(
        response => {
            resolve();
        },
        error => console.log(error)
    );
    startApp();

    document.querySelector("#edit-news-block").style.display = "none";
    document.querySelector("#news").style.display = "block";
    document.querySelector(".wrap").style.display = "block";
    document.querySelector(".pagination").style.display = "block";
}

function deleteArticle() {
    dbRequestModel.deleteArticle(GLOBAL_DETAILED_ARTICLE_ID).then(
        response => {
            resolve();
        },
        error => console.log(error)
    );

    startApp();
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
    console.log(filter);
    console.log(document.querySelector("#filter-form-tags").value.split(","));


    articleRenderer.removeArticlesFromDom();
    let articles = articleModel.getArticles(0, 100, filter);
    document.querySelector(".pagination").style.display = "none";
    articleRenderer.insertArticlesInDOM(articles);
}
