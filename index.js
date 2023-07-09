var randonNumber1=Math.floor(Math.random()*4)+1;
var randomImage1 ="dice"+randonNumber1+".jpeg";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var randonNumber2=Math.floor(Math.random()*4)+1;
var randomImage2="dice"+randonNumber2+".jpeg";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

if(randonNumber1>randonNumber2){
  document.querySelector("h1").innerHTML=" 🚩 Player 2 wins!";
}
else if(randonNumber2>randonNumber1){
  document.querySelector("h1").innerHTML="Player 1 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
