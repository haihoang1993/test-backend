import { User } from '../../models'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import configs from '../../configs';

async function createUser(body) {
    body.hash_password = bcrypt.hashSync(body.password, 10);
    return User.create(body);
}
async function updateUser(filter, body) {
    delete body.email;
    body.updated_at = Date.now()
    return User.updateOne(filter, body);
}

async function findBy(option = {}) {
    return User.find(option);
}

async function findOneBy(option) {
    return User.findOne(option);
}

async function findByID(_id, projection, options) {
    return User.findById(_id, projection);
}

async function createToken(user, { remember }) {
    // console.log('jwtSecret', jwtSecret)
    return jwt.sign({
        //email: user.email,
        name: user.name,
        _id: user._id,
        created_at: Date.now(),
    }, configs.jwtSecret, { expiresIn: remember ? 60 * 60 * 24 * 7 : 60 * 60 })
}

export default {
    createUser,
    findBy,
    findOneBy,
    findByID,
    updateUser,
    createToken,
}
