export default {
  env: {
    production: 'production',
    development: 'development',
    test: 'test'
  },

  regex: {
    objectId: /^[0-9a-fA-F]{24}$/,
    phone: /^\+?1?(\d{10,12}$)/,
    email: /\S+@\S+\.\S+/,
    password: /^[a-f0-9]{32}$/,
    key: /[A-F0-9]{64}$/,
    address: /^0x[a-fA-F0-9]{40}$/,
    addressTail: /^[a-fA-F0-9]{6}$/,
    addressTailFree: /^[a-fA-F0-9]{3,40}$/,
    twoFactor: /^\d{6}$/
  },
  format: {
    date: 'DD/MM/YYYY, HH:mm'
  },
  jwtSecret: 'adb12332'
}
