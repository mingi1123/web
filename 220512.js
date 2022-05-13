let n = 0;

let repeat = setInterval(function() {
    
    n = Math.floor((Math.random()*3));

    if (n == 0)
        document.getElementById('rd').innerHTML = "✌️";
    else if (n == 1)
        document.getElementById('rd').innerHTML = "✊";
    else if (n == 2)
        document.getElementById('rd').innerHTML = "🖐";

},100);

function buttonclick(s){
    clearInterval(repeat);

    let com;
    let you;
    if (n == 0) com = "✌️";
    else if (n == 1) com = "✊";
    else if (n == 2) com = "🖐";

    if (s == 0) you = "✌️";
    else if (s == 1) you = "✊";
    else if (s == 2) you = "🖐";

    document.getElementById('stop').innerHTML = ("컴퓨터 : " + com + "당신 : " + you);

    if (s == 0){
        if(n == 0)
            document.getElementById('result').innerHTML = ("비겼습니다.");
        else if (n == 1)
            document.getElementById('result').innerHTML = ("졌습니다.");
        else if (n == 2)
            document.getElementById('result').innerHTML = ("이겼습니다.");
    }
    else if (s == 1){
        if(n == 0)
            document.getElementById('result').innerHTML = ("이겼습니다.");
        else if (n == 1)
            document.getElementById('result').innerHTML = ("비겼습니다.");
        else if (n == 2)
            document.getElementById('result').innerHTML = ("졌습니다.");
    }
    else if (s == 2){
        if(n == 0)
            document.getElementById('result').innerHTML = ("졌습니다.");
        else if (n == 1)
            document.getElementById('result').innerHTML = ("이겼습니다.");
        else if (n == 2)
            document.getElementById('result').innerHTML = ("비겼습니다.");
    }
}