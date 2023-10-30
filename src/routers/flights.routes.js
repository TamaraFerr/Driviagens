import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { flightController } from "../controllers/flights.controller.js"
import { flightSchema } from "../schemas/flights.schema.js";

const flighstRouter = Router()

flighstRouter.post("/flights", validateSchema(flightSchema), flightController.createFlight)
flighstRouter.get("/flights", flightController.findAllFlights)

export default flighstRouter;