<script>
	import Header from './components/Header.svelte';
	import Dashboard from './components/Dashboard.svelte';
	import Footer from './components/Footer.svelte';
	import Auth from './components/Auth.svelte';
	import Chart from './components/Chart.svelte';
	import History from './components/History.svelte';
	import LiveCard from './components/LiveCard.svelte';
	import LocationSelector from './components/LocationSelector.svelte';
	import { Map } from 'leaflet';
	import Tips from './components/Tips.svelte';
	import WaterQualityMap from './components/WaterQualityMap.svelte';
  </script>
  
  <Header />
  <Auth />
  <main>
	<Dashboard />
  </main>
  <Footer />
  
  <style>
	main {
	  padding: 20px;
	  max-width: 1200px;
	  margin: 0 auto;
	}
  </style>
  