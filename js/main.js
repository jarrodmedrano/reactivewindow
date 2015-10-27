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