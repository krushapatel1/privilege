var photo_container = ['images/culture.png','images/education.png','images/family.png','images/health.png','images/home.png','images/money.png'];

//var photo = document.createElement ('img');
//photo.src = photo_container[0];
//document.appendChild(photo);

console.log("jsss");


$("#pg2").hide();

$ ("#circle").click(function (){
  $("#circle").hide();
});

$ ("#btn").click(function (){
    $("#pg1").hide();
      $("#pg2").show();
  });