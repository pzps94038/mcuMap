
var map = L.map('map', {
    // 設定經緯
    center: [24.98619,121.34216],
    // 設定縮放
    zoom: 17
});
// 更改icon
var blackIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png ',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
// 使用openstreetmapAPI
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// 加入圖標改icon及點擊顯示內容
L.marker([24.98307, 121.34184],{icon:blackIcon}).addTo(map).bindPopup('<a href="https://www.openstreetmap.org/directions?from=&to=24.98312%2C121.34186" style="text-decoration:none;font-size:15px;color:red">資訊大樓</a>');


