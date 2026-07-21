window.onload = function () {

    const imagens = document.querySelectorAll(".cover, .social-post");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const close = document.querySelector(".close");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let atual = 0;

    function abrir(i){

        atual = i;

        lightbox.classList.add("active");

        lightboxImg.src = imagens[atual].src;

    }

    function proxima(){

        atual++;

        if(atual >= imagens.length){

            atual = 0;

        }

        lightboxImg.src = imagens[atual].src;

    }

    function anterior(){

        atual--;

        if(atual < 0){

            atual = imagens.length - 1;

        }

        lightboxImg.src = imagens[atual].src;

    }

    imagens.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            abrir(index);

        });

    });

    close.addEventListener("click",()=>{

        lightbox.classList.remove("active");

    });

    next.addEventListener("click",(e)=>{

        e.stopPropagation();

        proxima();

    });

    prev.addEventListener("click",(e)=>{

        e.stopPropagation();

        anterior();

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            lightbox.classList.remove("active");

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")) return;

        switch(e.key){

            case "Escape":
                lightbox.classList.remove("active");
                break;

            case "ArrowRight":
                proxima();
                break;

            case "ArrowLeft":
                anterior();
                break;

        }

    });


    const audiovisualCards = document.querySelectorAll(".audiovisual-card");
    const videoLightbox = document.getElementById("video-lightbox");
    const videoLightboxFrame = document.getElementById("video-lightbox-frame");
    const videoLightboxClose = document.querySelector(".video-lightbox-close");

    function closeVideoLightbox(){

        videoLightbox.classList.remove("active");
        videoLightbox.setAttribute("aria-hidden", "true");
        videoLightboxFrame.src = "";

    }

    audiovisualCards.forEach((card)=>{

        card.addEventListener("click",(e)=>{

            e.preventDefault();
            videoLightboxFrame.src = "https://www.youtube.com/embed/" + card.dataset.videoId + "?autoplay=1";
            videoLightbox.classList.add("active");
            videoLightbox.setAttribute("aria-hidden", "false");

        });

    });

    videoLightboxClose.addEventListener("click", closeVideoLightbox);

    videoLightbox.addEventListener("click",(e)=>{

        if(e.target === videoLightbox){

            closeVideoLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key === "Escape" && videoLightbox.classList.contains("active")){

            closeVideoLightbox();

        }

    });
};
// Motion Preview

const videos = document.querySelectorAll(".video-card video");
const botoes = document.querySelectorAll(".sound-btn");

videos.forEach(video=>{

    video.parentElement.addEventListener("mouseenter",()=>{

        video.play();

    });

    video.parentElement.addEventListener("mouseleave",()=>{

        video.pause();
        video.currentTime=0;

    });

});

botoes.forEach((botao,index)=>{

    const video = videos[index];
    const volume = document.createElement("input");

    volume.className = "volume-control";
    volume.type = "range";
    volume.min = "0";
    volume.max = "1";
    volume.step = "0.05";
    volume.value = "0.7";
    volume.setAttribute("aria-label", "Ajustar volume do vídeo");

    video.volume = Number(volume.value);
    botao.insertAdjacentElement("afterend", volume);

    volume.addEventListener("input",()=>{

        video.volume = Number(volume.value);

    });

    volume.addEventListener("click",(e)=> e.stopPropagation());

    botao.addEventListener("click",(e)=>{

        e.stopPropagation();

        video.muted = !video.muted;

        const comSom = !video.muted;

        botao.classList.toggle("is-playing", comSom);
        video.parentElement.classList.toggle("sound-active", comSom);
        botao.setAttribute("aria-pressed", String(comSom));
        botao.setAttribute("aria-label", comSom ? "Desativar som" : "Ativar som");
        botao.querySelector("span").textContent = comSom ? "Som ligado" : "Som";

    });

});