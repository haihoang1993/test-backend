function build(success = true, data = {}, meta = {}) {
  return {
    success,
    serverCode: meta.code ? parseInt(meta.code) : undefined,
    message: meta.message,
    serverMessage: meta.serverMessage,
    data
  }
}

export default {
  build
}
