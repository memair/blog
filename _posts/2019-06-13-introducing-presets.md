---
layout: post
title: "Presets"
author: memair
categories: [ Presets ]
tags: [ features, quantified self ]
image: /assets/images/2019/06/presets.png
description: "Introducing presets, shortcuts for manually collecting your data"
featured: false
hidden: false
---

[Presets](https://memair.com/presets) is a new feature that makes it easy to manually collect data. Presets are written in GraphQL and can accept variables. Explore Memair's GraphQL API with [GraphiQL](https://memair.com/graphiql).

### Example Presets

```
mutation {
  CreateMedication(
    medication_name: "Caffeine"
    dose: 100
    form: oral_liquid
  ) {
    id
  }
}
```

Creates a coffee buttons accessible on the home page of Memair.

![alt text](/assets/images/2019/06/coffee button.png "Coffee Button")

### Example Presets with Variables

Presets can accept variables of types DateTime, Int, Float, and Strings.

```
mutation(
  $happiness:Float!
  $contentment:Float!
) {
  happiness: CreateEmotion(
    type: happy
    intensity: $happiness
  )
  {
    id
  }
  contentment: CreateEmotion(
    type: content
    intensity: $contentment
  )
  {
    id
  }
}
```

When variables are present in the Preset users will be asked to input them when the Preset runs.

![alt text](/assets/images/2019/06/happiness.png "Happiness")

### Results

The Preset will return details of the execution including errors.

![alt text](/assets/images/2019/06/preset-executed.png "Preset executed")

