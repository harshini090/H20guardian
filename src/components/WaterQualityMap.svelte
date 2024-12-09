<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
  
    let map;
  
    onMount(() => {
      map = L.map('map').setView([40.7128, -74.006], 3); // Initial map center and zoom
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
  
      // Example marker
      L.marker([40.7128, -74.006])
        .addTo(map)
        .bindPopup('New York<br>pH: 7.5, Safe')
        .openPopup();
    });
  </script>
  
  <div id="map"></div>
  
  <style>
    #map {
      height: 400px;
      width: 100%;
      border-radius: 8px;
      margin: 20px 0;
    }
  </style>
  