import { errors } from "../errors/errors.js"

export function validateSchema(schema) {
    return (req, res, next) => {
        const validate = schema.validate(req.body);

        if (validate.error) {
            console.log(validate.error.details)
            throw errors.wrongData()
        }
        next();
    }
}