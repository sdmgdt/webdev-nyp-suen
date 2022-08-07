//errors caused when sharing script.jsg

//#homepageheader exists in index.html but not 
//#subtopic1header exists in subtopic1.html but not index.html 
//if both html sharing same script.js, there will be errors causing other parts of the script not running

//solutions

//a)need to check after every element obtained by document.querySelector to make sure not null before executing addeventlistener to it.


let homepageheader=document.querySelector("#homepageheader");
console.log("1:"+homepageheader);  //to show if null

if(homepageheader){ //add a check make sure it exists (not null)
    homepageheader.addEventListener("click",(e)=>{
        e.currentTarget.style.color="Green";
    });
}

//or b) check if it is running the html page containing the elements

var path = window.location.pathname; 
var page = path.split("/").pop();
console.log( page );
if(page=='subtopic1.html'){ //if it is the correct page
    let subtopic1header=document.querySelector("#subtopic1header");
    console.log("2:"+subtopic1header); //to show if null

    subtopic1header.addEventListener("click",(e)=>{
        e.currentTarget.style.color="Green";
    })
}

//c) use separate js files! 