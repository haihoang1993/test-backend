import { commonCode, userCode } from './response-code'

export default {
    invalidEmailFormat: {
        code: userCode.invalidEmailFormatCode,
        message: 'Email invalid'
    },
    notFound: {
        code: userCode.notFound,
        statusCode: 404,
        message: 'User not found'
    },
    userExisted: {
        code: userCode.userExisted,
        statusCode: 400,
        message: 'User existed'
    },
    wrongEmailOrPassword: {
        code: userCode.wrongEmailOrPassword,
        statusCode: 401,
        message: 'Authentication failed. Wrong email or password.'
    },
    invalidSearchKeyWord: {
        code: userCode.invalidSearchKeyWord,
        message: 'Search keyword is invalid'
    },
    notEnoughToken: {
        code: userCode.notEnoughToken,
        message: 'Not enough token'
    },
    transferLocked: {
        code: userCode.transferLocked,
        message: 'Transfer token is locked'
    },
    swapLocked: {
        code: userCode.swapLocked,
        message: 'Swap token is locked'
    },
    notEnoughFund: {
        code: userCode.notEnoughFund,
        message: 'Not enough fund'
    },
    serverNotEnoughFund: {
        code: userCode.serverNotEnoughFund,
        message: 'Server not enough fund'
    },
    needMoreIncome: {
        code: userCode.needMoreIncome,
        message: 'You need more income'
    },
    invalidAmount: {
        code: userCode.invalidAmount,
        message: 'Amount invalid'
    },
    errorTransferYourSelf: {
        code: userCode.errorTransferYourSelf,
        message: 'You can not transfer to your self'
    },
    errorInviteYourSelf: {
        code: userCode.errorInviteYourSelf,
        message: 'You can not invite your self'
    },
    errorDuplicateRequest: {
        code: userCode.errorDuplicateRequest,
        message: 'Processing another request'
    },
    inviterNotFound: {
        code: userCode.inviterNotFound,
        message: 'Network error, please try again!'
    },
    requestInvalid: {
        code: userCode.requestInvalid,
        message: 'Request invalid'
    },
    noWallet: {
        code: userCode.noWallet,
        message: 'No wallet'
    },
    comingSoon: {
        code: -999,
        message: 'Coming soon'
    },
    maintenance: {
        code: userCode.maintenance,
        message: 'Maintenance mode'
    },
    suspiciousDetected: {
        code: userCode.suspiciousDetected,
        message: 'Suspicious hack detected, please contact your upline'
    },
    invalidSwap: {
        code: userCode.invalidSwap,
        message: 'Invalid request'
    },
    maxSwapToken: {
        code: userCode.maxSwapToken,
        message: 'Maximum 1 swap per day'
    },
    minSwapToken: {
        code: userCode.minSwapToken,
        message: 'Min swap token is $100'
    },
    maxValueSwapToken: {
        code: userCode.maxValueSwapToken,
        message: 'Maximum swap is 10% of your total staking'
    },

    userNotFound: {
        code: userCode.userNotFound,
        statusCode: 401,
        message: 'Authentication failed. User not found.'
    },
    passChange: {
        code: userCode.passChange,
        statusCode: 401,
        message: 'Authentication failed. Password has been changed.'
    },
    userNotVerify: {
        code: userCode.userNotVerify,
        statusCode: 404,
        message: 'User not verify. Please verify user.'
    },
    userVerified: {
        code: userCode.userVerify,
        statusCode: 401,
        message: 'This account has already been verified. Please log in.'
    },
    userVerifySuccess: {
        code: userCode.userVerifySuccess,
        message: 'The account has been verified.'
    },
    sendEmailSuccess: {
        code: userCode.sendEmailSuccess,
        message: 'A verification email has been sent to your email.'
    },
    invalidToken: {
        code: userCode.invalidToken,
        statusCode: 400,
        message: 'We were unable to find a valid token. Your token have expired.'
    },
    updateUserSuccess: {
        code: userCode.updateUserSuccess,
        message: 'Has been updated successfully!'
    },
    getDataSuccess: {
        code: userCode.getDataSuccess,
        message: 'Get data success!'
    },
    addDataSuccess: {
        code: userCode.addDataSuccess,
        message: 'Add data success!'
    }
}
