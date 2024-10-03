import { resolve } from 'node:path'

const { NODE_ENV } = process.env
const { dirname } = import.meta

async function buildHome(req, res) {
    const separator = NODE_ENV === 'development' ? '\\' : '/';
    const _dirname = dirname.split(separator).filter((_, i, arr) => i !== arr.length - 1).join(separator)

    return res.sendFile(resolve(`${_dirname}/views/index.html`))
}

export { buildHome }