const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db=require('diskdb');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const sessionStore = require('connect-diskdb')(session);
const store = new sessionStore({ path: './db', name: 'sessions' });

db.connect('./db',['articles','users']);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function(){
  console.log("localhost:", app.get('port'));
})

app.get('/articles', function(request,response){
  response.json(db.articles.find());
})

app.get('/articles/:id',function(request,response){
  response.json(db.articles.findOne(
    {id: request.params.id}
  ));
})

app.post('/articles', function (request, response) {
  response.json(db.articles.save(request.body));
});

app.put('/articles', function (request, response) {
  response.json(db.articles.findOne({ id: request.body.id }));
});

app.put('/articles/:id', function (request, response) {
  response.json(db.articles.findOne({ id: request.params.id }));
});

app.delete('/articles', function (request, response) {
  response.json(db.articles.remove({ id: request.body.id }));
});

app.delete('/articles/:id', function (request, response) {
  response.json(db.articles.remove({ id: request.params.id }));
});

app.patch('/articles', function (request, response) {
db.articles.remove({ id: request.body.id });
response.json(db.articles.save(request.body));
});

app.patch('/articles/:id', function (request, response) {
db.articles.remove({ id: request.body.id });
response.json(db.articles.save(request.body));
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
        const user = db.users.findOne({ username: username });
        if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false, { message: 'user not found' });
        }
        if (password !== user.password) {
            console.log('Invalid Password');
            return done(null, false, { message: 'incorrect password' });
        }
        return done(null, user);
    })
);

app.post('/login', passport.authenticate('login'), (req, res) => res.sendStatus(200));

app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/username', (req, res) => req.user ? res.send(req.user.username) : res.sendStatus(401));
