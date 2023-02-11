// bibliotecas npm
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const multer = require('multer')

// conexão com a database
const connection = require('./database/database')
const Videos = require('./database/Videos')

// funções importadas
const homepage = require('./routes/homepageRoute')
const upload = require('./routes/uploadRoute')
const watch = require('./routes/watchRoute')

// multer (aqui será feito o processo de upload para o servidor a partir do formulário de upload.ejs)
const uploadVideo = multer({ dest: `public/videos/`, fileSize: 3000000000 }) // aceitar arquivos de até 3GB

// na linha abaixo, estamos upando o video inserido no formulário
const video = uploadVideo.single("video") // "video" é o valor de name no formulário do arquivo upload.ejs


// conectando a Database
connection.authenticate()
    .then(() => {
        console.log('[Servidor conectado a database]')
    })
    .catch((msgError) => {
        console.log(msgError)
    })

// session
app.use(session({
    secret: 'insiraNumerosLetrasSimbolosAleatorios',
    cookie: { maxAge: 300000000 }, // a sessão ficará aberta por 3 dias (estamos usando milisegundos)
    saveUninitialized: true,
    resave: true
}))

// biblioteca para mensagens sob condições. Necessário usar a biblioteca session
app.use(flash())

// utilizar a engine EJS
app.set("view engine", "ejs")

// ativar páginas estáticas (css, js, imagens)
app.use(express.static('public'))

// essa biblioteca irá auxiliar para pegar as informações de app.post (req.body.query)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rotas
app.get("/", homepage)
app.get("/upload", upload)
app.get("/watch/:id", watch)

// rotas post
// passando como parametro a variável "video" criada na parte do multer
app.post("/newVideo", video, function(req, res) {

    const videoPath = `videos/${req.file.filename}`

    // Adicionar vídeo
    Videos.create({

        title: req.body.title,
        description: req.body.description,
        playerdir: videoPath

    }).then(() => {

        req.flash('upload_success', "Seu vídeo foi publicado.")
        res.redirect("/")

    })

})

// ligar servidor na porta 2222 (localhost:2222)
app.listen(2222, () => {
    console.log("[Servidor online]")
})