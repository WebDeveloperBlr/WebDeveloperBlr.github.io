
$(document).ready(function () {

var header = "Разработка сайтов, лендингов, верстка";
var arrheader = header.split("");
var counter=0;

setTimeout(function(){
	loop = setInterval(function(){
			$('.header-border .h1').append(arrheader[counter]);
			if(counter=== arrheader.length){
				clearInterval(loop);
			}
			counter ++;
		},70);
},1900);

$(window).on('scroll',function(event){
	if($(window).scrollTop()>=$('.WhyMeSection').scrollTop()){
		$('.key-site-wrapper').addClass("flow");	
	}
	if($(window).scrollTop()>=$('.MyProjectsSection').scrollTop()+300){
		$('.outer-items-wrapper').addClass("rotate-plus");	
		$('.inner-items-wrapper').addClass("rotate-minus");	
	}
});
	





$('.inner-items-wrapper .item1 a, .inner-items-wrapper .item2 a').on('mouseenter',function(event){
	$('.plank-portfolio').addClass("plank-right");
});
$('.inner-items-wrapper .item1 a, .inner-items-wrapper .item2 a').on('mouseleave',function(event){
	$('.plank-portfolio').removeClass("plank-right");
});
$('.inner-items-wrapper .item4 a, .inner-items-wrapper .item3 a').on('mouseenter',function(event){
	$('.plank-portfolio').addClass("plank-left");
});
$('.inner-items-wrapper .item4 a, .inner-items-wrapper .item3 a').on('mouseleave',function(event){
	$('.plank-portfolio').removeClass("plank-left");
});




/// paralax 

	var mediaQuery = window.getComputedStyle(document.querySelector('.cd-background-wrapper'), '::before').getPropertyValue('content').replace(/"/g, ''),
		//define store some initial variables
		halfWindowH = $(window).height()*0.5,
		halfWindowW = $(window).width()*0.5,
		//define a max rotation value (X and Y axises)
		maxRotationY = 5,
		maxRotationX = 3,
		aspectRatio;



	//detect mouse movement
	$('.opacity-layer').on('mousemove', function(event){
		if( mediaQuery == 'web' && $('html').hasClass('preserve-3d') ) {
			window.requestAnimationFrame(function(){
				moveBackground(event);
			});
		}
	});








	function moveBackground(event) {
		var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
			rotateX = ((event.pageY-halfWindowH-$('.WhyMeSection').offset().top)/halfWindowH)*maxRotationX;


		if( rotateY > maxRotationY) rotateY = maxRotationY;
		if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
		if( rotateX > maxRotationX) rotateX = maxRotationX;
		if( rotateX < -maxRotationX ) rotateX = -maxRotationX;

				$('.cd-floating-background').css({
			'-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		});
	}
});


(function getPerspective(){
  var element = document.createElement('p'),
      html = document.getElementsByTagName('html')[0],
      body = document.getElementsByTagName('body')[0],
      propertys = {
        'webkitTransformStyle':'-webkit-transform-style',
        'MozTransformStyle':'-moz-transform-style',
        'msTransformStyle':'-ms-transform-style',
        'transformStyle':'transform-style'
      };

    body.insertBefore(element, null);

    for (var i in propertys) {
        if (element.style[i] !== undefined) {
            element.style[i] = "preserve-3d";
        }
    }

    var st = window.getComputedStyle(element, null),
        transform = st.getPropertyValue("-webkit-transform-style") ||
                    st.getPropertyValue("-moz-transform-style") ||
                    st.getPropertyValue("-ms-transform-style") ||
                    st.getPropertyValue("transform-style");

    if(transform!=='preserve-3d'){
      html.className += ' no-preserve-3d';
    } else {
    	html.className += ' preserve-3d';
    }
    document.body.removeChild(element);


})();
