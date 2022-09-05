---
title: "About"
description: "About this website"
showDate: false
showDateUpdated: false
showReadingTime: false
showTableOfContents: true
sharingLinks: false
layout: "simple"
summary: "About me"
date: 2022-06-28
---

Hi! I'm Tyler O'Brien, a developer located in the Upstate New York region. I'm currently interested in Cloudflare's ecosystem, including Workers, D1, Durable Objects, Workers Analytics Engine, and more. I've been a part of a few game server communities in the past, and have used C# and .NET's Ecosystem  extensively. I hope to learn languages like Rust in the future. I am currently studying for a Bachelor's in CS, and already have my associates.

You can read more about some of my [Projects]({{< ref "/projects" >}} "My Projects"), and [blog posts]({{< ref "/posts" >}} "My Blog Posts").

[tobrien.dev](https://tobrien.dev) is hosted via [CouchDB Pages](https://github.com/Tyler-OBrien/CouchDB-Pages) on a cluster of virtual private servers from a few different providers. Routing is handled via [Anycast]({{< ref "/posts/2022/06/28/building-an-anycast-cdn" >}} "My Anycast Network"). Both DNS and HTTP is done on these machines, no third party providers.

The Anycast location you would hit is:

{{< requestLocation >}}

[tylerobrien.dev](https://tylerobrien.dev) is the same website, hosted on Cloudflare Pages. Using Cloudflare for DNS as well.

This website was build using [Hugo](https://gohugo.io/), and [Congo](https://git.io/hugo-congo), a Hugo theme.

A list of my domains:

| Domain Name  | Use | Registrar | Host | Technologies | Notes |
| ----- | --------- | ----- | ---------- | ----------- | --------- |
| [tylerobrien.dev](https://tylerobrien.dev) | Main Personal Website | [Porkbun](https://porkbun.com/) | Cloudflare: [DNS](https://www.cloudflare.com/dns/) + [Pages](https://pages.cloudflare.com/) | [Hugo](https://gohugo.io/) + [Congo](https://git.io/hugo-congo) | [Source](https://github.com/Tyler-OBrien/personal_website)
| [tobrien.dev](https://tobrien.dev) | Self-Hosted Personal Website  | [Porkbun](https://porkbun.com/) | [Self-Hosted]({{< ref "/posts/2022/06/29/Building-A-Cloudflare-Pages-Clone" >}} "CouchDB Clone") on my [IP Space](({{< ref "/posts/2022/06/28/building-an-anycast-cdn" >}} "My Anycast Network") |  [Hugo](https://gohugo.io/) + [Congo](https://git.io/hugo-congo) | DNS: [PowerDNS](https://github.com/Tyler-OBrien/PowerDNS-Authoritative-CouchDB-Backend "Custom CouchDB PowerDNS Backend"), Webserver: [CouchDB Pages](https://github.com/Tyler-OBrien/CouchDB-Pages "CouchDB Pages, a Self-Hosted Cloudflare Pages Clone") |
| [tylerobrien.org](https://tylerobrien.org) | Personal Website Alt. | [Cloudflare](https://www.cloudflare.com/products/registrar/) | Cloudflare: [DNS](https://www.cloudflare.com/dns/) + [Pages](https://pages.cloudflare.com/) | [Hugo](https://gohugo.io/) + [Congo](https://git.io/hugo-congo) | 
| [tobrien.me](https://tobrien.me) | Email + Link Page | [Porkbun](https://porkbun.com/) | Bunny: [DNS](https://bunny.net/dns/) + [Storage](https://bunny.net/storage/) |  | Primary email domain
| [uncore.app](https://uncore.app) | Display scraped server data | [Porkbun](https://porkbun.com/) | Cloudflare [Pages](https://pages.cloudflare.com/) + [Tunnels](https://www.cloudflare.com/products/tunnel/) | [Next.js](https://nextjs.org/) - [MUI](https://mui.com/) | [Backend in C#](https://github.com/Tyler-OBrien/UncoreMetrics)
| [chaika.dev](https://chaika.dev) | Website for Testing | [Porkbun](https://porkbun.com/) | Cloudflare: [DNS](https://www.cloudflare.com/dns/) + [Pages](https://pages.cloudflare.com/) | [SvelteKit](https://kit.svelte.dev/) | Random Tests/Experiments
| [chaika.me](https://chaika.me) | Website for Testing | [Porkbun](https://porkbun.com/) | Cloudflare: [DNS](https://www.cloudflare.com/dns/) + [Pages](https://pages.cloudflare.com/) | [SvelteKit](https://kit.svelte.dev/) | Random Tests/Experiments
| [anexample.work](https://anexample.work) | Website for Testing | [Porkbun](https://porkbun.com/) | Cloudflare: [DNS](https://www.cloudflare.com/dns/) + [Workers](https://workers.cloudflare.com/) |  | Random Tests on Alt. CF Acct
| [wherecaniwatchanime.com](https://wherecaniwatchanime.com) | Long Abandoned | [Cloudflare](https://www.cloudflare.com/products/registrar/) | Cloudflare: [DNS](https://www.cloudflare.com/dns/) + [Pages](https://pages.cloudflare.com/) | [Gatsby](https://www.gatsbyjs.com/) | Indexable Pages for Anime Sites

Sleek Public Status Page I use for monitoring: https://status.tylerobrien.dev. Datadog also has a really nice student plan part of Github Student, which I use for APM, Host Monitoring and Synthetic Monitoring for DNS / HTTPS.

Email handled by [Fastmail](https://www.fastmail.com/). Some of the extra domains (tylerobrien.org, wherecaniwatchanime.com), have their inbound mail handled by [Cloudflare Email Routing](https://www.cloudflare.com/products/email-routing/)
