$(document).ready(function () {
  

  $('#brif-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Имя должно быть не менее 2 символов"),
        maxlength: "Максимальное число символов: 15"
      },
      phone: {
        required: "Укажите ваш телефон"
      },
      email: {
        required: "Введите корректный email",
        email: "Введите корректный email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $("#brif-form").serialize(),
        success: function (data) {
          $('input').val('');
        }
      });
    }
  });
  /*маска для телефона*/
  $('.phone').mask('+7 (999) 999-99-99');

  $('#offer-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Укажите ваше имя",
        minlength: jQuery.validator.format("Имя должно быть не менее 2 символов"),
        maxlength: "Максимальное число символов: 15"
      },
      phone: {
        required: "Укажите телефон"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $("#offer-form").serialize(),
        success: function (data) {
         
          $('input').val('');
        }
      });
    }
  });

  $('#modal-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15
      }
    },
    messages: {
      name: {
        required: "Укажите ваше имя",
        minlength: jQuery.validator.format("Имя должно быть не менее 2 символов"),
        maxlength: "Максимальное число символов: 15"
      },
      phone: {
        required: "Укажите телефон"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $("#modal-form").serialize(),
        success: function (data) {
        
          $('input').val('');
        }
      });
    }
  });
  
  document.querySelector(".brif__button").addEventListener('click', function() {
    swal({
      title: "Ваша заявка отправлена",
      confirmButtonColor: "#ffd200"
    });
  });

  document.querySelector(".modal__button").addEventListener('click', function () {
    swal({
      title: "Ваша заявка отправлена",
      confirmButtonColor: "#ffd200"
    });
  });

  document.querySelector(".offer__button").addEventListener('click', function () {
    swal({
      title: "Ваша заявка отправлена",
      confirmButtonColor: "#ffd200"
    });
  });

});






















// /*обработка и отправка формы через ajax*/

// $('#offer-form').on('submit', function (event) {
//   event.preventDefault();
//   $.ajax({
//     url: 'mail.php',
//     type: 'POST',
//     data: $(this).serialize(),
//     success: function (data) {
//       $('.success').html(data + ',ваша форма отправлена');
//     }
//   });
// });