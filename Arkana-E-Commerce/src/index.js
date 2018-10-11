import 'bootstrap';
import './scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code

$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
      $('.simplefilter li').removeClass('active');
      $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
      $(this).toggleClass('active');
  });
});
