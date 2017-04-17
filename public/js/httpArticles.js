let dbRequestModel = (function () {
    function getArticles() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', '/articles');
            request.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response, (key, value) => {
                        if(key === 'createdAt') return new Date(value);
                        return value;
                    }));
                }
            };
            request.onerror = function () {
                reject(new Error("Network Error"));
            };
            request.send();
        });
    }

    function addArticle(article) {
        let req = new XMLHttpRequest();
        req.open('POST', '/articles');
        req.setRequestHeader('content-type', 'application/json');
        req.send(JSON.stringify(article));
    }

    function deleteArticle(id) {
        let req = new XMLHttpRequest();
        req.open('DELETE', '/articles/' + id);
        req.send();
    }

    function editArticle(article) {
        let req = new XMLHttpRequest();
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

