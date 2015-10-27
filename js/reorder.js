(function(){
    $(document).ready(function(){

        var popupbtn = $('#popup');
        var isOpen = "false";

        var winWidth = $(window).width();
        var banner1 = $('.banner-1');
        var banner2 = $('.banner-2');
        var banner3 = $('.banner-3');

        (function(){
            if (!window.opener) {
            } else {
                popupbtn.text('Close this window');
            }
        })();

        if(banner1.length && winWidth < 768) {
            reorder();
        }

        function reorder() {
            if(winWidth < 768) {
                banner1.insertAfter('.hero-cta');
            } else if(winWidth > 768) {
                banner1.insertAfter('.hero-cta');
            }
        }

        var resizeStream = Rx.Observable.fromEvent($(window), 'resize')
            .debounce(500);

        var resizeSub = resizeStream.subscribe(
            function (x) {
                if(banner1.length) {
                    reorder();
                }
            },
            function (err) {
                console.log('Error: ' + err);
            },
            function () {
                console.log('Completed');
            }
        );

        var clickSource = Rx.Observable.fromEvent(popupbtn, 'click');

        var clickSub = clickSource.subscribe(
            function (x) {
                checkWindow();
            },
            function (err) {
                console.log('Error: ' + err);
            },
            function () {
                console.log('Completed');
            });

        var checkWindow = function() {
            if (!window.opener) {
                var mywindow = window.open(window.location.href, '', 'scrollbars=0,height=400,width=400');
            } else {

                window.close();
            }
        }
    });
}());