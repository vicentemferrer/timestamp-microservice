export default class Timestamp {
    constructor(date) {
        this.unix = date.getTime()
        this.utc = date.toUTCString()
    }
}