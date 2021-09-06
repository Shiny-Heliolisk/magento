require([
   'jquery',
   'slick',
   'domReady!'
], function ($) {
   $(".slick-banner").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [

         {
            breakpoint: 950,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
   });
   $(".header-middle-r").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
   });
   $(".reason-to-buy-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [

         {
            breakpoint: 771,
            settings: {
               fade:true,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
        
      ]
   });
});

require(['jquery','accordion'], function ($) {
   if ($(window).width() < 850) {
      $(".sub-middle").accordion({
         "openedState": "active",
         "collapsible": true,
         "active": [2],
         "multipleCollapsible": true,
         "animate":{
            timing:"ease-out",
            duration:"500",
            delay:"1s"
         }
      });
   };
 });