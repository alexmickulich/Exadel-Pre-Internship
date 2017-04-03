
var dbRequestModel=(function () {
    function getArticles() {
        var request = new XMLHttpRequest();
        request.open('GET', '/articles', false);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                return request.responseText;
            };
        }
        return request.onreadystatechange();
    }

    function addArticle(article) {
        var req = new XMLHttpRequest();
        req.open('POST', '/articles');
        req.setRequestHeader('content-type', 'application/json');
        req.send(JSON.stringify(article));
    }

    function deleteArticle(id) {
        var req = new XMLHttpRequest();
        req.open('DELETE', '/articles/' + id);
        req.send();
    }

    function editArticle(article) {
        var req = new XMLHttpRequest();
        req.open('PATCH', '/articles');
        req.setRequestHeader('content-type', 'application/json');
        req.send(JSON.stringify(article));
    }
    return {
        editArticle: editArticle,
        deleteArticle: deleteArticle,
        addArticle: addArticle,
        getArticles: getArticles,
    }
}());

