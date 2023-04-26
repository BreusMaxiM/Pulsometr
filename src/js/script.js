window.addEventListener('DOMContentLoaded', ()=>{
    const leftBtn = document.querySelector('#leftBtn');
    const rightBtn = document.querySelector('#rightBtn');
    const imgSl = document.querySelector('.slider__img__conteiner');
    const genius = document.querySelectorAll('div.slider__img__conteiner > img');
    let trX=0;
    let trZ=-750;
    let startPos=trX;
    genius.forEach((e)=>{
        e.style.transform = `translateX(${startPos}px)`;
        startPos+=750;
    })
    imgSl.style.transform = `translateX(${trZ}px)`;

    rightBtn.addEventListener('click', ()=>{
        trX+=750;
        trZ-=750;
        crNEE(trX);
        document.querySelectorAll('div.slider__img__conteiner > img')[0].remove();
        imgSl.style.transform = `translateX(${trZ}px)`;
    });

    leftBtn.addEventListener('click', ()=>{
        trX-=750;
        trZ+=750;
        crNES(trX);
        document.querySelectorAll('div.slider__img__conteiner > img')[document.querySelectorAll('div.slider__img__conteiner > img').length-1].remove();
        imgSl.style.transform = `translateX(${trZ}px)`;
    });

    let crNEE = (e)=>{
        let zxc =document.createElement('img');
        zxc.src=document.querySelectorAll('div.slider__img__conteiner > img')[0].src;
        zxc.alt=document.querySelectorAll('div.slider__img__conteiner > img')[0].alt;
        zxc.style.transform = `translateX(${e+1500}px)`;
        imgSl.append(zxc);
    }
    let crNES = (e)=>{
        let zxc =document.createElement('img');
        zxc.src=document.querySelectorAll('div.slider__img__conteiner > img')[document.querySelectorAll('div.slider__img__conteiner > img').length-1].src;
        zxc.alt=document.querySelectorAll('div.slider__img__conteiner > img')[document.querySelectorAll('div.slider__img__conteiner > img').length-1].alt;
        zxc.style.transform = `translateX(${e}px)`;
        imgSl.prepend(zxc);
    }
});