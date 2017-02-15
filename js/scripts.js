$(document).ready(function() {
  $(".letter").submit(function(event) {
    var userInput = $("#username").val();
    $(".nameOne").text(userInput);










    event.preventDefault();

  });
});
