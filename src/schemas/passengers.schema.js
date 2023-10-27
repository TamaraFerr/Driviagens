import Joi from "joi";

const passengerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
})

export default passengerSchema;