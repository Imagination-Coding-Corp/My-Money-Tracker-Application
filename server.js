const path = require('path');
const express = require('express');
const session = require('express-session');
const exbhs = require('express-handlebars');
const controllers = require('./controllers');
const sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')
(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

const secret = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(secret));

const bhs = exbhs.create();
app.engine('handlebars', hbs.engine);
app.set('view-engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join( __dirname, 'public')));

app.use(controllers);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server start on ${PORT}.`)
    })
})
