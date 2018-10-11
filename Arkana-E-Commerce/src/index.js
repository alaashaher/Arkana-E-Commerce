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


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.045915,lng: 31.224290},
          zoom: 13
        });
        var tribeca = {lat: 30.045915,lng: 31.224290};
        var marker = new google.maps.Marker({
          position: tribeca,
          map: map,
          title: 'First Marker!'
        });
      }
