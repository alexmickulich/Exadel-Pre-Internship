let dbRequestModel = (function () {
        function getArticles() {
            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();
                request.open('GET', '/articles');
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
                request.send();
            });
        }

        function addArticle(article) {
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

        function deleteArticle(id) {
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

        function editArticle(article) {
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


        function logIn(user) {
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

        function logOut() {
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

        function getUsername() {
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

        return {
            editArticle: editArticle,
            deleteArticle: deleteArticle,
            addArticle: addArticle,
            getArticles: getArticles,
            logIn: logIn,
            logOut: logOut,
            getUsername:getUsername
        }
    }

    ()
);

