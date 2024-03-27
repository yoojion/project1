var mapContainer = document.getElementById("map"),
  mapOption = {
    center: new kakao.maps.LatLng(37.26774, 126.9831),
    level: 3,
  };

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerPosition = new kakao.maps.LatLng(37.26774, 126.9831);

var marker = new kakao.maps.Marker({
  position: markerPosition,
});

marker.setMap(map);

var iwContent =
    '<div class="myMap">경기생활문화센터<br><a class="bt" href="http://map.kakao.com/link/to/경기생활문화센터,37.26774, 126.9831"target="_blank">오시는 길</a></div>',
  iwPosition = new kakao.maps.LatLng(37.26774, 126.9831);
var infowindow = new kakao.maps.InfoWindow({
  position: iwPosition,
  content: iwContent,
});

infowindow.open(map, marker);
