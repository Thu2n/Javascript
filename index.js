const mudaTitulo = (novoTitulo) => {
    const titulo = document.getElementsById('titulo-principal')
    titulo.innerText = novoTitulo
}

setTimeout(() => mudaTitulo('Oba! Alterei o titulo'), 2000)

const listaDeLi = document.getElementByTagName('li')

const listaDeCores = ['#d60000', '#05f7ab']

const listaDeParagrafos =  document.getElementByTagName('p')

const botao = document.getElementByTagName('button')[0]

setTimeout(() => {
    botao.innerText ='Clique com  onovo texto'
    botao.style.fontSize ='60px'
}, 3000)

for(let paragrafo of listaDeParagrafos) {
    paragrafo.classList = 'paragrafo'
}

for(let li in listaDeLi) {
    listaDeLi[li].style.color = listaDeCores[li]
}



