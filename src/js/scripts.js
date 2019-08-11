/*обработка и отправка формы через ajax*/

$('#offer-form').on('submit', function(event){
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.success').html(data + ',ваша форма отправлена');
    }
  }); 
});