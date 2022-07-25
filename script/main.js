/*
modelando o header do projeto:

*/
// const header = document.getElementById('header')
const dropDown = document.querySelectorAll('.top-section')
const sticky = header.offsetTop
window.onscroll = function () {
  header.classList.add('shadow-scroll')
  addClass()
}

function addClass() {
  if (window.pageYOffset > sticky) {
    header.classList.add('scroll')
    for (let i of dropDown) {
      i.classList.add('top_drop')
    }
  } else {
    header.classList.remove('scroll')
    for (let i of dropDown) {
      i.classList.remove('top_drop')
    }
  }
}

// pop-up do vídeo:
const container_video = document.querySelector('#Container_video')
const displayVideo = document
  .querySelector('#video-thumb')
  .addEventListener('click', () => {
    container_video.classList.add('display-video')
  })
//baixar o vídeo para fazer o controle do conteúdo melhor.
const displayNone = document
  .querySelector('.fa-xmark')
  .addEventListener('click', () => {
    container_video.classList.remove('display-video')
  })

/*fazer o dropdanw dos itens */
/*adicionar um vídeo de propaganda na pag e fazer
um modal de exibição
*/
/*
mudar a imagem que é exibida ao escolher a mesma
dar um zoom ao passar o mouse em cima da imagem que está em des
taque
*/
