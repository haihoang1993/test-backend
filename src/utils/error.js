import { commonLocale } from '../locales'

function parseError(error) {
    console.log('error', typeof error, error)
    console.log('error.name', typeof error.name, error.name)
    console.log('error.message', typeof error.message, error.message)
    let message = '', serverMessage = '';
    let code;
    if (error.name === 'MongoError') {
        if (error.code === 11000) {
            code = error.code
            serverMessage = error.message
            message = commonLocale.dataAlreadyExisted.message
        } else {
            code = commonLocale.serverError.code
            message = error.message
        }
    } else if (error.errors) {
        const keys = Object.keys(error.errors)
        message = error.errors[keys[0]] ? error.errors[keys[0]].message : commonLocale.serverError
    } else if (error.message) {
        // server defined error
        code = error.code
        message = error.message
    } else {
        code = error.code
        message = commonLocale.serverError.message
        serverMessage = error.message
    }

    return {
        success: false,
        message,
        serverMessage,
        code
    }
}

function parseStatusCode(err) {
    return err?.statusCode || 400;
}

export default {
    parseError,
    parseStatusCode
}
