<script>
    export let status = "Safe";
    let tips = {
      Safe: ["Drink tap water as usual.", "No special precautions needed."],
      Moderate: ["Consider using a water filter.", "Stay updated on water quality changes."],
      Unsafe: ["Boil water before use.", "Avoid direct consumption without treatment."],
    };
  </script>
  
  <div class="tips">
    <h3>Safety Tips</h3>
    <ul>
      {#each tips[status] as tip}
        <li>{tip}</li>
      {/each}
    </ul>
  </div>
  
  <style>
    .tips {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
  </style>
  