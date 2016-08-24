window.onload = function() {
    var div1 = document.getElementById('div1');
        div1.onmouseover = function(){
            startMove(5,100);
        }
        div2.onmouseout = function () {
            startMove(-5,-100);
        }
    };
    function startMove(speed,target) {
        var div2 = document.getElementById('div2');
        var timer = null;
        clearInterval(timer);
        timer = setInterval(function(){
            if (div2.offsetHeight == target ){
                clearInterval(timer);
            }else{
                div2.style.height = div2.offsetHeight + speed + 'px'
             }
            },30)
    };

