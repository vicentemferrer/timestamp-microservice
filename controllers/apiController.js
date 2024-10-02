import Timestamp from '../models/timestampClass.js'
import { matchDateWithType, isInvalidDate } from '../utilities/helpers.js'

async function getTimestamp(req, res) {
    const reqDate = matchDateWithType(req.params.date)

    if (isInvalidDate(new Date(reqDate))) {
        res.json({ error: 'Invalid Date' })
    }

    const date = new Date(isNaN(reqDate) && !reqDate ? Date.now() : reqDate)

    res.json(new Timestamp(date))
}

export { getTimestamp }