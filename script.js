var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//To show current time on page

var showcurrenttime = function(){

    //console.log("Heyunj ");
    var clk = document.getElementById('clock');
    var curtime = new Date();

    var hours = curtime.getHours();
    var mins = curtime.getMinutes();
    var secs = curtime.getSeconds();
    var meridian = "AM";

    if(hours >= noon)   meridian = "PM";
    
    if(hours > noon)    hours-=12;

    if(mins < 10 )  mins = "0"+mins;

    if(secs < 10 )  secs = "0"+secs;

    let finaltime = hours + ':' + mins +':'+secs+" "+meridian+"!";

    clk.innerText = finaltime;
};

var updateclock = function(){

    var t = new Date().getHours();
    var msgtoPrint;
    var img = "lolcatmain.PNG";

    var exacttimeJS = document.getElementById("exacttime");
    var lolcatimageJS = document.getElementById('lolcatimage');

    if(t == partytime){
        img = "party.PNG";
        msgtoPrint = "Let's Party !";
    }

    else if(t == wakeuptime){
        img = "wakeup.PNG";
        msgtoPrint = "Wake up !!";
    }
    else if(t == lunchtime ){
        img = "letsgetsomelunch.PNG";
        msgtoPrint = "Let's have some lunch !";
    }
    else if(t == naptime){
        img = "sleeptight.PNG";
        msgtoPrint = "Sleep tight !";
    }
    else if(t <= noon){
        img = "goodmorning.PNG";
        msgtoPrint = "Good Morning !";
    }
    else if(t >= evening){
        img = "goodevening.PNG";
        msgtoPrint = "Good Evening !";
    }
    else{
        img = "goodafternoon.PNG";
        msgtoPrint = "Good Afternoon !";
    }

    console.log(msgtoPrint);
    exacttimeJS.innerText = msgtoPrint;
    lolcatimage.src = img;

    showcurrenttime();
};

updateclock();

var onesec = 1000;
setInterval(updateclock,onesec);


//Working with party time button

var partybutton = document.getElementById("partytimebutton");

var partyEvent = function(){

    if(partytime < 0){
        partytime = new Date().getHours();
        partytimebutton.innerText = "Party Over !!";
        partytimebutton.style.backgroundColor = "#111";
    }
    else{
        partytime = -1;
        partytimebutton.innerText = "Party Time !!";
        partytimebutton.style.backgroundColor = "#0A8DAB";
    }
};

partytimebutton.addEventListener("click", partyEvent);
partyEvent(); 

//Wake up selector
let wakeupsele = document.getElementById("wakeuptimeselector");

let wakeupevent = function(){
    wakeuptime = wakeupsele.value;
};

wakeupsele.addEventListener("change",wakeupevent);

//lunch selector
let lunchsele = document.getElementById("lunchtimeselector");

let lunchevent = function(){
    lunchtime = lunchsele.value;
};

lunchsele.addEventListener("change",lunchevent);

//Nap selector
let napsele = document.getElementById("naptimeselector");

let napevent = function(){
    naptime = napsele.value;
};

napsele.addEventListener("change",napevent);

