import { Router } from "express";
import { cityController } from "../controllers/cities.controller.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import citieSchema from "../schemas/cities.schema.js";

const citiesRouter = Router()

citiesRouter.post("/cities", validateSchema(citieSchema), cityController.createCity)

export default citiesRouter;