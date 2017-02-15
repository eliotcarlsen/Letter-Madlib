$(document).ready(function() {
  $(".letter").submit(function(event) {
    var userInput = $("#username").val();
    $(".nameOne").text(userInput);

    event.preventDefault();

  });
  $(".upperCase").submit(function(event) {
    var sentenceInput = $("#toUpperCase").val().toUpperCase();
    $(".upperResponse").text(sentenceInput);

    event.preventDefault();
  });
});
