$(function () {
  $('#zkf-btn-ofnav').click(function () {
    $(this).parent().animate({
      width: 0,
      opacity: 0
    }, 300)
  })
})