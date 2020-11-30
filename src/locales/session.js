import { sessionCode } from './response-code'

export default {
    loginFail: {
        code: sessionCode.loginFail,
        message: 'Login fail'
    },
    systemMaintenance: {
        code: sessionCode.systemMaintenance,
        message: 'System maintenance'
    },
    registerSuccess: {
        code: sessionCode.registerSuccess,
        message: 'Register success! A verification email has been sent to your email.'
    },
    loginSuccess: {
        code: sessionCode.loginSuccess,
        message: 'Login success!'
    },
    sessionHasExpired: {
        code: sessionCode.sessionHasExpired,
        message: 'Session has expired.'
    },
}
