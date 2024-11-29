function initMap() {
  const centerLocation = { lat: 53.441769, lng: -8.453751 };
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: centerLocation,
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const locations = [
      { lat: 53.426449, lng: -6.24991 },
      { lat: 51.925388, lng: -8.46995 },
      { lat: 51.83589, lng: -8.26343 },
  ];

  const markers = locations.map((location, i) => {
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length],
      });
  });

  // Ensure the correct MarkerClusterer library is used
  new MarkerClusterer(map, markers, {
      imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
