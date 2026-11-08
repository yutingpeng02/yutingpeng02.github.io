---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

My research interests include **multimodal perception, embodied AI, and human–robot interaction**. My projects explore generative augmentation, robust perception across viewpoints and sensing modalities, real-time feedback for sign language learning, and efficient heterogeneous GPU computing.

## Current direction

My current project, EASL, combines 3D pose-guided viewpoint control and pretrained diffusion models to synthesize diverse signing samples while preserving signing structure. Sparse keyframe synthesis outperforms full-video synthesis under matched generation budgets. Keypoint-guided token compression and learnable bottleneck-token fusion reduce cost while retaining complementary RGB–keypoint information.

I also built a controlled robustness benchmark comprising **9,575 videos across 67 variation types**, enabling systematic evaluation of failure modes under signer and contextual variations. My earlier work combines geometry-driven synthesis, multimodal fusion, and contrastive learning for view-invariant representations and efficient inference.

## Selected projects

{% assign research_projects = site.portfolio | sort: 'research_order' %}
{% for post in research_projects %}
  {% include archive-single.html %}
{% endfor %}
