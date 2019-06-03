var cookie = document.getElementById("cookie");
var cookieCounter = document.getElementById("cookieCounter");
var passiveCounter = document.getElementById("passiveCounter");

var upgradeAll = document.getElementById("upgradeAll");

var clickedCookies = 10000;
var mult = 1;
var pMult = 0;
var cAll = 0;

/*upgradeAll.onclick = upgradeAllClicked;*/

cookie.onclick = cookieClicked;
function cookieClicked(){
    clickedCookies += mult;
    var intvalue = Math.round(clickedCookies);
    cookieCounter.innerHTML = intvalue;
    cookie.innerHTML = "Cookie "+mult;
}

var upgrade1 = document.getElementById("upgrade1");
var upgrade1Cost = document.getElementById("upgrade1Cost");
upgrade1.onclick = upgrade1Clicked;
var increaseB1 = 1;
function increaserB1(){
    increaseB1*=1.01;
}
function upgrade1Clicked(){
    var i = 10*increaseB1;
    if (clickedCookies >= i){
        clickedCookies -= i;
        mult++;
        var intvalue = Math.floor(clickedCookies);
        cookieCounter.innerHTML = intvalue;
        cookie.innerHTML = "Cookie "+mult;
        increaserB1();
    }
    else{

    }
    var intvalue = Math.round(i);
    upgrade1Cost.innerHTML = "Cost "+intvalue+" Cookies"
}


var upgrade2 = document.getElementById("upgrade2");
var upgrade2Cost = document.getElementById("upgrade2Cost");
upgrade2.onclick = upgrade2Clicked;
var increaseB2 = 1;
function increaserB2(){
    increaseB2*=1.05;
}
function upgrade2Clicked(){
    var i = 100*increaseB2;
    if (clickedCookies >= i){
        clickedCookies -= i;
        mult+= 10000000;
        var intvalue = Math.floor(clickedCookies);
        cookieCounter.innerHTML = intvalue;
        cookie.innerHTML = "Cookie "+mult
        increaserB2();
    }
    else{

    }
    var intvalue = Math.round(i);
    upgrade2Cost.innerHTML = "Cost "+intvalue+" Cookies"
}



setInterval(function(){
    clickedCookies += multP2;
    clickedCookies += multP1;

    var intvalue = Math.round(clickedCookies);
    var expnential = intvalue.toExponential();
    cookieCounter.innerHTML = expnential;

    var expnential2 = pMult.toExponential();
    passiveCounter.innerHTML = expnential2+" every seccond"
}, 1000)


var pUpgrade1 = document.getElementById("pUpgrade1");
var pUpgrade1Cost = document.getElementById("pUpgrade1Cost");
pUpgrade1.onclick = pUpgrade1Clicked;

var increaseP1 = 1;
var multP1 = 0;

function increaserP1(){
    increaseP1*=1.1;
}
function pUpgrade1Clicked(){
    var i = 1000*increaseP1;
    if (clickedCookies >= i){
        clickedCookies -= i;
        multP1+=10;
        var intvalue = Math.floor(clickedCookies);
        cookieCounter.innerHTML = intvalue;
        pMult+=10;
        increaserP1();
    }
    else{

    }
    var intvalue = Math.round(i);
    var expnential = intvalue.toExponential();
    pUpgrade1Cost.innerHTML = "Cost "+expnential+" Cookies"
    var expnential2 = pMult.toExponential();
    passiveCounter.innerHTML = expnential2+" every seccond"
}


var pUpgrade2 = document.getElementById("pUpgrade2");
var pUpgrade2Cost = document.getElementById("pUpgrade2Cost");
pUpgrade2.onclick = pUpgrade2Clicked;

var increaseP2 = 1;
var multP2 = 0;

function increaserP2(){
    increaseP2*=1.1;
}
function pUpgrade2Clicked(){
    var i = 10000*increaseP2;
    if (clickedCookies >= i){
        clickedCookies -= i;
        multP2+=1000;
        var intvalue = Math.floor(clickedCookies);
        cookieCounter.innerHTML = intvalue;
        pMult+=1000;
        increaserP2();
    }
    else{

    }
    var intvalue = Math.round(i);
    var expnential = intvalue.toExponential();
    pUpgrade2Cost.innerHTML = "Cost "+expnential+" Cookies"
    var expnential2 = pMult.toExponential();
    passiveCounter.innerHTML = expnential2+" every seccond"
}

/*
function upgradeAllClicked(){
    while (cAll == 0) {
        if (clickedCookies >= 100*increase){
            clickedCookies -= 100*increase;
            mult+= 10;
            increaser();
        }
        else if (clickedCookies >= 10*increase){
            clickedCookies -= 10*increase;
            mult++;
            increaser();
        }
        else{
            cAll = 1;
        }
    }
    cAll = 0;
    var intvalue = Math.round(clickedCookies);
    cookieCounter.innerHTML = intvalue;
    var intvalue1 = Math.floor(10*increase);
    var intvalue2 = Math.floor(100*increase);
    upgrade1Cost.innerHTML = "Cost "+intvalue1+" Cookies"
    upgrade2Cost.innerHTML = "Cost "+intvalue2+" Cookies"
    cookie.innerHTML = "Cookie "+mult
}
*/