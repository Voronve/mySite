$(document).ready(function(){
    $('.nav-link').click(function(){
        $('.nav-link').each(function(){
           $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
    
    
    
    
});