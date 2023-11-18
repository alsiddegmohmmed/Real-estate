/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) {

        return header.classList.add('scroll-header');
        
    } else {
        return header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);
/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32, 
    grabCursor: true, 
    centeredSlides: true, 
    slidesPerview: 'auto',
    loop:true, 

    // im here start from 50.00 

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== VALUE ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
