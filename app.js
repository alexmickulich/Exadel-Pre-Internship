const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const articles = require('./db.js').articles;
const users = require('./db.js').users;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const sessionStore = require('connect-mongo')(session);
const store = new sessionStore({url: 'mongodb://administrator:admin@ds155651.mlab.com:55651/blrnews'});
const ArticleModel = require('./db.js').ArticleModel;
const UserModel = require('./db.js').UserModel;





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


app.post('/articles', (req, res) => {
    new ArticleModel(req.body).save(err => !err ? res.sendStatus(200) : res.sendStatus(500));
});


app.put('/articles', function (request, response) {
        const skip = request.body.skip || 0;
        const top = request.body.top || 10;
        const filterConfig = request.body.filterConfig;
        let articles = [{}];
        console.log(filterConfig);

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
                            if (element.createdAt.getTime() <= new Date(filterConfig.dateStart).getTime()) {
                                return false;
                            }
                        }

                        if (filterConfig.dateEnd) {
                            if (element.createdAt.getTime() >= new Date(filterConfig.dateEnd).getTime()) {
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
                    })
                }
                else {
                    articles = newArticles;
                }
                let size = articles.length;
                articles = articles.slice(skip, skip + top);
                response.send({articles, size});
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
            response.send(article[0]);
        }
    });
});


app.delete('/articles/:id', (req, res) => {
    ArticleModel.findByIdAndRemove(req.params.id, err =>
        !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.patch('/articles', (req, res) => {
    ArticleModel.findByIdAndUpdate(req.body._id, {$set: req.body}, err =>
        !err ? res.sendStatus(200) : res.sendStatus(500));
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