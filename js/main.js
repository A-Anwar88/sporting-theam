
//preloader
$(window).on('load' ,function(){
    setTimeout(function(){
        $(".preloader").fadeOut('slow');
    },1500);
})




const newLocal = 60;
const newLocal_1 = 100;
$(document).ready(function(){

    //add scrollpy to <body>
    $('body').scrollspy({target:".navbar" ,offset:newLocal});

    $(".navbar a").on('click' , function(event){
        if(this.hash !==""){

            event.preventDefault();

            var hash = this.hash;

            $('html ,body').animate({

                scrollTop: $(hash).offset().top
            }, newLocal_1, function(){
             window.location.hash = hash ;
            
            });
            $(".navbar-collapse").collapse("hide");
        }
    });


    $('#product-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },1000:{
                items:4
            }
        }
    })
//testimonial carousel
    $('#testmonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },1000:{
                items:2
            }
        }
    })
});