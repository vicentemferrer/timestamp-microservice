import Timestamp from '../models/timestampClass.js'
import { matchDateWithType, isInvalidDate } from '../utilities/helpers.js'

async function getTimestamp(req, res) {
    const reqDate = matchDateWithType(req.params.date)
    const date = isNaN(reqDate) && !reqDate ? Date.now() : reqDate

    if (isInvalidDate(new Date(date))) {
        return res.json({ error: 'Invalid Date' })
    }

    return res.json(new Timestamp(new Date(date)))
}

export { getTimestamp }