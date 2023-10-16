$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.nav_links').toggleClass('active');
        $('body').toggleClass('lock');

    });
    $('.link').click(function(event){
        $('.burger,.nav_links').removeClass('active');
        $('body').removeClass('lock');
        
    });
});