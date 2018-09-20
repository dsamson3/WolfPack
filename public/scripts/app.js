

$(document).ready(function () {
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();
  $("#date").flatpickr({enableTime:true});
  // ajax call to add user to database
  $('#login-form').on('submit', function(e) {
    e.preventDefault();
    const email = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/admin',
      data: email
    }).done(() => {
      console.log('Login-form ajax call completed');
    });
  });
});

