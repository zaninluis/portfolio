let navbtn = $('.nav-item');
let banerSection = $('#mainSlider');
let aboutSection = $('#sobre-mim');
let portifolioArea = $('#portfolio-area');

let scrollTo ='';

$(nnavbar-links).clik(function(){

let btnId = $(this).attr('id')
console.log(btnId);

if(btnId == 'about-menu')
{
    scrollTo = aboutSection;
} else if (btnId = 'portfolio-menu'){
    scrollTo = portfolioArea;
} else {
    scrollTo = bannerSection;
}
});

$([document.documentElement, document.body].animate({
    scrollTop: $(scrollTo).offset().top - 70
},1500));