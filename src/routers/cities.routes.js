import { Router } from "express";
import { cityController } from "../controllers/cityController.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import citieSchema from "../schemas/cities.schema.js";

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citieSchema), cityController.create)

export default citiesRouter;