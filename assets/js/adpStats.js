const adpNodeInfo = document.getElementById("adpStats");
fetch("https://delay.cloudflare.chaika.me/v2/jobs/OverallAnalytics").then(data => data.json()).then(jsonParsed =>  {
    const data = jsonParsed.data;
    adpNodeInfo.innerHTML = `${formatNumber(data.normalJobPerLocationRunsLast24H + data.perfJobPerLocationRunsLast24H)} results from locations in last 24H |  ${data.uniqueJobs} Unique Jobs | ${data.uniqueLocations} Unique Monitoring Locations`;
})

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + ' Million';
  }

  if (num >= 1000) {
    return (num / 1000).toFixed(2) + ' Thousand';
  }

  return num.toString();
}