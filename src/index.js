window.onload = function() {



    //PAGE LOAD ANIMATIONS
        //Home
        $('.grid-landing-description').addClass("translate-on-load");
        $('.project-block').addClass("translate-on-load");
        //Projects
        $('.project-description-grid').addClass("translate-on-load");
        $('.project-content-grid').addClass("translate-on-load");


    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    // DESCRIPTION PADDING
    let height = $(".grid-landing-description").height();
    $(".grid-landing-projects").css("padding-top", height);
    
    window.onresize = function() {
    let resizedHeight = $(".grid-landing-description").height();
    $(".grid-landing-projects").css("padding-top", resizedHeight);
}

    // DESCRIPTION FADING
    let currentScroll;

    $(window).on('scroll', function() {
        currentScroll = $(document).scrollTop();
        if (currentScroll < 100){
            $(".grid-landing-description").css("opacity", "1");
        } else {
            $(".grid-landing-description").css("opacity", "0");
        }
        
    });

    //FOOTER INTERACTION
    $(".footer-grid").mouseenter(function(){
        $(".footer-name").css('transform', 'translateY(-15px)');
        $(".footer-name").css('opacity', '0');
        $(".footer-credit").css('transform', 'translateY(0px)');
        $(".footer-credit").css('opacity', '1');
      });
    $(".footer-grid").mouseleave(function(){
        $(".footer-name").css('transform', 'translateY(0px)');
        $(".footer-name").css('opacity', '1');
        $(".footer-credit").css('transform', 'translateY(15px)');
        $(".footer-credit").css('opacity', '0');
      });

    //   //PAGE LOAD FADE IN
    // $('body').css('display', 'none');
    // $('body').fadeIn(500);

    //BACK HOME
    $(window).on('scroll', function() {
        currentScroll = $(document).scrollTop();
        if (currentScroll < 50){
            $(".header-button").css("opacity", "0");
        } else {
            $(".header-button").css("opacity", "1");
        }
        
    });

    //COLLAPSIBLE
    var coll = document.getElementsByClassName("collapsible");
    var i;
    var rotation = 90;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            $('.fade-description').css('opacity', '0')
            setTimeout(
                function() 
                {
                    content.style.maxHeight = null;
                }, 300);
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            setTimeout(
                function() 
                {
                  $('.fade-description').css('opacity', '1')
                }, 300);
        
        } 
        //arrow
        rotation = rotation + 180;
        $('.arrow').css('transform', 'rotate(' + rotation + 'deg)')    
    });
    }

//ON LOAD CLOSING TAG
}