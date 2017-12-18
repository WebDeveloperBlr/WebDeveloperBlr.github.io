function initMap(pos) {
        var mainpos = {lat: 53.8964106, lng: 27.5831561};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: pos||mainpos
        });
        var marker = new google.maps.Marker({
          position: pos||mainpos,
          map: map
        });
      }


$(document).ready(function () {
		$('.ion-location').eq(0).click(function(){
			var secpos = {lat: 50.8964106, lng: 20.5831561};
			initMap(secpos);
		});
		$('.ion-location').eq(1).click(function(){
			var secpos = {lat: 56.8964106, lng: 23.5831561};
			initMap(secpos);
		});
		$('.ion-location').eq(2).click(function(){
			var secpos =  {lat: 53.8964106, lng: 27.5831561};
			initMap(secpos);
		});

		$('.toggle>i').click(function(){
			var menu = $('.header-contact__right-col-wrapper');
			var toggle = $('.toggle>i');
			if(toggle.hasClass('ion-navicon-round')){
				menu.addClass('nav-responsive');
				toggle.removeClass('ion-navicon-round').addClass('ion-close-round');
			}else{
				menu.removeClass('nav-responsive');
				toggle.removeClass('ion-close-round').addClass('ion-navicon-round');
			}	
		});

		$( window ).resize(function() {
		  if($(window).width() > 700){
		  	if ($('.header-contact__right-col-wrapper').hasClass('nav-responsive')) {
		  		$('.header-contact__right-col-wrapper').removeClass('nav-responsive');
		  	}
		  }
		});

		


$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#popup',
		removalDelay: 500,

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
});


});