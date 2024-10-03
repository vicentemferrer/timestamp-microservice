function matchDateWithType(date) {
    return isNaN(date) ? date : parseInt(date)
}

function isInvalidDate(date) {
    return date.toUTCString() === 'Invalid Date'
}


export { matchDateWithType, isInvalidDate }