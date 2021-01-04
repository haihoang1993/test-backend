'use strict';
import { mongoose, Schema } from '../../utils'
import bcrypt from 'bcryptjs'


/**
 * User Schema
 */
const TwitterSchema = new Schema({
    text: {
        type: String,
    },
    time: {
        type: String
    },
});

const Twitter = mongoose.model('twitter', TwitterSchema);

export default Twitter;
