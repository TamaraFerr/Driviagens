import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { travelController } from "../controllers/travels.controller.js"
import travelSchema from "../schemas/travels.schema.js";

const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelSchema), travelController.createTravel)

export default travelsRouter;