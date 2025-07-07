const uncoreStatsNodeInfo = document.getElementById("uncoreStats");
fetch("https://api.uncore.app/v2/servers/OverallAnalytics").then(data => data.json()).then(jsonParsed =>  {
    const data = jsonParsed.data;
    uncoreStatsNodeInfo.innerHTML = `${formatNumberUncore(data.serverAnalyticsLast24H)} Servers scanned in the last 24 hours, stored unsampled.`;
})

function formatNumberUncore(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + ' Million';
  }

  if (num >= 1000) {
    return (num / 1000).toFixed(2) + ' Thousand';
  }

  return num.toString();
}