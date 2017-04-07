var myCenter=new google.maps.LatLng(-20.3035016,-40.3015194);
var mapCenter=new google.maps.LatLng(-20.303190, -40.301458);

function initialize()
{
var mapProp = {
  center:mapCenter,
  zoom:18,
  scrollwheel: false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<b>MINDTEC</b><br/>Rua Constante Sodré, nº 335<br/>Santa Lúcia - Vitória - ES<br/>CEP: 29.056-310<br/><br/><a href='http://www.google.com/maps/place/Mindtec/@-20.3037078,-40.3015755,20.5z/data=!4m12!1m6!3m5!1s0x0:0x114a5b644e5c8072!2sSicoob+Central+ES!8m2!3d-20.303625!4d-40.301413!3m4!1s0x0:0x17564a520f02cbaa!8m2!3d-20.303632!4d-40.301495?hl=pt-BR' target='_blank'>Visualize no Google Maps</a>"
  });

infowindow.open(map,marker);
marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);