import { stakingCode } from './response-code'

export default {
  amountInvalid: {
    code: stakingCode.amountInvalid,
    message: 'Amount is invalid'
  },
  levelInvalid: {
    code: stakingCode.levelInvalid,
    message: 'Level is invalid'
  },
  notEnoughToken: {
    code: stakingCode.notEnoughToken,
    message: 'Not enough tokens'
  },
  invalid: {
    code: -999,
    message: 'Staking is off now'
  }
}
