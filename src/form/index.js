var validator = $("form").validate({
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      maxlength: 10,
      number: true
    }
  }
})

$("form").on('submit', function (e) {
  e.preventDefault();

  var result = validator.valid();
  $('.alert').addClass('hide');
  if (result) {
    $('.alert-success').toggleClass('hide');
  } else {
    $('.alert-danger').toggleClass('hide');
  }
})
