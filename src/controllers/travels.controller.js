import httpStatus from "http-status"
import { travelService } from "../services/travelsService.js"

async function createTravel(req, res) {
    const { passengerId, flightId } = req.body

    await travelService.create(passengerId, flightId)
    res.sendStatus(httpStatus.CREATED)
}

export const travelController = { createTravel }