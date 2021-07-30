// import './styles/main.scss'
import ScrollMagic from 'scrollmagic';
import $ from "jquery";

let viewportHeight;
let yPosition;
let heroHeight;
let control;

$( document ).ready(function() {
    var intervalId = window.setInterval(function(){
        viewportHeight = window.innerHeight;
        heroHeight = document.getElementById("herocontainer").offsetHeight;
        yPosition = window.scrollY;
        // console.log('current window position is at ' + yPosition);
        // console.log('viewport height is ' + viewportHeight);
        // console.log('hero is ' + heroHeight);
    
        if (
            yPosition > heroHeight + viewportHeight * 2.1
        ) {
            control = 0;
        } else if (
            yPosition > heroHeight + viewportHeight * 0.8
        ) {
            control = 1;
        }
        else if (
            yPosition < heroHeight + viewportHeight * 0.8
        ) {
            control = 2;
        }
    
        if (control === 0) {
            document.getElementById("projecttitle").innerHTML = "Archive";
            document.getElementById("projecttitle").style.color = "#34C759";
            document.getElementById("projectdescription").innerHTML = "A collection of past works and smaller projects over the years.";
            document.getElementById("tag1").innerHTML = "uiux design";
            document.getElementById("tag2").innerHTML = "interaction design";
            document.getElementById("tag3").innerHTML = "motion";
            document.getElementById("griditemdescription1").href="./archive.html";
        } else if (control === 1) {
            document.getElementById("projecttitle").innerHTML = "AntiAnti";
            document.getElementById("projecttitle").style.color = "#FF375F";
            document.getElementById("projectdescription").innerHTML = "My summer internship as a graphic design inten at AntiAnti.";
            document.getElementById("tag1").innerHTML = "internship";
            document.getElementById("tag2").innerHTML = "collaborative";
            document.getElementById("tag3").innerHTML = "graphic design";
            document.getElementById("griditemdescription1").href="./antianti.html";
        } else if (control === 2) {
            document.getElementById("projecttitle").innerHTML = "Basedoff";
            document.getElementById("projecttitle").style.color = "#007AFF";
            document.getElementById("projectdescription").innerHTML = "Redesigning the research process for future ROKA enlistees.";
            document.getElementById("tag1").innerHTML = "uiux design";
            document.getElementById("tag2").innerHTML = "3D";
            document.getElementById("tag3").innerHTML = "prototyping";
            document.getElementById("griditemdescription1").href="./basedoff.html";
        }
    
    
      }, 200);
});



//Scroll Interactions
$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    //loop each .scroll
    $('.scroll').each(function(){
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(this, 'show')
        .addTo(controller);
    });

    //Scroll Down
    $("#clickresearch").click(function() {
        $('html,body').animate({
            scrollTop: $(".scrolltoresearch").offset().top},
            'slow');
    });
    $("#clickideation").click(function() {
        $('html,body').animate({
            scrollTop: $(".scrolltoideation").offset().top},
            'slow');
    });
    $("#clickfurtherresearch").click(function() {
        $('html,body').animate({
            scrollTop: $(".scrolltofurtherresearch").offset().top},
            'slow');
    });
    $("#clickwireframe").click(function() {
        $('html,body').animate({
            scrollTop: $(".scrolltowireframe").offset().top},
            'slow');
    });
    $("#clickvisualization").click(function() {
        $('html,body').animate({
            scrollTop: $(".scrolltovisualization").offset().top},
            'slow');
    });
    $("#clickprototype").click(function() {
        $('html,body').animate({
            scrollTop: $(".scrolltoprototype").offset().top},
            'slow');
    });
    $("#clickevaluation").click(function() {
        $('html,body').animate({
            scrollTop: $(".scrolltoevaluation").offset().top},
            'slow');
    });
    //Back to Top
    $(".backtotop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

