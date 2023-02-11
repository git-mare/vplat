const Videos = require('./../database/Videos')

function homepageRoute(req, res) {

    // organizar os vídeos em ordem decrescente a partir do número do id na database
    Videos.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(watch => {
        res.render("index", {
            title: 'Página inicial',
            uploadSuccess: req.flash('upload_success'),
            watch: watch
        })
    })
}
module.exports = homepageRoute