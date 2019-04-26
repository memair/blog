---
layout: post
title:  "Memair DNS"
author: memair
categories: [ Quantified Self, Experiments ]
tags: [ Experiments, Quantified Self ]
image: /assets/images/2019/04/foo.jpg
description: "Pseudorandomly block social media on 50% of days. Blocking occurs at the DNS level, affecting both social media websites & their apps."
featured: true
hidden: false
---

Deep work refers to studying for focused chunks of time without distractions such as email and social media. The term was coined by <a href="http://www.calnewport.com/" target="_blank">Cal Newport</a> and he wrote a <a href="http://www.calnewport.com/books/deep-work/" target="_blank">book</a> on the subject. Cal makes the interesting point that the cost of media usage is difficult to measure.

> Deep work is at a severe disadvantage in a technopoly because it builds on values like quality, craftsmanship, and mastery that are decidedly old-fashioned and nontechnological. Even worse, to support deep work often requires the rejection of much of what is new and high-tech. Deep work is exiled in favour of more distracting high-tech behaviours like the professional use of social media, not because the former is empirically inferior to the latter. Indeed, if we had hard metrics relating the impact of these behaviours on bottom line, our current technopoly would likely crumble.

We've created <a href="https://memair.com/dns" target="_blank">Memair DNS</a> to give you hard metrics on the impact of social media. Our free service is a DNS over HTTPS (DoH) server which pseudorandomly block social media on 50% of days. Click <a href="https://memair.com/dns#howitworks" target="_blank">here</a> for more information about how blocking occurs. Because blocking occurs at the DNS level, both social media websites & their apps are affected. Social media apps will still open, however they will not have connectivity which prevents new content, notifications, etc.

Use this tool to see how social media usage affects your sleep, physical activity, or happiness. Follow the <a href="https://memair.com/dns#setup" target="_blank">setup instructions</a> for your device.

In the coming weeks, we'll publish the results of experiments using Memair DNS. Please <a href="/contact" target="_blank">reach out</a> if you would like to contribute your experiments or experiences using the tool.

The currently blocked sites are:

 * Facebook
 * Imgur
 * Instagram
 * LinkedIn
 * MySpace
 * Pinterest
 * Reddit
 * Tumblr
 * Twitter

 Create a <a href="https://github.com/memair/dns/edit/master/block.list" target="_blank">Pull Request</a> if you would like to add additional sites or domains to the block list.
