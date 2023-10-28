import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { passengerController } from "../controllers/passengerController.js"
import passengerSchema from "../schemas/passengers.schema.js";

const passengersRouter = Router()

passengersRouter.post("/passengers", validateSchema(passengerSchema), passengerController.create)
passengersRouter.get("/passengers/travels", passengerController.findTravels)

export default passengersRouter;