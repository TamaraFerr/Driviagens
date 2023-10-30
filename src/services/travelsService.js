import { errors } from "../errors/errors.js"
import { flightRepository } from "../repositories/flight.repository.js"
import { passengerRepository } from "../repositories/passenger.repository.js"
import { travelRepository } from "../repositories/travels.repository.js"

async function create(passengerId, flightId) {
    const passenger = await passengerRepository.findById(passengerId)
    if (!passenger) throw errors.notFound("Passenger")

    const flight = await flightRepository.findById(flightId)
    if (!flight) throw errors.notFound("Flight")

    await travelRepository.create(passengerId, flightId)
}

export const travelService = { create }