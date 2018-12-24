$(document).ready(function(){

  $('.navbar-icon').click(function(){
    $(this).toggleClass('change');
    $('nav > ul').toggleClass('mh-slide');
  });

  $('li:has(ul)').children('a').append('<i></i>');
    
  $('li > a').each(function(){
    $(this).click(function(){
      $(this).next().toggleClass('mh-show');
      $(this).children().toggleClass('mh-up');
    });    
  });
});