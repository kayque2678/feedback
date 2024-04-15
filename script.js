let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", quardarNota)
})

function guardarNota(evento) {
    let nota = evento.target.innerText

    localStorage.setIten("nota", nota)
}