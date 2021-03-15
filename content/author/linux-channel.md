---
title: Wiki Channels
description: Add/Delete/Update wiki channels
img: tux-linux.png
alt: Generic picture of tux-linux
category: github
order: 10001
---

## Channel Content
The wiki is organized 
as a two-level hierarchy grouped into content channel
folders under the `content` folder.

<pre>
content
content/wiki
content/author
content/news-en
content/sites
content/images
</pre>

The primary channel is the `wiki` folder.
Each markdown file in the primary channel is the index page
for that channel.

All the other folders in the `content` folder are secondary channels.
Each markdown file in a secondary channel is a leaf node in the 
two level wiki hierarchy.

## Channel Programming
The behavior of each channel is programmed using
the `pages` folder using Vue components.

</pre>
pages
pages/wiki
pages/wiki/_slug.vue
pages/wiki/index.vue
pages/author
pages/author/_slug.vue
pages/news
pages/news/_slug.vue
pages/sites
pages/sites/_slug.vue
...
</pre>

## Removing a Channel
To hide a channel, simply remove the channel file from the `content/wiki` folder.

To restore a channel, copy the original file
from [sc-voice/ebt-site](https://github.com/sc-voice/ebt-site/tree/main/content/wiki)
back into the `content/wiki` folder.

Commit and push your change to trigger a rebuild of your website.

## Add a Channel
To add a new channel called `tipitaka`:

<pre>
scripts/wiki-channel tipitaka
</pre>
