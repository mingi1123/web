let n = 0;

let repeat = setInterval(function() {
    
    n = Math.floor((Math.random()*3));

    if (n == 0)
        document.getElementById('rd').innerHTML = "βοΈ";
    else if (n == 1)
        document.getElementById('rd').innerHTML = "β";
    else if (n == 2)
        document.getElementById('rd').innerHTML = "π";

},100);

function buttonclick(s){
    clearInterval(repeat);

    let com;
    let you;
    if (n == 0) com = "βοΈ";
    else if (n == 1) com = "β";
    else if (n == 2) com = "π";

    if (s == 0) you = "βοΈ";
    else if (s == 1) you = "β";
    else if (s == 2) you = "π";

    document.getElementById('stop').innerHTML = ("μ»΄ν¨ν° : " + com + "λΉμ  : " + you);

    if (s == 0){
        if(n == 0)
            document.getElementById('result').innerHTML = ("λΉκ²Όμ΅λλ€.");
        else if (n == 1)
            document.getElementById('result').innerHTML = ("μ‘μ΅λλ€.");
        else if (n == 2)
            document.getElementById('result').innerHTML = ("μ΄κ²Όμ΅λλ€.");
    }
    else if (s == 1){
        if(n == 0)
            document.getElementById('result').innerHTML = ("μ΄κ²Όμ΅λλ€.");
        else if (n == 1)
            document.getElementById('result').innerHTML = ("λΉκ²Όμ΅λλ€.");
        else if (n == 2)
            document.getElementById('result').innerHTML = ("μ‘μ΅λλ€.");
    }
    else if (s == 2){
        if(n == 0)
            document.getElementById('result').innerHTML = ("μ‘μ΅λλ€.");
        else if (n == 1)
            document.getElementById('result').innerHTML = ("μ΄κ²Όμ΅λλ€.");
        else if (n == 2)
            document.getElementById('result').innerHTML = ("λΉκ²Όμ΅λλ€.");
    }
}
