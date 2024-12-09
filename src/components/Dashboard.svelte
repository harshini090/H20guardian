<script>
  import LiveCard from './LiveCard.svelte';
  import Chart from './Chart.svelte';
  import LocationSelector from './LocationSelector.svelte';
  import Tips from './Tips.svelte';
  import History from './History.svelte';
  import Notification from './Notification.svelte';

  let waterData = null;
  let history = [];
  let selectedLocation = "New York";
  let graphData = [];
  let labels = [];

  // Simulate fetching water quality data based on location
  async function fetchWaterData(location) {
    try {
      // Mock API response
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            ph: Math.random() * (9 - 6) + 6,
            pollutants: Math.floor(Math.random() * 100),
            status: Math.random() > 0.5 ? "Safe" : "Unsafe",
            graph: {
              labels: ["Jan", "Feb", "Mar", "Apr"],
              data: [
                Math.random() * (9 - 6) + 6,
                Math.random() * (9 - 6) + 6,
                Math.random() * (9 - 6) + 6,
                Math.random() * (9 - 6) + 6,
              ],
            },
          });
        }, 1000)
      );
      return response;
    } catch (error) {
      console.error("Error fetching water data:", error);
    }
  }

  async function updateData() {
    if (!selectedLocation) return;

    const data = await fetchWaterData(selectedLocation);
    if (data) {
      waterData = data;
      graphData = data.graph.data;
      labels = data.graph.labels;

      // Check if the entry is already in the history
      const alreadyInHistory = history.some(
        (item) =>
          item.location === selectedLocation &&
          item.ph === data.ph &&
          item.pollutants === data.pollutants
      );

      if (!alreadyInHistory) {
        history = [
          ...history,
          {
            location: selectedLocation,
            ph: data.ph,
            pollutants: data.pollutants,
            status: data.status,
          },
        ];
      }
    }
  }

  // Trigger update when location changes
  $: if (selectedLocation) updateData();
</script>

<LocationSelector bind:selectedLocation />
{#if waterData}
  <Notification status={waterData.status} />
  <div class="metrics">
    <LiveCard title="pH Level" value={waterData.ph.toFixed(1)} unit="" color="#28a745" />
    <LiveCard title="Pollutants" value={waterData.pollutants} unit="ppm" color="#ffc107" />
    <LiveCard title="Status" value={waterData.status} unit="" color="#17a2b8" />
  </div>
  <Chart labels={labels} data={graphData} label="pH Levels Over Time" />
  <Tips status={waterData.status} />
{/if}
<History history={history} />

<style>
  .metrics {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
</style>
