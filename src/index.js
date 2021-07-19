// import './styles/main.scss'
import ScrollMagic from 'scrollmagic';

let viewportHeight;
let yPosition;
let heroHeight;
let control;

var intervalId = window.setInterval(function(){
    viewportHeight = window.innerHeight;
    heroHeight = document.getElementById("herocontainer").offsetHeight;
    yPosition = window.scrollY;
    console.log('current window position is at ' + yPosition);
    console.log('viewport height is ' + viewportHeight);
    console.log('hero is ' + heroHeight);

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
    } else if (control === 1) {
        document.getElementById("projecttitle").innerHTML = "AntiAnti";
        document.getElementById("projecttitle").style.color = "#FF375F";
        document.getElementById("projectdescription").innerHTML = "My summer internship as a graphic design inten at AntiAnti.";
        document.getElementById("tag1").innerHTML = "internship";
        document.getElementById("tag2").innerHTML = "collaborative";
        document.getElementById("tag3").innerHTML = "graphic design";
    } else if (control === 2) {
        document.getElementById("projecttitle").innerHTML = "Basedoff";
        document.getElementById("projecttitle").style.color = "#007AFF";
        document.getElementById("projectdescription").innerHTML = "Redesigning the research process for future ROKA enlistees.";
        document.getElementById("tag1").innerHTML = "uiux design";
        document.getElementById("tag2").innerHTML = "3D";
        document.getElementById("tag3").innerHTML = "prototyping";
    }


  }, 200);

