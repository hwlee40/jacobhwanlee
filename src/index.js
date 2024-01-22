window.onload = function() {




//PROJECT EXCLUDE
let windowwidth = $(document).width();

if (windowwidth > 600) {
    //BACK TO PROJECTS ARROW
    $( ".back-button" ).on( "mouseenter", function() {
        $('.back-arrow').css('opacity', '1');
        $(this).css('transform', 'translateX(23px)');
    } );
    $( ".back-button" ).on( "mouseleave", function() {
        $('.back-arrow').css('opacity', '0');
        $(this).css('transform', 'translateX(0px)');
    } );
        //Fade
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.back-button').css('opacity','1');
            }
            else {
                $('.back-button').css('opacity','0');
            }
        });

    //PROJECTS EXCLUDE
    $('.grid-1-2').on( "mouseenter", function() {
        $('.grid-1-1').css('opacity','.3')
    } );
    $('.grid-1-2').on( "mouseleave", function() {
        $('.grid-1-1').css('opacity','1')
    } );
    
    //1a, 1b
    $('.1a').on("mouseenter", function() {
        $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.1a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    $('.1b').on("mouseenter", function() {
        $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.1b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    //2a, 2b
    $('.2a').on("mouseenter", function() {
        $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.2a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    $('.2b').on("mouseenter", function() {
        $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.2b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    //3a, 3b
    $('.3a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.3a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    $('.3b').on("mouseenter", function() {
        $('.1a,.1b, .2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.3b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    //4a, 4b
    $('.4a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.4a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    $('.4b').on("mouseenter", function() {
        $('.1a,.1b, .2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.4b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    //5a, 5b
    $('.5a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.5a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    $('.5b').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b,.7a,.7b').css('opacity','.3');
    });
    $('.5b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    //6a, 6b
    $('.6a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.7a,.7b').css('opacity','.3');
    });
    $('.6a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    $('.6b').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.7a,.7b').css('opacity','.3');
    });
    $('.6b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    //7a, 7b
    $('.7a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
    });
    $('.7a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });
    $('.7b').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
    });
    $('.7b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b,.7a,.7b').css('opacity','1');
    });

    //PROJECT HOVER ARROWS

    $( ".project-block" ).on( "mouseenter", function() {
        $(this).children().eq(1).children().css('transform', 'translateX(0px)');
        $(this).find('.project-arrow').css('opacity', '1');
    } );
    $( ".project-block" ).on( "mouseleave", function() {
        $(this).children().eq(1).children().css('transform', 'translateX(-22px)');
        $(this).find('.project-arrow').css('opacity', '0');
    } );
} else {
    //BACK TO PROJECTS ARROW
    $( ".back-button" ).on( "mouseenter", function() {
        $('.back-arrow').css('opacity', '0');
        $(this).css('transform', 'translateX(0px)');
    } );
    $( ".back-button" ).on( "mouseleave", function() {
        $('.back-arrow').css('opacity', '0');
        $(this).css('transform', 'translateX(0px)');
    } );
        //Fade
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.back-button').css('opacity','1');
            }
            else {
                $('.back-button').css('opacity','0');
            }
        });
    
    //PROJECTS EXCLUDE
    $('.grid-1-2').on( "mouseenter", function() {
        $('.grid-1-1').css('opacity','1')
    } );
    $('.grid-1-2').on( "mouseleave", function() {
        $('.grid-1-1').css('opacity','1')
    } );
    
    //1a, 1b
    $('.1a').on("mouseenter", function() {
        $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.1a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.1b').on("mouseenter", function() {
        $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.1b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    //2a, 2b
    $('.2a').on("mouseenter", function() {
        $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.2a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.2b').on("mouseenter", function() {
        $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.2b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    //3a, 3b
    $('.3a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.3a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.3b').on("mouseenter", function() {
        $('.1a,.1b, .2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.3b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    //4a, 4b
    $('.4a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.4a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.4b').on("mouseenter", function() {
        $('.1a,.1b, .2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.4b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    //5a, 5b
    $('.5a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b').css('opacity','1');
    });
    $('.5a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.5b').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b').css('opacity','1');
    });
    $('.5b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    //6a, 6b
    $('.6a').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b').css('opacity','1');
    });
    $('.6a').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });
    $('.6b').on("mouseenter", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b').css('opacity','1');
    });
    $('.6b').on("mouseleave", function() {
        $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
    });

    //PROJECT HOVER ARROWS

    $( ".project-block" ).on( "mouseenter", function() {
        $(this).children().eq(1).children().css('transform', 'translateX(-22px)');
        $(this).find('.project-arrow').css('opacity', '0');
    } );
    $( ".project-block" ).on( "mouseleave", function() {
        $(this).children().eq(1).children().css('transform', 'translateX(-22px)');
        $(this).find('.project-arrow').css('opacity', '0');
    } );
}

$( window ).on( "resize", function() {
    windowwidth = $(document).width();
    if (windowwidth > 600) {
        //BACK TO PROJECTS ARROW
    $( ".back-button" ).on( "mouseenter", function() {
        $('.back-arrow').css('opacity', '1');
        $(this).css('transform', 'translateX(23px)');
    } );
    $( ".back-button" ).on( "mouseleave", function() {
        $('.back-arrow').css('opacity', '0');
        $(this).css('transform', 'translateX(0px)');
    } );
        //Fade
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.back-button').css('opacity','1');
            }
            else {
                $('.back-button').css('opacity','0');
            }
        });

        //PROJECTS EXCLUDE
        $('.grid-1-2').on( "mouseenter", function() {
            $('.grid-1-1').css('opacity','.3')
        } );
        $('.grid-1-2').on( "mouseleave", function() {
            $('.grid-1-1').css('opacity','1')
        } );
        
        //1a, 1b
        $('.1a').on("mouseenter", function() {
            $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.1a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.1b').on("mouseenter", function() {
            $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.1b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //2a, 2b
        $('.2a').on("mouseenter", function() {
            $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.2a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.2b').on("mouseenter", function() {
            $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.2b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //3a, 3b
        $('.3a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.3a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.3b').on("mouseenter", function() {
            $('.1a,.1b, .2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.3b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //4a, 4b
        $('.4a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.4a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.4b').on("mouseenter", function() {
            $('.1a,.1b, .2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b').css('opacity','.3');
        });
        $('.4b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //5a, 5b
        $('.5a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b').css('opacity','.3');
        });
        $('.5a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.5b').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b').css('opacity','.3');
        });
        $('.5b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //6a, 6b
        $('.6a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b').css('opacity','.3');
        });
        $('.6a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.6b').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b').css('opacity','.3');
        });
        $('.6b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //PROJECT HOVER ARROWS

    $( ".project-block" ).on( "mouseenter", function() {
        $(this).children().eq(1).children().css('transform', 'translateX(0px)');
        $(this).find('.project-arrow').css('opacity', '1');
    } );
    $( ".project-block" ).on( "mouseleave", function() {
        $(this).children().eq(1).children().css('transform', 'translateX(-22px)');
        $(this).find('.project-arrow').css('opacity', '0');
    } );
    } else {
        //BACK TO PROJECTS ARROW
    $( ".back-button" ).on( "mouseenter", function() {
        $('.back-arrow').css('opacity', '0');
        $(this).css('transform', 'translateX(0px)');
    } );
    $( ".back-button" ).on( "mouseleave", function() {
        $('.back-arrow').css('opacity', '0');
        $(this).css('transform', 'translateX(0px)');
    } );
        //Fade
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.back-button').css('opacity','1');
            }
            else {
                $('.back-button').css('opacity','0');
            }
        });

        //PROJECTS EXCLUDE
        $('.grid-1-2').on( "mouseenter", function() {
            $('.grid-1-1').css('opacity','1')
        } );
        $('.grid-1-2').on( "mouseleave", function() {
            $('.grid-1-1').css('opacity','1')
        } );
        
        //1a, 1b
        $('.1a').on("mouseenter", function() {
            $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.1a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.1b').on("mouseenter", function() {
            $('.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.1b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //2a, 2b
        $('.2a').on("mouseenter", function() {
            $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.2a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.2b').on("mouseenter", function() {
            $('.1a,.1b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.2b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //3a, 3b
        $('.3a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.3a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.3b').on("mouseenter", function() {
            $('.1a,.1b, .2a,.2b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.3b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //4a, 4b
        $('.4a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.4a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.4b').on("mouseenter", function() {
            $('.1a,.1b, .2a,.2b,.3a,.3b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.4b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //5a, 5b
        $('.5a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b').css('opacity','1');
        });
        $('.5a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.5b').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.6a,.6b').css('opacity','1');
        });
        $('.5b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        //6a, 6b
        $('.6a').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b').css('opacity','1');
        });
        $('.6a').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });
        $('.6b').on("mouseenter", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b').css('opacity','1');
        });
        $('.6b').on("mouseleave", function() {
            $('.1a,.1b,.2a,.2b,.3a,.3b,.4a,.4b,.5a,.5b,.6a,.6b').css('opacity','1');
        });

        //PROJECT HOVER ARROWS

        $( ".project-block" ).on( "mouseenter", function() {
            $(this).children().eq(1).children().css('transform', 'translateX(-22px)');
            $(this).find('.project-arrow').css('opacity', '0');
        } );
        $( ".project-block" ).on( "mouseleave", function() {
            $(this).children().eq(1).children().css('transform', 'translateX(-22px)');
            $(this).find('.project-arrow').css('opacity', '0');
        } );
    }
  } );





  //CLOCK
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

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

    //Clock
    startTime();

//ON LOAD CLOSING TAG
}