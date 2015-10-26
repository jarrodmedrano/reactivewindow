(function(){
    $(document).ready(function(){

        var block1 = $('#red-robot');
        var block2 = $('#blue-robot');

        var popupbtn = $('#popup');
        var isOpen = "false";

        (function(){
            if (!window.opener) {
            } else {
                popupbtn.text('Close this window');
            }
        })();

        collision(block1,block2);

        function collision (el1, el2) {
            var el1Pos = {};
            var el2Pos = {};

            el1Pos.left = $(el1).offset().left;
            el1Pos.right = Number($(el1).offset().left) + Number($(el1).width());

            el2Pos.left = $(el2).offset().left;
            el2Pos.right = Number($(el2).offset().left) + Number($(el2).width());

            if (el1Pos.right > el2Pos.left && el1Pos.left < el2Pos.right) {
                $('#message').text('COLLIDED!');
            } else {
                $('#message').text('NOT COLLIDED!');
            }
        }

        var resizeStream = Rx.Observable.fromEvent($(window), 'resize')
            .debounce(500);

        var resizeSub = resizeStream.subscribe(
            function (x) {

                collision(block1,block2);
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
                var mywindow = window.open('index.html', '', 'scrollbars=0,height=400,width=400');
            } else {

                window.close();
            }
        }
    });
}());