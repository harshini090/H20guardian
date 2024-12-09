<script>
    import { onMount } from 'svelte';
  
    export let value = 0; // Value to animate to
    let count = 0;
  
    onMount(() => {
      const interval = setInterval(() => {
        if (count < value) {
          count++;
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust speed of animation
    });
  </script>
  
  <div class="counter">
    <h3>{count}</h3>
    <p>Total Locations Checked</p>
  </div>
  
  <style>
    .counter {
      text-align: center;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      padding: 20px;
      margin: 10px;
      border-radius: 8px;
      transition: transform 0.3s;
    }
  
    .counter:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
  
    h3 {
      font-size: 2rem;
      color: var(--primary-color);
    }
  </style>
  