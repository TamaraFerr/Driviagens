import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { passengerController } from "../controllers/passengers.controller.js"
import passengerSchema from "../schemas/passengers.schema.js";

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengerSchema), passengerController.createPassenger)
passengersRouter.get("/passengers/travels", passengerController.findingTravels)

export default passengersRouter;