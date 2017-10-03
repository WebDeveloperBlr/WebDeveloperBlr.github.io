$(document).ready(function () {

    addActiveMenu('#firstSection');
    addActiveDot('#firstSection');
    //scroll to element
    function scrollTo(element){
      var destination = $(element).offset().top - 120;
      $('html').animate({ scrollTop: destination }, 1000);
      return false; 
    };

    //add .active to menu-link
    function addActiveMenu(element){
       $('.menu-link').each(function(item){
        if ($(this).attr('href')==element) {
          $('.menu-link').removeClass('active');
          $(this).addClass('active');
        }
      });
    };
    //add .active to nav-dots
    function addActiveDot(element){
       $('.dots a').each(function(item){
        $(this).removeClass('active');
        if ($(this).attr('href')==element) {
          $('.dots a').removeClass('active');
          $(this).addClass('active');
        }
      });
    };

    //scrolling
    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      var firstSection = $('#firstSection').height()-300;
      var secondSection = firstSection+$('#secondSection').height();
      var thirdSection = secondSection+$('#thirdSection').height();
      var fourthSection = thirdSection+$('#fourthSection').height();
      switch(true){
        case (scroll<firstSection):
          addActiveMenu('#firstSection');
          addActiveDot('#firstSection');
          break;
        case (scroll>firstSection && scroll<secondSection):
          addActiveMenu('#secondSection');
          addActiveDot('#secondSection');
          break;
         case (scroll>secondSection && scroll<thirdSection):
          addActiveMenu('#thirdSection');
          addActiveDot('#thirdSection');
          break;
        case (scroll>thirdSection && scroll<fourthSection):
          addActiveMenu('#fourthSection');
          addActiveDot('#fourthSection');
          break;
        case (scroll>fourthSection):
          addActiveMenu('#fifthSection');
          addActiveDot('#fifthSection');
          break;
      }
      return false;
    });
    
    //hamburger position
    $('.button.button-toggle').css('top',$('.header').height()/2-$('.button.button-toggle').height()/2);

    //arrow-up
    $(window).scroll(function(){
      if($(this).scrollTop()>500){
        $('.arrow-up').removeClass('fade-out').addClass('fade-in');
      }else
        $('.arrow-up').addClass('fade-out').removeClass('fade-in');
        return false;
    });

    //close popup
    $('#close').click(function(){
      $('.modal-wrapper').removeClass('fade-in').addClass('fade-out');
      return false;
    });

    //show popup
    $('.main-section__button').click(function(){
      $('.modal-wrapper').removeClass('fade-out').addClass('fade-in');
      return false;
    });

    //click - scroll
    $('.main-section__array-down, .arrow-up, .menu-link, .dots a').click(function(){
      var element = $(this).attr("href");
      scrollTo(element);
      return false;
    });

    //change flex-orientation on small screen
   var mql = window.matchMedia('screen and (max-width : 1024px)');
      if (mql.matches) {
          $('.menu-list').removeClass('flex-container flex-space-evenly').addClass('flex-column');
      } else {
          $('.menu-list').removeClass('flex-column').addClass('flex-container flex-space-evenly');
      }
    


//owl-carousel scripts
    var owl = $(".slider");
      owl.owlCarousel({
    	loop:true,
    	items:1,
    	itemClass: 'slide-wrap',
    	nav:true,
    	navText:'',
    	onDragged: onDragged
    });
   function onDragged(event){
   		console.log(owl.itemClass);
   }
   $('.next').click(function(){
   		owl.trigger('next.owl.carousel', 500);
   });
   $('.prev').click(function(){
   		owl.trigger('prev.owl.carousel', 500);
   });
   $('.owl-dot').click(function () {
  		owl.trigger('to.owl.carousel', [$(this).index(), 500]);
  		$('.dot-active').removeClass('dot-active');
  		$(this).addClass('dot-active');
  });
   $('.owl-dots').addClass('flex-container flex-center');


});