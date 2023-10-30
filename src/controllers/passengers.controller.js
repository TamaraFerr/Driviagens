import httpStatus from "http-status"
import { passengerService } from "../services/passengerService.js"

async function createPassenger(req, res) {
    const { firstName, lastName } = req.body

    await passengerService.create(firstName, lastName)
    res.sendStatus(httpStatus.CREATED)
}

async function findingTravels(req, res) {
    const { name } = req.query

    const travels = await passengerService.findTravels(name)
    
    const formattedTravels = travels.map(travel => {
        return {...travel, travels: parseInt(travel.travels)}
    })

    res.send(formattedTravels)
}

export const passengerController = { createPassenger, findingTravels }