export async function fetchWaterQuality(location) {
    const response = await fetch(
      `https://www.waterqualitydata.us/Result/search?siteid=${location}&mimeType=json`
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    // Parse data to extract useful details
    return {
      ph: data?.result?.[0]?.value || "N/A",
      pollutants: Math.floor(Math.random() * 100), // Simulating pollutant data
      status: Math.random() > 0.5 ? "Safe" : "Unsafe", // Simulating status
    };
  }
  