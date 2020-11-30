const self = module.exports = {
    checkToken: req => {
        return req.headers &&
            req.headers.authorization &&
            req.headers.authorization.split(' ')[0] === 'Bearer'
    },
    getToken: (req) => {
        let authorization = null;
        let token = null;
        if (!self.checkToken(req)) return token;
        if (req.query && req.query.token) {
            return req.query.token;
        } else if (req.authorization) {
            authorization = req.authorization;
        } else if (req.headers) {
            authorization = req.headers.authorization;
        }
        if (authorization) {
            const tokens = authorization.split('Bearer ');
            if (Array.isArray(tokens) || tokens.length === 2) {
                token = tokens[1];
            }
        }
        return token;
    }
}
