---
title: Linux Installation
description: Install EBT-Site development environment
img: tux-linux.png
alt: Generic picture of tux-linux
category: github
order: 10000
---

## Prerequisites

* [Learn Linux](https://linuxjourney.com/)
* Ubuntu 20 or Debian 10 
* Node v14


## Installation
Open a terminal window in your development folder.
<pre>
git clone git@github.com:sariputta/ebt-site
cd ebt-site
npm install
</pre>

## Development
Launch a local EBT website on port 3000:
<pre>
npm run dev
</pre>

All changes made to your EBT source will
be reflected immediately in the browser.

## Maintenance
To keep your local repository up-to-date, run
<pre>
git pull
npm install
</pre>

In order to avoid merge conflicts, it is recommended to update the repository before committing any local changes.


