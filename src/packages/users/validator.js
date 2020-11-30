import Joi from 'joi'
export default {
    validateRegister: {
        body: {
            side: Joi.string().required().valid(userConfig.plugRef.all),
        }
    },
}
