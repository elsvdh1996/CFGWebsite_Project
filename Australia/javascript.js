// $ (document).ready(function) ("btn btn-secondary dropdown-toggle") {
// $('.submit').on('click',function() {
// (myfunction()};
// function myfunction () {
//   document.getElementbyId ("dropdown").classList.toggle("show");
// }
// $(button).click(function) {
//   $("h1").toggle();
// });
// };

$(document).ready(function() { //LISTENING FOR WHEN IT IS READY

  $('h1').css('color', 'blue'); // CHANGE THE COLOUR OF THE H1

  $('.submit').click(function(event) { // ALERT WHEN THE BUTTON IS CLICKED
    alert('Your comment has been submitted');
  })

});
