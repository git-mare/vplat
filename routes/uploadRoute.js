function uploadRoute(req, res) {
    res.render("upload", {
        title: 'Adicionar vídeo'
    })
}
module.exports = uploadRoute