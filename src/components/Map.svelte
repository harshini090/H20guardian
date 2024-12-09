<script>
    import { onMount } from "svelte";
    import L from "leaflet";
  
    export let locations = [];
    let map;
  
    onMount(() => {
      if (!map) {
        map = L.map("map").setView([40.7128, -74.006], 3);
  
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);
  
        locations.forEach((location) => {
          L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<b>${location.name}</b>`)
            .on("click", () => {
              const event = new CustomEvent("click", { detail: location });
              dispatchEvent(event);
            });
        });
      }
    });
  </script>
  
  <div id="map" class="map-container"></div>
  
  <style>
    .map-container {
      height: 400px; /* Ensures consistent map height */
      width: 100%;
      margin: 20px 0;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden; /* Prevents overflow issues */
    }
  </style>
  