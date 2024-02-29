function mySwiper1() {
     var wid = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;
     var swiper1 = document.getElementById("swiper");
     if (wid >= 1199.98) {
          var swiper = new Swiper(".mySwiper1", {
               slidesPerView: 4.5,
               spaceBetween: 10,
               slidesPerGroup: 1,
               // loop: true,
               loopFillGroupWithBlank: true,
               pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
               },
               navigation: {
                 nextEl: ".nav-secure-buy-btn1",
                 prevEl: ".swiper-button-prev",
               },
          });
     }
     else if (wid >= 991.98 && wid < 1199.98) {
          var swiper = new Swiper(".mySwiper1", {
               slidesPerView: 4,
               spaceBetween: 1,
               slidesPerGroup: 1,
               // loop: true,
               loopFillGroupWithBlank: true,
               pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
               },
               navigation: {
                 nextEl: ".nav-secure-buy-btn1",
                 prevEl: ".swiper-button-prev",
               },
          });
     }
     else if (wid >= 767.98 && wid < 991.98) {
          var swiper = new Swiper(".mySwiper1", {
               slidesPerView: 3,
               spaceBetween: 1,
               slidesPerGroup: 1,
               // loop: true,
               loopFillGroupWithBlank: true,
               pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
               },
               navigation: {
                 nextEl: ".nav-secure-buy-btn1",
                 prevEl: ".swiper-button-prev",
               },
          });
     }
     else if(wid >= 575.98 && wid < 767.98) {
          var swiper = new Swiper(".mySwiper1", {
               slidesPerView: 2,
               spaceBetween: 1,
               slidesPerGroup: 1,
               // loop: true,
               loopFillGroupWithBlank: true,
               pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
               },
               navigation: {
                 nextEl: ".nav-secure-buy-btn1",
                 prevEl: ".swiper-button-prev",
               },
          });
     }
     else if(wid < 575.98) {
          var swiper = new Swiper(".mySwiper1", {
               slidesPerView: 1.5,
               spaceBetween: 1,
               slidesPerGroup: 1,
               // loop: true,
               loopFillGroupWithBlank: true,
               pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
               },
               navigation: {
                 nextEl: ".nav-secure-buy-btn1",
                 prevEl: ".swiper-button-prev",
               },
          });
     }
     else {
          swiper1.className = " swiperShowOff";
     }
};

mySwiper1();



function accountMenuShow() {
     var accountMenu = document.getElementById("accountMenu");
     if (accountMenu.className === "accountMenu") {
          accountMenu.className += " show-1";
     } else {
          accountMenu.className = "accountMenu";
     }
}
function accountMenuOff() {
     var accountMenu = document.getElementById("accountMenu");
     if (accountMenu.className === "accountMenu") {
          accountMenu.className += " off-1";
     } else {
          accountMenu.className = "accountMenu";
     }
}
function helpMenuShow() {
     var helpMenu = document.getElementById("help");
     if (helpMenu.className === "help") {
          helpMenu.className += " show-1";
     } else {
          helpMenu.className = "help";
     } 
}
function helpMenuOff() {
     var helpMenu = document.getElementById("help");
     if (helpMenu.className === "help") {
          helpMenu.className += " off-1";
     } else {
          helpMenu.className = "help";
     } 
}

function showMenu(){
    var menu1 = document.getElementById("menu-1");
    var menu2 = document.getElementById("menu-2");
    if (menu1.className === "header-nav-bar-item-1") {
         menu1.className += " show";
    } else {
         menu1.className = "header-nav-bar-item-1";
    }
    if (menu2.className === "header-nav-bar-item-2") {
        menu2.className += " show";
   } else {
        menu2.className = "header-nav-bar-item-2";
   }
}

function showMenuHelp() {
     var showMenuHelp = document.getElementById("help");
     if (showMenuHelp.className === "help") {
          showMenuHelp.className += " showMenuHelp";
     } else {
          showMenuHelp.className = "help";
     } 
}

function showMenuAccount() {
     var showMenuAccount = document.getElementById("accountMenu");
     if (showMenuAccount.className === "accountMenu") {
          showMenuAccount.className += " showMenuAccount";
     } else {
          showMenuAccount.className = "accountMenu";
     } 
}