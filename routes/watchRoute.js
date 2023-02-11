const Videos = require('./../database/Videos')

function watchRoute(req, res) {
    var id = req.params.id

    // lista de videos na rota watch, no menu a direita
    Videos.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ],
        // limite de vídeos na área de sugestões da rota watch
        limit: 8
    }).then(suggest => {

        let suggestion = suggest

        Videos.findOne({
            where: { id: id }
        }).then(watch => {

            // watch é equivalente ao parametro passado na rota, no caso: watch/id_da_postagem
            if (watch != undefined) {
                watch.update({
                    views: watch.views + 1 // contagem básica de visualizações
                })
                res.render("watch", {
                    title: `Assistir ${watch.title}`, // titulo da página
                    watch: watch, // passando o video específico para o foreach no EJS (em partials/videos.ejs)
                    suggest: suggestion // passando a lista de videos para o foreach no EJS (em partials/aside.ejs)
                })
            } else {

                // caso o parametro inserido na rota não existir
                res.redirect("/")
            }

        })

    })

}
module.exports = watchRoute