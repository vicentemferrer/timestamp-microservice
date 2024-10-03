import { resolve } from 'node:path'

const { dirname } = import.meta

async function buildHome(req, res) {
    const _dirname = dirname.split('\\').filter((_, i, arr) => i !== arr.length - 1).join('/')

    return res.sendFile(resolve(`${_dirname}/views/index.html`))
}

export { buildHome }