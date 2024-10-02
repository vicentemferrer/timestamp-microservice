const { dirname } = import.meta;

async function buildHome(req, res) {
    const _dirname = dirname.split('\\').filter((_, i, arr) => i !== arr.length - 1).join('/');

    res.sendFile(`${_dirname}/views/index.html`);
}

export { buildHome }