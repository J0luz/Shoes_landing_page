/*
modelando o header do projeto:

*/
const header = document.getElementById('header')
const sticky = header.offsetTop
window.onscroll = function () {
  header.classList.add('shadow-scroll')
  addClass()
}

function addClass() {
  window.pageYOffset > sticky
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
}

/*fazer o dropdanw dos itens */
/*adicionar um vídeo de propaganda na pag e fazer
um modal de exibição
*/
/*
mudar a imagem que é exibida ao escolher a mesma
dar um zoom ao passar o mouse em cima da imagem que está em des
taque
*/
