$(function(){
    $(".user-img").delay(500).animate({
        top:0
    },1500,'easeOutExpo');
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        afterLoad: function(anchorLink, index){
            switch (index) {
                case 1:
                    $(".user-img").delay(500).animate({
                        top:"0"
                    },1500,'easeOutExpo');
                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:

                    break;
            };
        },
        onLeave: function(index, direction){
            switch (index) {
                case 1:
                    $(".user-img").delay(500).animate({
                        top:"-3rem"
                    },1500,'easeOutExpo');
                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:

                    break;
            };

        }
    });
});
