---
title: Content Publication Schedule
description: Content publication schedule
img: pexels-pixabay-417171.png
img-alt: Generic image for schedule
---
SuttaCentral constantly updates its Dhamma content
with revisions and new translations.
These Dhamma updates are automatically published to EBT-sites
on the following schedule. All times are UTC.

### Current Time
<span id="page_utc" class="utc-time">...</span>

### Schedule
The following schedule is not a guarantee. 
Github Actions can be delayed for an hour or more significantly 
if no resources are available.

| UTC | Info |
| ---- | ---- |
| <span class="utc-time">03:00</span> | update [sc-voice/bilara-data](https://github.com/sc-voice/bilara-data) |
| <span class="utc-time">04:00</span> | update [suid-map.json](https://github.com/sc-voice/scv-bilara/blob/main/src/auto/suidmap.json) |
| <span class="utc-time">04:15</span> | update [scv-static](https://github.com/sc-voice/scv-static) |
| <span class="utc-time">04:30</span> | update [ebt-site](https://github.com/sc-voice/ebt-site) 🎉 |
| <span class="utc-time">11:00</span> | update [sc-voice/bilara-data](https://github.com/sc-voice/bilara-data) |
| <span class="utc-time">12:00</span> | update [suid-map.json](https://github.com/sc-voice/scv-bilara/blob/main/src/auto/suidmap.json) |
| <span class="utc-time">12:15</span> | update [scv-static](https://github.com/sc-voice/scv-static) |
| <span class="utc-time">12:30</span> | update [ebt-site](https://github.com/sc-voice/ebt-site) 🎉 |
| <span class="utc-time">19:00</span> | update [sc-voice/bilara-data](https://github.com/sc-voice/bilara-data) |
| <span class="utc-time">20:00</span> | update [suid-map.json](https://github.com/sc-voice/scv-bilara/blob/main/src/auto/suidmap.json) |
| <span class="utc-time">20:15</span> | update [scv-static](https://github.com/sc-voice/scv-static) |
| <span class="utc-time">20:30</span> | update [ebt-site](https://github.com/sc-voice/ebt-site) 🎉 |

### Details

* [sc-voice/bilara-data](https://github.com/sc-voice/bilara-data) stores the current snapshot of [suttacentral/bilara-data](https://github/suttacentral/bilara-data) as a fallback in the event of any SuttaCentral data restructuring.
* [suid-map.json](https://github.com/sc-voice/scv-bilara/blob/main/src/auto/suidmap.json) lists all published suttas and translations. New translations will not show up until this is updated.
* [scv-static](https://github.com/sc-voice/scv-static) updates example search, which is dependent on new or updated content.
* [ebt-site](https://github.com/sc-voice/ebt-site) is the main EBT website

<script>
  var updateTime = ()=>{
    let page_utc = document && document.getElementById('page_utc');
    if (page_utc) {
      let date = new Date();
      let utc = `${date.toLocaleTimeString('UTC').substring(0,5)} UTC`;
      page_utc.innerHTML = utc;
    }
  }
  setTimeout(updateTime, 1000);
  setInterval(updateTime, 20000);
</script>
<style>
.utc-time {
  font: Arial Black, Arial;
  font-size: larger;
  border: 1pt solid #888;
  border-radius: 0.25em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
</style>

