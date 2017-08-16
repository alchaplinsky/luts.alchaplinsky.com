var host = "luts.alchaplinsky.pro";
if ((host == window.location.host) && (window.location.protocol != "https:")){
  window.location.protocol = "https";
}

$(document).ready(function() {
  $(window).scroll(function() {
    if ($('body').scrollTop() > 0) {
      $('.header').addClass('sticked')
    } else {
      $('.header').removeClass('sticked')
    }
  })

  $('.carousele li').click(function(event) {
    var image = $('.preview img')
    $('.carousele li').removeClass('current')
    $(event.currentTarget).addClass('current')
    var src = $(event.currentTarget).find('img').attr('src')
    image.attr('src', src)
  })
  date = new Date()
  document.getElementById('copyright-year').innerText = date.getFullYear()
});
