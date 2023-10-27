import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import flighstRouter from "./flights.routes.js";
import passengersRouter from "./passengers.routes.js";
import travelsRouter from "./travels.routes.js";

const router = Router()

router.use(passengersRouter)
router.use(citiesRouter)
router.use(flighstRouter)
router.use(travelsRouter)

export default router;