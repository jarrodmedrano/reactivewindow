(function(){
    $(document).ready(function(){


        var banner1 = $('.banner-1');
        var banner2 = $('.banner-2');
        var banner3 = $('.banner-3');
        var hero = $('.hero-cta');

        function reorder() {
            var winWidth = $(window).width();
            var tabletWidth = 768;

            if(winWidth < tabletWidth) {
                banner1.insertAfter(hero);
                banner3.insertBefore(banner1);
            } else if(winWidth > tabletWidth) {
                banner1.prependTo(hero);
                banner3.insertAfter(banner2);
            }
        }

        reorder();

        var resizeStream = Rx.Observable.fromEvent($(window), 'resize')
            .debounce(500);

        var resizeSub = resizeStream.subscribe(
            function (x) {
                    reorder();
            },
            function (err) {
                console.log('Error: ' + err);
            },
            function () {
                console.log('Completed');
            }
        );

    });
}());