$(document).ready(function () {
    svg4everybody({});
    $('.filter-section__text-input').focus(function(elem){
    	$(this).next().addClass('visible');
    });
    $('.filter-section__text-input').focusout(function(elem){
    	$(this).next().removeClass('visible');
    });
    $('#category-toggle').click(function(){
    	$('#categories').addClass('slide-in');
    });
    $('#open-category-toggle').click(function(){
    	$('#categories').removeClass('slide-in');
    });
    
});