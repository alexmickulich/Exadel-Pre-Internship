const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const articles = require('./db.js').articles;
const users = require('./db.js').users;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const sessionStore = require('connect-mongo')(session);
const store = new sessionStore({url: 'mongodb://localhost/admin'});
const ArticleModel = require('./db.js').ArticleModel;
const UserModel = require('./db.js').UserModel;

/*
let db = require('diskdb');
db.connect('./db', ['articles']);
const arts = db.articles.find();
arts.forEach(item => {
    delete item.id;
    delete item._id;
    new ArticleModel(item).save(err => !err ? console.log('added') : console.log('err'));
})
let db = require('diskdb');
db.connect('./db', ['users']);
const arts = db.users.find();
arts.forEach(item => {
    new UserModel(item).save(err => !err ? console.log('added') : console.log('err'));
})
*/


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function () {
    console.log("localhost:", app.get('port'));
})


app.get('/articles', function (request, response) {
    ArticleModel.find().exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            response.json(result);
        }
    });
})

app.get('/articles/:id', function (request, response) {
    ArticleModel.findOne().exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            response.json(result.findOne(
                {id: request.params.id}
                )
            );
        }
    });
})

app.post('/articles', function (request, response) {
    ArticleModel.save().exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            response.json(result.save(request.body));
        }
    });
});


app.put('/articles', function (request, response) {
        const skip = request.body.skip || 0;
        const top = request.body.top || 10;
        const filterConfig = request.body.filterConfig;
        let articles = [{}];

        ArticleModel.find().exec((err, result) => {
            if (err) {
                response.sendStatus(500);
            }
            else {
                let newArticles = result;
                newArticles.sort(function (a, b) {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });
                if (filterConfig) {
                    articles = newArticles.filter(function (element) {
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
                                    if (element.tags[j].toLowerCase() === filterConfig.tags[i].toLowerCase()) {
                                        flag = true;
                                    }
                                }
                            }
                            if (flag === false)
                                return false;

                        }

                        return true;
                    }).slice(skip, skip + top)
                }
                else {
                    articles = newArticles.slice(skip, skip + top);
                }

                response.send(articles);
            }
        });
    }
);

app.put('/articlesid', function (request, response) {
    ArticleModel.findOne({_id: request.body.id}).exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            let article = [result];
            console.log(article);
            response.send(article[0]);
        }
    });
});







app.delete('/articles', function (request, response) {
    ArticleModel.findOne().exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            response.json(result.remove({id: request.body.id}));
        }
    });
});

app.delete('/articles/:id', function (request, response) {
    ArticleModel.findOne().exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            response.json(result.remove({id: request.params.id}));
        }
    });
});

app.patch('/articles', function (request, response) {
    ArticleModel.remove().exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            result.remove({id: request.body.id});
            ArticleModel.save().exec((err, result) => {
                if (err) {
                    response.sendStatus(500);
                }
                else {
                    response.json(result.save(request.body));
                }
            });
        }
    });
});


app.patch('/articles/:id', function (request, response) {
    ArticleModel.remove().exec((err, result) => {
        if (err) {
            response.sendStatus(500);
        }
        else {
            result.remove({id: request.body.id});
            ArticleModel.save(request.body).exec((err, result) => {
                if (err) {
                    response.sendStatus(500);
                }
                else {
                    response.json(result);
                }
            });
        }
    });
});


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: store
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => {
    const error = user ? null : new Error('deserialize');
    done(error, user)
});

passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    (req, username, password, done) => {
        UserModel.findOne({username: username}).exec((err, result) => {
            if (err) {
                response.sendStatus(500);
            }
            else {

                const user = result;
                if (!user) {
                    console.log('User Not Found with username ' + username);
                    return done(null, false, {message: 'user not found'});
                }
                if (password !== user.password) {
                    console.log('Invalid Password');
                    return done(null, false, {message: 'incorrect password'});
                }
                return done(null, user);
            }
        })
    })
);

app.post('/login', passport.authenticate('login'), (req, res) => res.sendStatus(200));

app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/username', (req, res) => req.user ? res.send(req.user.username) : res.sendStatus(401));