 $(document).keydown(function(event){
   var key = event.which;

   if(key == 13){
      call();
   }
 });

 function call(){
   var randomNumber1 = Math.floor(Math.random() * 6) + 1;
   var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
   
    var image1 = $(".img1");
   
    image1.attr("src", randomImageSource);

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

 var image2 = $(".img2");
 image2.attr("src", randomImageSource2);

 if(randomNumber1 > randomNumber2){
    $("h1").text("🚩 Player 1 Wins")
 }
 else if(randomNumber2 > randomNumber1){
    $("h1").text("Player 2 wins 🚩")
 }
 else{
$("h1").text("Draw!");
 }
}