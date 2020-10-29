/*Srart Global $, alert, console */
$(function()  {

        'use strict';
    // Adjusent Header Height 
    var myHeader = $('.header')

    myHeader.height($(window).height());
    $(window).resize(function () {


        myHeader.height($(window).height());


    })
    // Links Add Active Class
    $('.links li').click (function () {
        $(this).addClass('active').siblings().removeClass('active')

    })
    // Smooth scroll
    $('.links li a').click(function () {

        $('html, body').animate({

            scrollTop:$('#'+ $(this).data('value')).offset().top

        },1000);

    });
    var myHeader = $('.about')

    myHeader.height($(window).height());
    $(window).resize(function () {


        myHeader.height($(window).height());


    })
    
}) 
function myFunction() {
    alert("Thank You For Contact US");
  }



/* End Global $, alert, console **/  