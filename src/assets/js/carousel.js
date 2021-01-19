setTimeout(function () {
    $(".owl-carousel").each(function(){
        $(this).owlCarousel({
          loop:true,
          margin:25,
          center:true,
          nav:false,
          autoplay:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
        });
      });   
    }, 1000);
