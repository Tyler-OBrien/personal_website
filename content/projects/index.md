---
title: "Projects"
description: "List of my projects"
showDate: true
showDateUpdated: true
showReadingTime: false
showTableOfContents: true
sharingLinks: false
layout: "simple"
summary: "My Projects"
date: 2022-06-28
Lastmod: 2025-07-06
sitemap:
  changeFreq: monthly
---
### [Action Delay API](https://github.com/Tyler-OBrien/Action-Delay-API) |  [Current Status  - delay.chaika.me](https://delay.chaika.me/status/) 
#### {{< adpStats >}} 
Monitoring the delay of various Cloudflare Update Actions such as Deployed Workers being served updated on Edge, DNS Updates, Rule Updates and more. <br>
Monitoring from over 46+ locations to ensure the update is globally visible. <br>
10 Million+ DNS and HTTP Requests from all nodes per day to accurately monitor, with over 800k unique per location delay job results daily. <br><br>
Postgres stores the live status and Clickhouse stores all historical results with no sampling. We use NATS Request-Reply for the edge requests to the 46+ remote locations. Live Status Updating uses SignalR. We have three core nodes (Portland, Amsterdam, Singapore) setup primary-replica with Portland being the primary. All locations host the API, and all data is replicated in real time to replicas. All Cloudflare Jobs are orchestrated out of Portland, all Bunny Jobs are out of Amsterdam. We use Cloudflare Load Balancer and Bunny Smart Records to redirect all requests to the closest core region.<br><br>
*New* - Also monitoring Bunny, monitoring page hosted using Bunny Edge Scripts, Edge Storage and Smart Records for backend load balancing - https://delay.bunny.chaika.me/status<br>

### [Uncore Metrics](https://github.com/Tyler-OBrien/UncoreMetrics) |  [uncore.app](https://uncore.app)
#### {{< uncoreStats >}}
Scan and store metrics on Servers for various Steam games, using the Steam Server Query Protocol. <br>
Using a custom server query library to use a single UDP Socket for each scan.<br>
82 Billion scan results stored as of July 2025, using the Steam Master Server List to retrieve public servers to scan. <br> All scan results stored in ClickHouse with no sampling.<br>


### [CouchDB Pages](https://github.com/Tyler-OBrien/CouchDB-Pages) | [tobrien.dev](https://tobrien.dev)
Self-hosted CouchDB version of Github/Cloudflare Pages.<br>


### [Cloudflare SuperSites](https://github.com/Tyler-OBrien/SuperSites) | [tylerobrien.dev](https://tylerobrien.dev)
Bundle up a static site, and distribute it across Cloudflare's range of products, including embedded in the Worker, KV, and R2! Used to host tylerobrien.dev, with all the HTML embedded in the Worker, providing super low TTFB (>50ms) world-wide.  <br>


### [Workers Health Checks](https://github.com/Tyler-OBrien/workers-health-checks)
A fun example of a health checking service using Cloudflare's SQLite Database, D1, with Cloudflare Analytics Engine (AE). This uses CRON Workers to execute Durable Objects in specific regions (locationHints) to do health checks on websites, checking for various conditions including response code, and response body, and writing to Analytics Engine for visualization in Grafana. 


### [Folder Tunnels](https://github.com/Tyler-OBrien/Folder-Tunnels) | [folder-tunnels.projects.tylerobrien.dev](https://folder-tunnels.projects.tylerobrien.dev)
Live stream a directory, like Cloudflare Quick Tunnels but for Folders.<br>

### [EasyShare](https://github.com/Tyler-OBrien/EasyShare-CF-Workers) | [easyshare.projects.tylerobrien.dev](https://easyshare.projects.tylerobrien.dev/)
Using Websockets with CF Workers and Durable Objects for end to end encryption of files or text.<br>


### [Automatic Couchdb Replication using Ansible](https://github.com/Tyler-OBrien/automatic_couchdb_replication_ansible)
Automatically create and set up couchdb replication using Ansible.<br>


### [Wireguard Mesh Network Ansible](https://github.com/Tyler-OBrien/wireguard-mesh-network-ansible)
Automatically create and set up a wireguard mesh network using Ansible.<br>


### [Cloudflare Email Workers to Discord](https://github.com/Tyler-OBrien/cloudflare-worker-emails-to-discord)
Use Email Workers to forward the emails you receive to a discord webhook! This handles respecting Discord's various embed limits, trimming if necessary, and attaching email as an attachment.

## Archived Projects

### [PowerDNS Authoritative CouchDB Backend](https://github.com/Tyler-OBrien/PowerDNS-Authoritative-CouchDB-Backend) | [tobrien.dev](https://tobrien.dev)
A PowerDNS Authoritative Backend using CouchDB (intended for use with multiple regions, using CouchDB Replication). <br>