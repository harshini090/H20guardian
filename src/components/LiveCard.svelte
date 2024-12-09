<script>
    export let title = "";
    export let value = "";
    export let unit = "";
    export let color = "#0077b6";
  </script>
  
  <div class="card" style="border-color: {color}">
    <h3>{title}</h3>
    <p><span>{value}</span> {unit}</p>
  </div>
  <div class="card fade-in">
    <!-- Content -->
  </div>
  
  <style>
    .card {
      display: inline-block;
      width: 200px;
      margin: 10px;
      padding: 20px;
      border: 3px solid;
      border-radius: 10px;
      text-align: center;
      background: #fff;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
  