window,addEventListener("scroll", function(){
    let header = document.querySelector('#header') 
    header.classList.toggle('rolagem', window.scrollY > 800)
})

window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    let video = document.getElementById('video-background');
    video.style.transform = "translateY(-" + scrollPosition / 1 + "px)"; // Ajuste o valor (3) conforme necessário para controlar a velocidade da rolagem do vídeo
});


