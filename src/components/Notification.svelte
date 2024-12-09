<script>
    export let status = "Safe";
  </script>
  
  {#if status === "Unsafe"}
    <div class="notification">
      <p>⚠️ Water quality is unsafe. Take precautions immediately!</p>
    </div>
  {/if}
  
  <style>
    .notification {
      padding: 15px;
      background-color: #ffcccc;
      border: 1px solid #ff0000;
      color: #990000;
      font-weight: bold;
      margin: 10px 0;
      border-radius: 5px;
    }
  </style>
  