const notFound = (req, res) => {
    return res.status(404).send("la ruta no existe")
}

module.exports = notFound