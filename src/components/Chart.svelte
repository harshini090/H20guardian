<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let labels = [];
  export let data = [];
  export let label = "";

  let chartCanvas;
  let chartInstance;

  // Initialize chart
  onMount(() => {
    chartInstance = new Chart(chartCanvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            borderColor: "#007bff",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });

  // Update chart when props change
  afterUpdate(() => {
    if (chartInstance) {
      chartInstance.data.labels = labels;
      chartInstance.data.datasets[0].data = data;
      chartInstance.update();
    }
  });
</script>

<div class="chart-container">
  <canvas bind:this={chartCanvas}></canvas>
</div>

<style>
  .chart-container {
    width: 100%;
    height: 300px;
    position: relative;
    margin: 20px auto;
  }
</style>
