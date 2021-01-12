
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const compression = require('compression');
const cors = require('cors')
const helmet = require('helmet');
import express from 'express'
import path from 'path'
import initApp from './init';
import RouterApi from './src/routesBase'
import Graphql from './src/packages/graphql';
import ApiDoc from './api-doc';

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
Graphql(app)
ApiDoc(app);
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(compression());//Compress all routes
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', RouterApi());


initApp(app)
module.exports = app;
