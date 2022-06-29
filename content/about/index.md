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

Hi! I'm Tyler O'Brien, a developer located in the Upstate New York region. I'm currently interested in Cloudflare's ecosystem, including Workers, D1, Durable Objects, Workers Analytics Engine, and more. I've been a part of a few game server communities in the past, and have used C# and .NET's Ecosystem  extensively. I hope to learn languages like Rust in the future. I am currently aiming for a Bachelor's in CS, and already have my associates.

You can read more about some of my [Projects]({{< ref "/projects" >}} "My Projects"), and [blog posts]({{< ref "/posts" >}} "My Blog Posts").

[tobrien.me](https://tobrien.me) is hosted via [CouchDB Pages](https://github.com/Tyler-OBrien/CouchDB-Pages) on a cluster of virtual private servers from a few different providers. Routing is handled via [Anycast]({{< ref "/posts/2022/06/28/building-an-anycast-cdn" >}} "My Anycast Network"). Both DNS and HTTP is done on these machines, no third party providers.

The Anycast location you would hit is:

{{< requestLocation >}}


[tylerobrien.dev](https://tylerobrien.dev) is the same website, hosted on Cloudflare Pages. Using Cloudflare for DNS as well.

This website was build using [Hugo](https://gohugo.io/), and [Congo](https://git.io/hugo-congo), a Hugo theme.
