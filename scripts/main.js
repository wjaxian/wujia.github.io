$(function() {
    $(".user-img").delay(500).animate({
        top: 0
    }, 1500, 'easeOutExpo');
    $(".user-message").find("p").delay(400).animate({
        marginLeft: "0.35rem"
    }, 1500, "easeOutExpo");


    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        afterLoad: function(anchorLink, index) {
            switch (index) {
                case 1:
                    $(".user-img").delay(300).animate({
                        top: "0"
                    }, 1500, 'easeOutExpo');
                    $(".user-message").find("p").delay(400).animate({
                        marginLeft: "0.35rem"
                    }, 1500, "easeOutExpo");
                    break;
                case 2:
                    $(".section2").find("h3").delay(300).animate({
                        left: "0"
                    }, 1500, "easeOutExpo");
                    $(".gzjl").delay(800).animate({
                        left: "0"
                    }, 1500, "easeOutExpo");
                    break;
                case 3:
                    $(".section3 h3").delay(300).animate({
                        left: "0"
                    }, 1500, "easeOutExpo");
                    $(".zyjn").delay(800).animate({
                        left: "0"
                    }, 1500, "easeOutExpo");
                    break;
                case 4:

                    break;
            };
        },
        onLeave: function(index, direction) {
            switch (index) {
                case 1:
                    $(".user-img").delay(300).animate({
                        top: "-3.5rem"
                    }, 1500, 'easeOutExpo');
                    $(".user-message").find("p").delay(400).animate({
                        marginLeft: "-100%"
                    }, 1500, "easeOutExpo");
                    break;
                case 2:
                    $(".section2").find("h3").delay(300).animate({
                        left: "100%"
                    }, 1500, "easeOutExpo");
                    $(".gzjl").delay(300).animate({
                        left: "100%"
                    }, 1500, "easeOutExpo");

                    break;
                case 3:
                    $(".section3 h3").delay(300).animate({
                        left: "-100%"
                    }, 1500, "easeOutExpo");
                    $(".zyjn").delay(800).animate({
                        left: "-100%"
                    }, 1500, "easeOutExpo");
                    break;
                case 4:

                    break;
            };

        }
    });
});