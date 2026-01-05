---
title: "Why the Future of Space Depends on Better Code"
pubDate: 2024-09-14
description: "How I discovered that the biggest challenge in modern space isn't rocket science—it's software engineering"
author: "Anika Somaia"
image: { url: "/project4.jpg", alt: "Satellite constellation in orbit" }
claudePrompt: "Claude, give me the TLDR"
claudeSummary: "Here's a fun fact: launching stuff to space got 60x cheaper since 1981, but satellite software is still stuck in the stone age. We went from 3 fancy satellites to 4,000+ cheap ones, but operators still manually write command sequences EVERY DAY for EACH satellite. Anika's research uses eBPF (a Linux kernel trick) to let satellites run multiple customers' code safely—like Docker for space. The punchline? Space is becoming cloud computing with worse WiFi and no IT department."
---

When most people think about the hard problems in space, they imagine rocket engines, orbital mechanics, or keeping humans alive in the vacuum. But as I dove into satellite computing research, I discovered something surprising: one of the biggest bottlenecks isn't hardware—it's software that's stuck in the 1990s.

## When Hardware Evolves but Software Doesn't

It sounds backwards, doesn't it? In most of tech, we expect software to outpace hardware—Moore's Law slowing down while apps get bloated, that sort of thing. But my experience working on safety-critical software frameworks for autonomous satellite fleets at Columbia's Software Systems Lab flipped this script entirely.

Here's a number that blew my mind: launching cargo to space cost $88,500 per kilogram in 1981. Today, SpaceX's Falcon Heavy does it for $1,400. That's not just an improvement—it's a complete transformation of what's possible.

This cost collapse has triggered a quiet revolution. Instead of launching a few expensive, gold-plated satellites that orbit high above Earth (think GPS satellites), companies now deploy hundreds or thousands of cheap "SmallSats" in low Earth orbit. Planet Labs has over 150 satellites taking pictures of Earth every day. Starlink operates more than 4,000 satellites to beam internet around the globe.

But here's the kicker: while the hardware got radically cheaper and more numerous, the software is still designed for the old world. Current satellite operations require teams to manually write customized command sequences—literally lists of function calls—every single day for every satellite. After executing each sequence, the satellite sits idle until tomorrow's instructions arrive. This approach worked fine when you had three expensive satellites. It's completely unworkable when you have three thousand cheap ones.

## My Journey into Space Software

This problem fascinated me because it felt so familiar yet so alien. The challenges looked exactly like what cloud computing solved on Earth—managing huge fleets of diverse, unreliable computers running multiple customers' workloads. But space adds brutal constraints that make normal solutions impossible.

Think about it: these satellites are like the "worst possible" cloud computers. They're weak (limited power), diverse (different hardware generations launched at different times), and intermittently connected (they can only talk to ground stations for about 100 seconds per day). Plus, if something goes wrong, you can't exactly send a technician to fix it.

The more I researched, the more I realized that satellites were becoming the ultimate edge computing environment—and we needed completely new software architectures to handle it.

## The Multi-Tenant Space Economy

Here's where it gets really interesting: satellites are becoming shared infrastructure, just like cloud servers. Instead of every organization building their own satellite, companies are starting to "rent space" on others' satellites. Multiple customers share the same spacecraft, each running their own scientific instruments or communication equipment.

This is brilliant economics—sharing the massive costs of building, testing, and launching. But it creates the same fundamental challenge that drove the creation of virtual machines and containers on Earth: how do you safely run multiple customers' code on the same computer?

On Earth, we solve this with virtualization—each customer gets their own virtual machine. But satellites can't afford that overhead. Virtual machines are heavy, and these computers are already stretched thin. It's like trying to run multiple operating systems on a smartphone from 2010.

## Enter eBPF: The Unexpected Space Technology

My research led me to an unlikely solution: eBPF, a technology originally designed for the Linux kernel. Think of eBPF like having smart, programmable security guards embedded throughout a building. Instead of one guard at the front desk who has to run around everywhere, you have small, specialized guards at every important location who can make decisions locally.

eBPF lets you run small, verified programs safely inside a larger system. The key insight was that its properties—lightweight, safe, cross-platform—made it perfect for satellites. Here's why:

**Size matters**: When you can only upload 50 megabytes per day to a satellite, every byte counts. eBPF programs are tiny compared to traditional software updates.

**Safety first**: eBPF includes a "verifier" that mathematically proves programs won't crash, access forbidden memory, or run forever. In space, where you can't restart a crashed satellite, this guarantee is invaluable.

**One size fits all**: Satellites in the same constellation often use different computer chips. eBPF runs the same way on all of them, so you write software once instead of customizing it for every hardware variant.

## The Bigger Picture: Space as the New Cloud

What excites me most about this work isn't just solving today's satellite problems—it's recognizing that space is becoming the next frontier for distributed computing. Researchers are already proposing "space datacenters" that would process data from multiple satellites before beaming results back to Earth, reducing the bandwidth bottleneck.

We're witnessing the birth of a truly global, three-dimensional computing infrastructure. Satellites will increasingly coordinate with each other, processing data collaboratively as they pass over different regions. The programming models and system architectures we develop now will shape how humanity uses space for the next several decades.

## What This Taught Me

Working on this research fundamentally changed how I think about system design. It showed me that the most interesting problems often arise when you take familiar challenges and add extreme constraints. The principles of cloud computing aren't just about data centers—they're about managing complexity in any large-scale distributed system.

I also learned that the most impactful research often happens at the intersection of domains. By bringing systems thinking to space problems, we could envision solutions that pure space engineers might miss, while learning from space's unique constraints forced us to question assumptions about what "normal" computing looks like.

## Looking Up

As launch costs continue plummeting and satellite capabilities grow, I'm excited about the software challenges that lie ahead. How do we build programming languages for intermittently connected systems? What does debugging look like when your computers are orbiting at 17,000 mph? How do we ensure security when anyone can launch their own satellite?

The next time you use GPS, stream satellite internet, or see a real-time weather update, remember: there's a vast, distributed computer network floating above your head, and we're just beginning to unlock its potential. The sky isn't the limit anymore—it's the platform.

---

*This research was conducted as part of ongoing work on satellite computing systems. The full technical details are available in our paper ["Above the Clouds: New Software Challenges in Space Computing"](https://hotnets25.hotcrp.com/doc/hotnets25-paper142.pdf?cap=hcav142dbJcQUYfioxkLUtMxBWhEDhC)*

