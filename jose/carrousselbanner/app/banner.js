


var slideIndex = 1; //posicao do banner no array( ele sera indicado como slideIndex-1 para poder corresponder ao 0)
showSlides(slideIndex); //chama a função para mostrar o slide a primeira vez

//Controla os botoões de proximo e de anterior
function plusSlides(n) { //valor de n esta definido na linha html onde é chamado o onclick de next ou prev
  showSlides(slideIndex += n); //incremenda  ou decrementa dependendo do botão apertado para passar o slide
}

// controles do slide
function currentSlide(n) { //valor de n esta definido na linha html onde é chamado o onclick
  showSlides(slideIndex = n); // tem valor definido já de 1-3 quando clicado nos dot's
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner"); //retorna um array de todos que tem a classe banner(imagens do slide)
  var dots = document.getElementsByClassName("dot"); //retorna um array de todos que tem a classe dot (bolinhas que fazem transição do slide)
  if (n > slides.length) { slideIndex = 1 } //quando o valor de n for maior que o tamanho do array de banner ele volta para o banner 1
  if (n < 1) { slideIndex = slides.length } // quando o n for menor que 1 ele retorna para a ultima posição do array de banner indo para o ultimo banner
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //adiciona a todos os slides a caracteristica de display none
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //troca onde esta escrito active por ""(nulo)
  }
  slides[slideIndex - 1].style.display = "block"; //adiciona o banner que esta na posição 0 (ao iniciar a pagina )
  dots[slideIndex - 1].className += " active"; // deixa a bolinha que correspnde ao numero do slide ativa
}