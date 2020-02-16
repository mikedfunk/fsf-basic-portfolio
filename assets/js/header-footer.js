/******************************************************************************
FSWD:  Christopher B. Zenner
Date:  02/15/2020
File:  header-footer.js
Ver.:  0.1.0 20200215

This JS script renders the header and footer common to the three pages of the
site at http://icn2you.com/fsf-basic-portfolio.
******************************************************************************/

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