const commonCode = {
    serverError: 1000,
    apiNotFound: 1001,
    tokenVerifyFailed: 1002,
    dataAlreadyExisted: 1003,
    passwordInvalidFormat: 1004,
    noToken: 1005,
    havePendingTransaction: 1006,
    noPayableAddress: 1007,
    keyInvalid: 1008,
}

const userCode = {
    invalidEmailFormatCode: 1050,
    invalidPhoneFormatCode: 1051,
    notFoundOrInactiveCode: 1052,
    userExisted: 1053,
    invalidOldPasswordCode: 1054,
    invalidNewPasswordCode: 1055,
    notFound: 1056,
    invalidSearchKeyWord: 1057,
    notEnoughToken: 1058,
    transferLocked: 1059,
    swapLocked: 1060,
    notEnoughFund: 1061,
    serverNotEnoughFund: 1062,
    needMoreIncome: 1063,
    errorTransferYourSelf: 1064,
    invalidAmount: 1065,
    errorDuplicateRequest: 1066,
    errorInviteYourSelf: 1067,
    inviterNotFound: 1068,
    requestInvalid: 1069,
    noWallet: 1070,
    maintenance: 1071,
    suspiciousDetected: 401,
    invalidSwap: 1072,
    maxSwapToken: 1073,
    minSwapToken: 1074,
    maxValueSwapToken: 1075,
    wrongEmailOrPassword: 1076,
    userNotFound: 1077,
    passChange: 1078,
    userNotVerify: 1079,
    userVerify: 1080,
    sendEmailSuccess: 1081,
    userVerifySuccess: 1082,
    invalidToken: 1083,
    updateUserSuccess: 1084,
    getDataSuccess: 1085,
    addDataSuccess: 1086,
}

const sessionCode = {
    loginFail: 2001,
    systemMaintenance: 2002,
    registerSuccess: 2003,
    loginSuccess: 2004,
    sessionHasExpired: 2005,
}

const stakingCode = {
    amountInvalid: 2100,
    levelInvalid: 2101,
    notEnoughToken: 2102
}

export {
    commonCode,
    sessionCode,
    stakingCode,
    userCode
}
