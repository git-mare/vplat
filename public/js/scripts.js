// script para mostrar prévia de thumbnail e vídeo selecionado na rota /upload

// variaveis para pré visualização de vídeo
var inputVideo = document.getElementById('videoInp')
var buttonVideo = document.getElementById('selectVideo')
var videoArea = document.getElementById('videoPreview')

// evento de pré visualização de vídeo
inputVideo.onchange = evt => {
    const [file] = inputVideo.files
    if (file) {
        videoArea.src = URL.createObjectURL(file)
    }

    buttonVideo.textContent = "Alterar vídeo selecionado"

}