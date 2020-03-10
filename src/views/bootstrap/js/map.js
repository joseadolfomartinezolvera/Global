var map = L.map('map').
    setView([21.168288, -100.931578],
        15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);
L.control.scale().addTo(map);
L.marker([21.168288, -100.930368], { draggable: true }).addTo(map);
L.marker([21.157477, -100.936121], { draggable: true }).addTo(map);
L.marker([21.160689, -100.933677], { draggable: true }).addTo(map);
L.marker([21.157228, -100.936637], { draggable: true }).addTo(map);