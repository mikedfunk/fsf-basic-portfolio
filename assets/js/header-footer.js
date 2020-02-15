$(function() {
  $("header").load("assets/common/header.html", function(response, status, xhr) {
    /* DEBUG:
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $("header").html(msg + xhr.status + " " + xhr.statusText);
    }
    */
  });
});

$(function() {
  $("footer").load("assets/common/footer.html", function(response, status, xhr) {
    /* DEBUG:
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $("header").html(msg + xhr.status + " " + xhr.statusText);
    }
    */
  });
});    