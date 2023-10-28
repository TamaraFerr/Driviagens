import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { travelController } from "../controllers/travelController.js"
import travelSchema from "../schemas/travels.schema.js";

const travelsRouter = Router()

travelsRouter.post("/travels", validateSchema(travelSchema), travelController.create)

export default travelsRouter;