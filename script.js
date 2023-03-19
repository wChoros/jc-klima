var sm = window.matchMedia("(min-width: 1200px)")
var small = window.matchMedia("(max-width: 599px)")
var ifhid = true;
var ifres = false;
let plik = "";
let main = false;
addEventListener("resize",function()
{
    res();
    if(sm.matches)
    {
        document.getElementById("nav").style.display = "flex";
        ifres = true;
    }
    else
    {
        if(ifres)
        {
            if(ifhid)
            {
                hidemenu();
            }
            else
            {
                hidemenu()
                ifhid = true;
                burger.classList.toggle("change");
            }
            ifres = false;
        }
    }
});

function mainload()
{
    main = true;
}

function res()
{
    if(small.matches)
    {
        document.querySelector("footer img").src = "foto/general/footer/footerSmall.jpg"
        document.querySelector("map").innerHTML = "";

    }
    else
    {
        document.querySelector("footer img").src = "foto/general/footer/footerBig.jpg"
        document.querySelector("map").innerHTML = "<area shape=\"rect\" coords=\"330,25,503,77\" alt=\"Daikin\" href=\"www.daikin.pl/pl_pl/customers.html\" /> <area shape=\"rect\" coords=\"548,26,737,80\" alt=\"Gree\" href=\"https://gree.pl/\" /> <area shape=\"rect\" coords=\"781,19,1011,85\" alt=\"Fuji Elecric\" href=\"http://fujielectric.eu/\" /> <area shape=\"rect\" coords=\"1026,24,1161,169\" alt=\"Rotenso\" href=\"https://rotenso.com/pl/\" /> <area shape=\"rect\" coords=\"291,99,496,151\" alt=\"Toshiba\" href=\"https://www.toshiba.pl/\" /> <area shape=\"rect\" coords=\"514,92,661,163\" alt=\"Midea\" href=\"https:zymetric.pl/\" /> <area shape=\"rect\" coords=\"696,91,823,164\" alt=\"LG\" href=\"https://www.lg.com/pl\" /> <area shape=\"rect\" coords=\"840,92,1022,162\" alt=\"Pro-Vent\" href=\"https://www.pro-vent.pl/\" />"
    }


}

let numer = 0
var timer1 = 0; 
var timer2 = 0;

function setslide(nrslajdu)
{
    clearTimeout(timer1);
    clearTimeout(timer2);     
    hide()
    setTimeout("ZmienSlajd()", 500)
    numer = nrslajdu-1;
}
function hide()
{
    $("#slider").fadeOut(500);
}
function ZmienSlajd()
{
   numer++;
   if(numer>4) 
    {
        numer = 1;
    }
    plik = "<img src=\"foto/slider/"+numer+".jpg\">"
    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("ZmienSlajd()", 5000);
    timer2 = setTimeout("hide()",4500)
}

function hidemenu()
{
    document.getElementById("nav").style.display="none";
}
function showmenu()
{
    document.getElementById("nav").style.display="flex";
}


function myFunction(x) 
{
    x.classList.toggle("change");
}
function duringAnimation()
{
    if(sm.matches)
    {
        menu();
        burger.classList.toggle("change");
    }
}

function menu()
{
    if(document.getElementById("nav").style.display=="flex")
    {
        document.getElementById("nav").style.animationName="menuhide"
        ifhid = true;
        setTimeout("hidemenu(), duringAnimation()",980)
    }
    else
    {
        ifhid = false;
        document.getElementById("nav").style.animationName="menushow"
        showmenu()
    }
    
}








