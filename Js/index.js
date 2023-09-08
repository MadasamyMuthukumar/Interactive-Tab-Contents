var content1=document.getElementById("content-1");
var content2=document.getElementById("content-2");
var content3=document.getElementById("content-3");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
function openHTMLpage(){
    content1.style.transform="translateX(0)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(100%)";
    btn1.style.color="cornflowerblue";
    btn2.style.color="#000";
    btn3.style.color="#000";
    content1.style.transitionDelay="0.5s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0s";
}
function openCSSpage(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(0)";
    content3.style.transform="translateX(100%)";
    btn2.style.color="cornflowerblue";
    btn1.style.color="#000";
    btn3.style.color="#000";
    content2.style.transitionDelay="0.5s";
    content1.style.transitionDelay="0s";
    content3.style.transitionDelay="0s";

}
function openJSpage(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(0)";
    btn3.style.color="cornflowerblue";
    btn1.style.color="#000";
    btn2.style.color="#000";
    content3.style.transitionDelay="0.5s";
    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0s";

}
// console.log(btn1);
// console.log(btn2);
// console.log(btn3);