---
layout: ../../layouts/BlogPostLayout.astro
title: "Welcome to Bluesky!"
description: "I have started being active on Bluesky and I love it! Here's how I integrated it with my website."
---

I joined Bluesky (well ok, I did in early 2023, but I've been way more active as of late)! As a social media platform, it is growing in size, and I think now is a very good time to join considering the deteroration of Twitter.

I've been thinking about ways to integrate it with my website for a while, and I finally got around to it. There are a few interesting challenges about this website:

- The website is fully static, and I have no plans to change that! SO anything that posts to Bluesky has to push to source control.
- Date management is handled by Git, so any logic will have to handle differences in that.
- I really want to keep this simple. Vercel is my deployment platform, and I don't want to have to use GitHub Actions for deploying to Vercel.
- I really do not want to manage users or moderation within the site itself. I want to be able to edit on a phone as needed.

## Keeping it simple

Since the main goal of this is to keep it simple, if it is too complicated to implement, it gets in the way of this blog. [Inspired by this post](https://www.menzel.it/post/2024/11/set-comments-experience-bluesky-posts/), I went ahead and implemented the following flow with GitHub Actions, Astro, and Bluesky:

- When a post is created, a GitHub Actions workflow is triggered. It goes through, finds all edited md files, and checks if they have a "bluesky" key in the frontmatter. If they do, the job is done here since the Bluesky post was already created.
- If the Bluesky post is not found, it will create the post on Bluesky. A object of type `{cid: string, uri: string}` is then put into the frontmatter of the post.
- If there are any changes, they are then pushed to source control. This means that the static site will have access to the Bluesky URI during the build.
- The Astro layout then checks for the bluesky object, and if it exists, renders both the `BlueskyComments` and `BlueskyInteractions` components. You can find them [open source here](https://github.com/IAmJSD/website/tree/cc33f3542d794362e7cf61ae702110ed908cde4f/src/components).
- A simple Astro action is used to act as a proxy to get the Bluesky post.

One downside of this is that it is async. Not everything is immediately available on the blog page, but it will generally settle within a couple of minutes, so I think this is an acceptable tradeoff.

## Other Bluesky stuff

Another thing I wrote for Bluesky is [Bluehook](https://bluehook.astrid.place)! This tool allows you to get a webhook delivered to you whenever a post event occurs that is within the filters you specify, allowing for serverless deployments of Bluesky apps. This works by connecting to the firehose from a Rust microservice and then delivering the events to you from that with a HTTP client. I am really trying to make a nice bot community around Bluesky, and this is a step in that direction! I think there is a lot of potential in this platform.

Overall, whilst this platform has its problems, I really love the platform so far and honestly I plan to deactivate my Twitter account! The community on Bluesky is way more active and friendly (as well as being blog friendly), and I think that is a great thing for the future of social media.
