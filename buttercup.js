 //declare some variables for pictures array and build it upon initialization
var actualNumberOfPictures = 24; //actual number of pictures in the directory
var numPics = actualNumberOfPictures- 1;  
var thePics = new Array();

    for(let c = 0;c<=numPics ; c++)
    {
        console.log("c is" + c);
        thePics[c] =`butter${c}.jpg`;
        console.log(thePics[4]);
    }
                

// put a random picture on screen upon initialization

/*var placeHolder = document.querySelector("img");
placeHolder.src = nuggetRandomizer();
placeHolder.style.maxwidth = '80vh';
placeHolder.style.maxHeight= '80vh';
console.log("placeholder width is " + placeHolder.width);
console.log("placeholder height is " + placeHolder.height);
*/
nextPic();
            
// call function that will loop repeatedly
drawBackLines();
console.log(Date.now())
butterTime();

//declare global variables for use in functions

var startTime;
var thirSec;
var i; 
            
//build functions that will run a picture randomizer and  

function butterTime(){
    console.log("MEEEEEEEEEH");
    startTime = Date.now();
    thirSec = setInterval(thritySecondChecker, 500);

                
}
function thritySecondChecker(){
    if((startTime + 5000) <=  Date.now()){
        clearInterval(thirSec);
        nextPic();
    }
}    
async function nextPic(){
    var locImg = document.querySelector("img");
    const imageLoadPromise = new Promise(resolve =>{
        console.log("here we are loading the image, this will always happen before the border is resized");
        //locImg = new Image();
        locImg.onload = resolve;
        locImg.src = nuggetRandomizer();
    });

    await imageLoadPromise;
    console.log("now we're going to resize the window, this will always happen after the image is loaded");
    console.log("window width is " + window.innerWidth);
    console.log("window height is " + window.innerHeight);
    let xx = Math.floor(window.innerWidth/1.8)+1;
    let yy = Math.floor(window.innerHeight/1.8)+1;
    console.log("width is " + xx);
    console.log("height is " + yy);
    if(locImg.width>locImg.height){
        locImg.style.maxWidth = `${xx}px`;
        console.log("width of picture is bigger and the width is " + locImg.width);
    }
    else{
        locImg.style.maxHeight= `${yy}px`;
        console.log("height of picture is bigger");
    }
    console.log("locImg width is " + locImg.width);
    console.log("locImg height is " + locImg.height);
    var butterTheCup = document.getElementById("buttercup");
    let xxx = Math.floor(locImg.width)-10;
    let yyy = Math.floor(locImg.height)-10;
    document.getElementById("buttercup").style.width = `${xxx}px`;
    document.getElementById("buttercup").style.height = `${yyy}px`;
    console.log(" the div width is " + document.getElementById("buttercup").clientWidth);
    console.log(" the div height is " + document.getElementById("buttercup").clientHeight);
    butterTime();
    
    
}
            
function nuggetRandomizer(){

    var x = Math.floor(Math.random() * (numPics +1));
    console.log("x is " + x);
    return thePics[x];
    }  

//GOING TO FIND OUT HOW MANY BACKGROUND LINES I NEED AND PUT THEM INTO THE HTML


function drawBackLines(){
    let windowHeight = window.innerHeight;
    console.log("we're in the function that draws the back lines.");
    let iV = windowHeight/97;
    console.log("the number of lines we can fit in the screen is " + iV);
    let iVV = Math.floor(iV)+1;
    console.log("iVV is " + iVV);
    for(i = 0;i<iVV+3;i++){
        //add background line to div
        document.getElementById("backgrounds").innerHTML+= "<div class = 'background'></div>";
    }
}

