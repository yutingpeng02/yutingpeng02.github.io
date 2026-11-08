---
title: "OneGraph: Cross-Architecture GPU Graph Computing"
excerpt: "A portable oneAPI framework for large-scale graph computation across heterogeneous GPUs."
collection: portfolio
date: 2024-04-01
research_order: 5
venue: "CCF Transactions on High Performance Computing"
---

**Sep 2022 – Apr 2024 · Nankai University · Tianjin, China**

OneGraph uses Intel oneAPI for large-scale graph computing beyond GPU memory capacity, enabling portable execution on NVIDIA, Intel, and AMD GPUs without source-code changes. Caching reusable graph data in a Static Region and overlapping on-demand transfers with GPU computation reduces CPU–GPU data transfer to **12.74% of the Unified Shared Memory baseline**.

**Result:** **32.62× average and 127.53× peak speedups** over serial CPU execution, averaging **3.3×** over state-of-the-art graph partitioning across BFS, CC, SSSP, and PageRank on graphs with up to **3.72 billion edges**.

[Paper](https://link.springer.com/article/10.1007/s42514-023-00172-w) · [Code](https://github.com/NKU-EmbeddedSystem/OneGraph)
