// Navbar
$('.navbar-collapse a').click(function() {
  $('.navbar-collapse').collapse('hide');
});

var scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800,
});

$(window)
  .scroll(function() {
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('.nav-item a.active').removeClass('active');
        $('.nav-item a')
          .eq(i)
          .addClass('active');
      }
    });
  })
  .scroll();

// About
$('#jp-btn').click(function() {
  $('#en-btn').removeClass('active');
  $('#jp-btn').addClass('active');
  $('#jp_ver').removeClass('d-none');
  $('#en_ver').addClass('d-none');
});

$('#en-btn').click(function() {
  $('#jp-btn').removeClass('active');
  $('#en-btn').addClass('active');
  $('#en_ver').removeClass('d-none');
  $('#jp_ver').addClass('d-none');
});

// Experience
$('#jp-ex-btn').click(function() {
  $('#en-ex-btn').removeClass('active');
  $('#jp-ex-btn').addClass('active');
  $('#jp_ver-ex').removeClass('d-none');
  $('#en_ver-ex').addClass('d-none');
});

$('#en-ex-btn').click(function() {
  $('#jp-ex-btn').removeClass('active');
  $('#en-ex-btn').addClass('active');
  $('#en_ver-ex').removeClass('d-none');
  $('#jp_ver-ex').addClass('d-none');
});
