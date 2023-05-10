$(document).ready(function(){

  $('.slides .slide_body').slideUp(0);

  $('.slides .slide_head').on('click', function(){
    
    $(this).parent().siblings().removeClass('bordered')
    $(this).parent().siblings().children('.slide_head').removeClass('blue')
    $(this).parent().siblings().children('.slide_body').slideUp()
    $(this).parent().toggleClass('bordered')
    $(this).toggleClass('blue')
    $(this).siblings('.slide_body').slideToggle(300);

  })
  
  $('.header_nav li').last().on('click', function(){    

    $('.wrapper').toggleClass('relative')
    $(this).toggleClass('open')    
    $('header').toggleClass('fixed')

    var height1 = $('header').outerHeight()
    var height2 = $('.mobile_menu').outerHeight()


    if ($('header').hasClass('fixed')) {
      $('main').css('paddingTop', height1 +'px')
      $('.wrapper').css('maxHeight', height1 + height2 + 'px')
    }
    else{
      $('main').css('paddingTop', '0px')
      $('.wrapper').css('maxHeight', '100%')
    }

    $('.mobile_menu').css('top', height1 + 'px')
    $('.mobile_menu').fadeToggle()    

  })

  $('.slider2 .slide_body').slideUp(0);

  $('.slider2 .slide_head').on('click', function(){
    $(this).parent().siblings().children('.slide_head').removeClass('blue')
    $(this).parent().siblings().children('.slide_body').slideUp()
    $(this).toggleClass('blue')
    $(this).siblings('.slide_body').slideToggle(300);

  })

  
  $('.bdePB5').on('click', function(e){
      var text_ = $(this).siblings('.url_link').text()      
      navigator.clipboard.writeText(text_);
  })
  

})