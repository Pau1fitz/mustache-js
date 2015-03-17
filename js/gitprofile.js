$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault(); //prevents link from following url

    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();
    console.log(template)

    var info = $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    }).fail(function() {
      $('.container').prepend("User not found")
    }).always(function() {
      $('input.username').val('');
      });
  });


});