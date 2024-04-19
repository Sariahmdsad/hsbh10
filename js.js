let popok =document.getElementById("pbk")
let popoe =document.getElementById("pbe")
let popoz =document.getElementById("pbz")
let popo =document.getElementById("popo")
let vvv =prompt("وش اسماك")
let OOO =document.getElementById("greee")
let kb =document.getElementById("pb")
let op =document.getElementById("zvy")
let zoy=document.getElementById("zoy")
let zy =document.getElementById("zy")
let uu =document.getElementById("zz");
let oo =document.getElementById("kk");
let h1Text = document.getElementById("hhh");
OOO.innerText =vvv;
OOO.style.color ="white";
h1Text.innerText ="0";
h1Text.style.color = "white";
let bb = document.getElementById("sari");
bb.innerText ="+"
let nn = 0;
let vv = 0;
bb.addEventListener("click",bu);
function bu() {
++nn;
h1Text.innerText = nn;
h1Text.style.color = "white";
kb.innerText = nn*10;
popok.innerText = nn-10;
popoe.innerText = nn+10;
popoz.innerText = nn**10;
}
let xxx = nn*10;
oo.addEventListener("click",ju);
function ju() {
--nn;
h1Text.innerText = nn;
h1Text.style.color = " white";
kb.innerText = nn*10;
popok.innerText = nn-10;
popoe.innerText = nn+10;
popoz.innerText = nn**10;
  
}

uu.addEventListener("click",jju);
function jju() {
 alert(nn*10);


}

zy.addEventListener("click",jjiu);
function jjiu() {
  alert(nn-10);
}
zoy.addEventListener("click",jjiku);
function jjiku() {
  alert(nn**10);
}
zvy.addEventListener("click",jjikku);
function jjikku() {
  alert(nn+10);
}
popo.addEventListener("click",jv);
function jv() {
 alert(nn+10);
alert(nn-10)
alert(nn*10)
alert(nn**10)

}