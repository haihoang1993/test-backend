const createError = require('http-errors'); 
import ev from 'express-validation'
import responseBuilder from './src/utils/response-builder';
import errorUtil from './src/utils/error'
import { commonLocale } from './src/locales'
import db  from './src/init/db';

const logger = require('morgan');

export default async (app) => {

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error', { title: 'Error' });
    });

    app.use(handleValidationError);

    function handleValidationError(error, req, res, _) {
        if (error instanceof ev.ValidationError) {
            return res.status(error.status).jsonp(responseBuilder.build(false, {}, {
                code: error.status,
                message: error.errors[0].messages[0].split('"').join('').split('undefined').join('')
            }))
        } else {
            console.log('500', error)
            logger.info({
                data: {
                    url: `500 - ${req.method.toUpperCase()} ${req.url}`,
                    clientData: ['get', 'delete'].includes(req.method.toLowerCase()) ? req.query : req.body
                }
            })
            return res.status(500).jsonp(responseBuilder.build(false, {}, errorUtil.parseError(commonLocale.serverError)))
        }
    }
    await db();
}