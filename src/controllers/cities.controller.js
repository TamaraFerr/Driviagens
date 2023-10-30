import httpStatus from "http-status"
import { cityService } from "../services/cityService.js"

async function createCity(req, res) {
    const { name } = req.body

    await cityService.create(name)
    res.sendStatus(httpStatus.CREATED)
}

export const cityController = { createCity }