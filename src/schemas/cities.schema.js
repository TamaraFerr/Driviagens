import Joi from "joi";

const citieSchema = Joi.object({
    name: Joi.string().required()
})

export default citieSchema;