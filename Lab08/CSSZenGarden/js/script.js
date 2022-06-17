var intro=document.getElementById("zen-intro");
console.log(intro);
console.log(document.getElementById("zen-summary"));
console.log(document.getElementById("zen-supporting"));
var temp=document.getElementsByTagName("h1");
console.log(temp[0].innerHTML);

var h3s=document.getElementsByTagName("h3");
console.log(h3s[3].innerHTML); //array counts from 0

var Ps=document.getElementsByTagName("p");
console.log(Ps[3].innerHTML); //array counts from 0

let pinzenamble=document.getElementById("zen-preamble").getElementsByTagName("p")[0].innerHTML;
console.log(pinzenamble);

let designnames=document.getElementsByClassName("design-name");
console.log(designnames);

console.log(designnames[3].innerHTML);

var zenintroh1=document.getElementById("zen-intro").getElementsByTagName("h1");
zenintroh1[0].innerHTML="CSS PlayGround";

//zenintroh1 cover by design-archives.
document.getElementsByClassName("design-archives")[0].style.display="none";
zenintroh1[0].addEventListener("click",(e)=>{
    //this currently don't work as it's hidden below
    console.log("h1 event"+e);   
    e.target.innerHTML="CSS PlayGround222";
})

var zenintroh2=intro.getElementsByTagName("h2"); //intro already saved earlier

zenintroh2[0].innerHTML="CSS is Beautiful";
zenintroh2[0].addEventListener("click",(e)=>{
    //this currently don't work as it's hidden below
    console.log(e);   
    e.target.innerHTML="CSS is beautiful!";
})
