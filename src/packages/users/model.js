'use strict';
import { mongoose, Schema } from '../../utils'
import bcrypt from 'bcryptjs'

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
/**
 * User Schema
 */
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name required!'],
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, 'Email required!'],
        validate: {
            validator: validateEmail,
            message: props => `${props.value} is not a valid email address!`
        },
    },
    roles: {
        type: String,
        lowercase: true,
        trim: true,
        default: 'user'
    },
    notification: {
        type: Boolean,
        default: false
    },
    phone_number: {
        type: String,
        lowercase: true,
        trim: true,
        default: ''
    },
    hash_password: {
        type: String,
        required: true
    },
    created_at: {
        type: Number,
        default: Date.now
    },
    updated_at: {
        type: Number,
        default: Date.now
    },
});
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};
const User = mongoose.model('User', UserSchema);

export default User;
