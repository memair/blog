---
layout: post
title:  "Introducing Create & Bulk Create GraphQL endpoints"
author: memair
categories: [ App ]
tags: [ GraphQL, Quantified Self ]
image: /assets/images/2018/09/bulk-graphql-mutation.png
description: "Import loads of data without having to wait"
featured: false
hidden: false
---

Memair has introduced two new GraphQL mutations for importing data.

Create

Creates up to 100 records per request. Records are created immediately.

Bulk Create

Creates up to 10,000 records per request. Records are created with a background process. The progress of which can be monitored using the Bulk Create Status endpoint.

Checkout the live [Jupyter Notebook](https://mybinder.org/v2/gh/memair/jupyter/master) examples using [Otto](https://docs.memair.com/#authenticationotto), the sandbox user's data or explore with your own data using [GraphiQL](https://memair.com/graphiql). Checkout the Document Explorer in [GraphiQL](https://memair.com/graphiql) for more details.