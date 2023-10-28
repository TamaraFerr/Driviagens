import db from "../database/database.connection.js";

async function flightExistsByOriginAndDestination(origin, destination) {
    const result = await db.query('SELECT 1 FROM flights WHERE origin = $1 AND destination = $2', [origin, destination]);
    return result.rowCount > 0;
}

 async function addFlight(origin, destination, date) {
    const query = 'INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING *';
    const values = [origin, destination, date];
    const result = await db.query(query, values);
    return result.rows[0];
}


function getFlights(origin, destination, smallerDate, biggerDate) {
    const query = `
        SELECT f.id, c1.name AS origin, c2.name AS destination, TO_CHAR(f.date, 'DD-MM-YYYY') AS date
        FROM flights AS f
        JOIN cities AS c1 ON f.origin = c1.id
        JOIN cities AS c2 ON f.destination = c2.id
        WHERE ($1::text IS NULL OR c1.name = $1)
        AND ($2::text IS NULL OR c2.name = $2)
        AND ($3::date IS NULL OR f.date >= $3)
        AND ($4::date IS NULL OR f.date <= $4)
        ORDER BY f.date;
    `;

    console.log('Executing getFlightsDB with params:', origin, destination, smallerDate, biggerDate);

    return db.query(query, [origin || null, destination || null, smallerDate || null, biggerDate || null]);
}

async function flightExistsById(flightId) {
    const result = await db.query(`SELECT 1 FROM flights WHERE id = $1`, [flightId]);
    return result.rowCount > 0;
}

export const flightRepository = {flightExistsById, flightExistsByOriginAndDestination, getFlights, addFlight}