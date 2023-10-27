import Joi from "joi";

const flightSchema = Joi.object({
    origin: Joi.number().required(),
    destination: Joi.number().required(),
    date: Joi.date().format("DD-MM-YYYY").required()
})

export default flightSchema;