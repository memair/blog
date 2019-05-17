---
layout: post
title: "International Travel Log"
author: greg
categories: [ Travel ]
tags: [ travel, quantified self ]
image: /assets/images/2019/05/passport.jpg
description: "Using data to create an international travel log"
featured: false
hidden: false
---

One of the requirements of the Canadian Citizenship application is a list of international travel for the last 5 years. Compiling that list manually is no easy task for frequent travellers. However the required data exists for most individuals with a smartphone.

Google Takeout was the source of my data which I imported it into Memair using the [Google Takeout importer](https://pypi.org/project/gtmem/). Memair assigned timezone data to the locations which made determining international travel easy.

Firstly, I confirmed my [physical presence requirements](https://github.com/memair/jupyter/blob/master/Canadian%20Citizenship%20Eligibility.ipynb) for Canadian Citizenship. Then, once I was eligible, I created an [International Travel Log](https://github.com/memair/jupyter/blob/master/International%20Travel%20Log.ipynb) using that same data. What could have easily taken me days to compile was accurately completed in minutes.

This same technique could be used for security clearance applications, visas, or just for fun. Reach out if you would like a hand setting this up.

Photo by [Kylie Anderson](https://unsplash.com/photos/aGDILBE1Kus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)