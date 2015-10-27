(function(){
    $(document).ready(function(){

        var block1 = $('#red-robot');
        var block2 = $('#blue-robot');

        if(block1.length && block2.length) {
            collision(block1, block2);
        }

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
                if(block1.length && block2.length) {
                    collision(block1, block2);
                }
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