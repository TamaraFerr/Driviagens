import dayjs from "dayjs"
import { flightService } from "../services/flightService.js"
import httpStatus from "http-status"

async function createFlight(req, res) {
    const { origin, destination, date } = req.body

    await flightService.create(origin, destination, date)
    res.sendStatus(httpStatus.CREATED)
}

async function findAllFlights(req, res) {
    const { origin, destination, ['smaller-date']: smallerDate, ['bigger-date']: biggerDate } = req.query

    const flights = await flightService.findAll(origin, destination, smallerDate, biggerDate)

    const flightsFormatted = flights.map(flight => {
        const date = dayjs(flight.date).format("DD-MM-YYYY")
        return { ...flight, date }
    })
    
    res.send(flightsFormatted)
}


export const flightController = { createFlight, findAllFlights }