import Joi from "joi";

const travelSchema = Joi.object({
    passengerId: Joi.number().required(),
    flightId: Joi.number().required()
})

export default travelSchema;