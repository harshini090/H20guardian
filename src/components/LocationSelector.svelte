<script>
  export let locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  export let selectedLocation;
</script>

<div class="location-selector">
  <label for="locations">Select Location:</label>
  <select id="locations" bind:value={selectedLocation}>
    <option value="" disabled>Select a location</option>
    {#each locations as location}
      <option value={location}>{location}</option>
    {/each}
  </select>
</div>

<style>
  .location-selector {
    margin: 20px 0;
  }
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
