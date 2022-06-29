const nodeInfo = document.getElementById("nodeInfo");
fetch("https://ipv6.tobrien.me/cdn-cgi-alt/v1/trace-json").then(data => data.json()).then(data =>  {
    nodeInfo.innerHTML = `<h2>${data.machineId}</h2>
    <p>Geographic Location: ${data.geographicLocation}</p>
    <p>Closest Airport: ${data.location}</p>`;
})