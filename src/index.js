import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

addEventListener("load", function(){
    alert("SAYFA YÜKLENDİ!");
});

let linkler = document.querySelectorAll("nav a");

linkler.forEach(link => {
    link.addEventListener("mouseover", function(){
        link.style.color = "#d2e145";
    });
    link.addEventListener("mouseout", function(){
        link.style.color = "#000";
    });
});

let btns = document.querySelectorAll(".btn");

btns.forEach(button => {
    button.addEventListener("click", function(){
        alert("Tamam seni de aldık!");
    });
});

addEventListener("keypress", function(){
    this.document.querySelector("h1").textContent = "EĞLENCE TRENİ";
});

addEventListener("scroll", function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    
    document.querySelector("body").style.background = `rgb(${x}, ${y}, ${z})`;
}); 

addEventListener("copy", () => {
    alert("Bir öge kopyalandı");
});

document.querySelector(".intro img").addEventListener("dblclick", () => {
    document.querySelector(".intro img").style.opacity = "0.4";
});

document.querySelector("section .img-content").addEventListener("mouseup", () => {
    alert("Mouse tuşu bırakıldı");
});

document.querySelector(".main-navigation").addEventListener("mouseleave", () => {
    document.querySelector(".main-navigation").style.background = "#4f3c9d";
});