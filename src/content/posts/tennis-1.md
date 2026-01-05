---
title: "How Markov Chains and Recursion Decide Every Tennis Game"
pubDate: 2024-11-26
description: "Tennis scoring is secretly an elegant probability algorithm"
author: "Anika Somaia"
image: { url: "/blog1.jpg", alt: "Tennis court" }
claudeSummary: "You can win more points and still lose (happens 4.5% of the time!). Tennis scoring creates a 'magnification effect'—win 55% of points instead of 50%, and your game win rate jumps to 62%. Math is wild."
---

On a flight from London to San Francisco, I was drawing curves on my iPad—a bunch of them that all looked basically the same, showing how tennis probabilities work. The guy next to me glanced over and asked if I was working on some kind of betting algorithm. I explained I was just trying to understand why someone can win fewer points in tennis but still win the match. Turns out he was curious about it too.

## The Paradox That Started It All

Tennis has always fascinated me precisely because it defies our intuitions about winning and losing. Not every point in a tennis match ends up counting towards the overall result. It is possible for a player to win a match despite their opponent having won more points (or games) overall. The most famous example? John Isner defeated Nicolas Mahut at Wimbledon in 2010, despite Isner winning 478 points and Mahut winning 502.

This isn't just a quirky statistical anomaly—it happens about 4.5 percent of the time in professional tennis. That's roughly one game in every 22. As someone who plays tennis regularly, I'd witnessed this paradox firsthand but never understood the mathematics behind it.

## Breaking Down the Beautiful Complexity

The key insight comes from understanding how tennis scoring creates a hierarchical probability system. Unlike sports where every point counts equally toward the final score, tennis layers points into games, games into sets, and sets into matches. This creates what mathematicians call a "magnification effect."

Think of it like climbing a ladder where each rung gets exponentially harder to reach. A player who is just a little more likely to win every individual point is a lot more likely to win games (and sets, and the match). The exact formula reveals something remarkable: if you can win just 55% of your service points instead of 50%, your probability of winning that service game jumps from 50% to about 62%.

I spent hours working through the mathematics, using binomial distributions to model how point probabilities cascade into game probabilities. The analysis in Pratish Patel's work provided the perfect framework—treating each point as a Bernoulli trial (essentially a biased coin flip) and tracking the running sum until someone reaches four points.

## The Deuce Dilemma and Strategic Implications

The most mathematically beautiful part happens at deuce. Here, the scoring system creates a recursive probability situation: to win from deuce, you need to win two consecutive points, but any alternating pattern sends you back to deuce again. The probability of winning the game conditional on deuce is `20p⁵(1-p)³ / (1-2p(1-p))`, where p is your probability of winning each point.

This recursive structure means that small advantages in point-winning ability get amplified dramatically. A server who wins 60% of points has about a 73% chance of winning each service game. At 70%, that jumps to 90%. The magnification effect is so strong that it can overcome deficits in total points won.

## Why This Matters Beyond the Court

Understanding this mathematics completely changed how I see tennis strategy. The scoring system isn't just quirky tradition—it's actually brilliant at identifying the better player. Here's why: tennis rewards consistency over flashiness. A player who can maintain even a small edge on every point will almost always beat someone who alternates between amazing shots and unforced errors.

The current system does something that a simple "first to X points wins" format couldn't: it filters out randomness. Because you need to win multiple points in sequence to take a game, and multiple games to take a set, lucky streaks get smoothed out. The player who's genuinely better at tennis—more consistent, more strategic, more mentally tough—ends up winning even when they hit fewer spectacular winners.

This explains why tennis matches feel so dramatic. Every crucial point gets magnified by the scoring system. When I'm serving at 30-40, I'm not just trying to win one point—I'm fighting against mathematical forces that will amplify my success or failure across the entire game.

There's also something fascinating about how Wimbledon handles this differently for men and women, adjusting men's seedings based on grass court performance while using standard rankings for women. It suggests that even the tournament organizers recognize the mathematical complexity lurking beneath what looks like a simple sport.

Now when I'm down 0-40 on my serve, instead of panicking I actually get curious about whether I can dig out of what the math says is an 87% probability of losing the game.

---

*For my full derivations, calculations, and proofs, see: ["Winning probabilities and the tennis scoring system"](https://docs.google.com/document/d/e/2PACX-1vSIoGvWSjqmb_5Co7FAUvyYpalDAU8cdUmg1ie6VhD8BOtnZ8ro-R9TiXgVNf7iq2-G4FmXmUczZ5wo/pub).*
