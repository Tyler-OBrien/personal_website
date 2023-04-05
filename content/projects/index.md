---
title: "Projects"
description: "List of my projects"
showDate: false
showDateUpdated: false
showReadingTime: false
showTableOfContents: true
sharingLinks: false
layout: "simple"
summary: "My Projects"
date: 2022-06-28
---


### [Uncore Metrics](https://github.com/Tyler-OBrien/UncoreMetrics) |  [uncore.app](https://uncore.app)
Scan and store metrics on Servers for various Steam games, using the Steam Server Query Protocol. <br>
Using a custom server query library to use a single UDP Socket for each scan.<br>
Around 100 million server queries per day are made against 200k unique servers. All scan results stored in ClickHouse with no sampling.<br>

### [CouchDB Pages](https://github.com/Tyler-OBrien/CouchDB-Pages) | [tobrien.dev](https://tobrien.dev)
Self-hosted CouchDB version of Github/Cloudflare Pages <br>

### [PowerDNS Authoritative CouchDB Backend](https://github.com/Tyler-OBrien/PowerDNS-Authoritative-CouchDB-Backend) | [tobrien.dev](https://tobrien.dev)
A PowerDNS Authoritative Backend using CouchDB (intended for use with multiple regions, using CouchDB Replication) <br>


### [Cloudflare SuperSites](https://github.com/Tyler-OBrien/SuperSites) | [tylerobrien.dev](https://tylerobrien.dev)
Bundle up a static site, and distribute it across Cloudflare's range of products, including embedded in the Worker, KV, and R2! <br>


### [Workers Health Checks](https://github.com/Tyler-OBrien/workers-health-checks)
A fun example of a health checking service using Cloudflare's SQLite Database, D1, with Cloudflare Analytics Engine (AE). This uses CRON Workers to execute Durable Objects in specific regions (locationHints) to do health checks on websites, checking for various conditions including response code, and response body, and writing to Analytics Engine for visualization in Grafana. 


### [Folder Tunnels](https://github.com/Tyler-OBrien/Folder-Tunnels) | [folder-tunnels.projects.tylerobrien.dev](https://folder-tunnels.projects.tylerobrien.dev)
Live stream a directory, like Cloudflare Quick Tunnels but for Folders <br>

### [EasyShare](https://github.com/Tyler-OBrien/EasyShare-CF-Workers) | [easyshare.projects.tylerobrien.dev](https://easyshare.projects.tylerobrien.dev/)
Using Websockets with CF Workers and Durable Objects for end to end encryption of files or text <br>


### [Automatic Couchdb Replication using Ansible](https://github.com/Tyler-OBrien/automatic_couchdb_replication_ansible)
Automatically create and set up couchdb replication using Ansible <br>


### [Wireguard Mesh Network Ansible](https://github.com/Tyler-OBrien/wireguard-mesh-network-ansible)
Automatically create and set up a wireguard mesh network using Ansible <br>


### [Cloudflare Email Workers to Discord](https://github.com/Tyler-OBrien/cloudflare-worker-emails-to-discord)
Use Email Workers to forward the emails you receive to a discord webhook! This handles respecting Discord's various embed limits, trimming if necessary, and attaching email as an attachment.