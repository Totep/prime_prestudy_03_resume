$(document).ready(function() {
  var resume = $(".resume");
  $(resume).hide();
  
  $("button").click(function(e) {
      $(resume).slideToggle('slow');
      e.preventDefault();
      $("button").hide();
  });
});

