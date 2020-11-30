import { commonCode } from './response-code'

export default {
  tokenVerifyFailed: {
    code: commonCode.tokenVerifyFailed,
    message: 'Authentication failed. Please login again'
  },
  noToken: {
    code: commonCode.noToken,
    message: 'Authentication info not found'
  },
  apiNotFound: {
    code: commonCode.apiNotFound,
    message: 'API not found'
  },
  serverError: {
    code: commonCode.serverError,
    message: 'Server error'
  },
  dataAlreadyExisted: {
    code: commonCode.dataAlreadyExisted,
    statusCode: 400,
    message: 'Data is already existed'
  },
  passwordInvalidFormat: {
    code: commonCode.passwordInvalidFormat,
    message: 'password format is invalid'
  },
  havePendingTransaction: {
    code: commonCode.havePendingTransaction,
    message: 'HavePending transactions'
  },
  noPayableAddress: {
    code: commonCode.noPayableAddress,
    message: 'No user to paid today'
  },
  keyInvalid: {
    code: commonCode.keyInvalid,
    message: 'Key is invalid'
  },
}
