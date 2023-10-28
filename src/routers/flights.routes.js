import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { flightController } from "../controllers/flightController.js"
import { flightSchema } from "../schemas/flights.schema.js";

const flighstRouter = Router()

flighstRouter.post("/flights", validateSchema(flightSchema), flightController.create)
flighstRouter.get("/flights", flightController.findAll)

export default flighstRouter;