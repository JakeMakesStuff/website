---
layout: ../../layouts/BlogPostLayout.astro
title: "My first blog post on this site!"
description: "Hello World! This is my first blog post since changing my name!"
---

Hello World! I thought that I would now give the whole blogging thing a restart. After I came out, I kind of left my old blog to die (just as well really, it was a old Ghost instance) with my old name domain, and to be fair, you weren't missing out on much anyway since I didn't post there much. My old website that used to be on this domain was a huge complex bunch of PHP. It survived since 2017 in some form or another, going from being hosted on cPanel to being piped into a HTML file and uploaded to Cloudflare Workers.

After many changes to how Wrangler works, lots of fighting with random PHP issues, all sorts of random problems with trying to make a old codebase work, I decided it is time to totally refresh how it is written. To do so, I have moved from the old way of doing things to a way that is within the 2020s. I setup Astro! You will (or might not, honestly it isn't as noticable as you'd expect) notice that there is barely any JS on this site. Astro let me really deal with the small little server-side action I needed (the form, this was a hack of Cloudflare Workers before) but mostly remove all client-side code that I didn't need for this. I mostly was able to code with the same zen that Tailwind gave me for CSS, it was magnificent.

Anyway, expect more blog posts on here in the future. I haven't quite figured out how to get RSS working yet (I need to figure out how to glob whilst generating the feed), but I presume I will have this running fairly soon. This site is pretty founder mode to be honest.
