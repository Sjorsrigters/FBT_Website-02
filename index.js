$('.showSingle').click(function () {
    if ($(this).hasClass("button-active")) {
      $('.targetDiv').hide();
      $('.showSingle').removeClass('button-active');
      $('#div1').show();
    } else {
      $('.targetDiv').hide();
      $('.showSingle').removeClass('button-active');
      $(this).addClass("button-active")
      $('#div' + $(this).attr('target')).show();
    }
});