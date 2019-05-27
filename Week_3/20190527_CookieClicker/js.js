var cookie = document.getElementById("cookie");
var cookieCounter = document.getElementById("cookieCounter");
var upgrade1 = document.getElementById("upgrade1");
var upgrade1Cost = document.getElementById("upgrade1Cost");
var upgrade2 = document.getElementById("upgrade2");
var upgrade2Cost = document.getElementById("upgrade2Cost");
var upgradeAll = document.getElementById("upgradeAll");



var clickedCookies = 0;
var mult = 1;
var cAll = 0;
var increase = 1;

cookie.onclick = cookieClicked;
upgrade1.onclick = upgrade1Clicked;
upgrade2.onclick = upgrade2Clicked;
upgradeAll.onclick = upgradeAllClicked;


function increaser(){
    increase+=0.01;
}

function cookieClicked(){
    clickedCookies += mult;
    cookieCounter.innerHTML = clickedCookies;
}

function upgrade1Clicked(){
    var i = 10*increase;
    if (clickedCookies >= i){
        clickedCookies -= i;
        mult++;
        cookieCounter.innerHTML = clickedCookies;
    }
    else{

    }
    increaser();
    upgrade1Cost.innerHTML = "Cost "+i+" Cookies"
}

function upgrade2Clicked(){
    var i = 100*increase;
    if (clickedCookies >= i){
        clickedCookies -= i;
        mult+= 10;
        cookieCounter.innerHTML = clickedCookies;
    }
    else{

    }
    increaser();
    upgrade2Cost.innerHTML = "Cost "+i+" Cookies"
}

function upgradeAllClicked(){
    while (cAll == 0) {
        if (clickedCookies >= 100*increase){
            clickedCookies -= 100;
            mult+= 10;
            increaser();
        }
        else if (clickedCookies >= 10*increase){
            clickedCookies -= 10;
            mult++;
            increaser();
        }
        else{
            cAll = 1;
        }
    }
    cAll = 0;
    cookieCounter.innerHTML = clickedCookies;
    upgrade1Cost.innerHTML = "Cost "+i+" Cookies"
    upgrade2Cost.innerHTML = "Cost "+i+" Cookies"
}