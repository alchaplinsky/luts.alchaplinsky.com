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


  if($('.switcher').length !== 0) {
    var set = $('.switcher .current').data('set')
    $('.carousele li[data-set]').hide()
    $('.carousele li[data-set="'+set+'"]').show()

    $('.switcher span').click(function(event) {
      $('.switcher span').removeClass('current')
      $(event.currentTarget).addClass('current')
      var set = $(event.currentTarget).data('set')
      $('.carousele li[data-set]').hide()
      $('.carousele li[data-set="'+set+'"]').show()
    })

  }

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
