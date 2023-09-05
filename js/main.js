const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");
navBtn.onclick = () => {
    if (nav.classList.toggle("open")){
    navBtnImg.src = "./img/icons/nav-close.svg";
    }else{
    navBtnImg.src = "./img/icons/nav-open.svg";
    }
}

AOS.init(
    {
        ocne:true ,         // из-за этого эффекты будут 1 раз, а не на втфе 
        disable: "mobile"   // отключает на мобасах 
    }
    
); // включение библии анимаций. Анимацию кста подключают к конкретным элемем страницы, шоб так сделать нид вешать дата атребуты на дивы