<script>
    export let history = [];
  </script>
  
  <div class="history">
    <h3>History</h3>
    {#if history.length > 0}
      <ul>
        {#each history as item}
          <li>
            {item.location}: pH {item.ph}, Pollutants {item.pollutants} ppm ({item.status})
          </li>
        {/each}
      </ul>
    {:else}
      <p>No history available yet.</p>
    {/if}
  </div>
  
  <style>
    .history {
      padding: 20px;
      margin-top: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #f7f7f7;
    }
  </style>
  