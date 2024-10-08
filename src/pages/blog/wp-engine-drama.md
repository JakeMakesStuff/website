---
layout: ../../layouts/BlogPostLayout.astro
title: "Why Automattic is actively hurting their ecosystem"
description: "WordPress is important. You can't play chicken with the security of millions of sites consequence free."
date: "8 Oct 2024 21:30 UTC"
---

WordPress is an incredibly important bit of software. They power millions of websites, everything from the White House to your average cooking website is powered by it. Alongside this userbase, there are plenty of people that don't want to manage running their own websites. This is totally understandable, some people just want to get on with running their business. To deal with this, a cottage industry of agencies that en masse manage hundreds if not thousands of WordPress sites popped up. In my opinion, the way Automattic is handling a quite valid complaint against WP Engine threatens the livelihood of all Automattic employees and people that supply plugins for this industry.

## Background

WP Engine is a WordPress hosting company created in 2010 and with seemingly little objection from anybody at WordPress, even allowing them to sponsor various events within the ecosystem ran by the WordPress foundation (which the CEO of Automattic, Matt, also runs).

Since their inception, WP Engine exploded in popularity, with millions of active customers. Due to the nature of how simple WordPress is, a lot of these customers are done through agencies. These agencies have loads of clients, so moving WordPress hosts is not as simple as packing up their data and copying to another host.

The spark to start everything was related to a quite valid complaint about the WP Engine team. They weren't contributing enough for their scale. And by all accounts, they were contributing a miniscule amount of their profits to the mission of improving WordPress. I can actually get behind this critique. Open source doesn't come out of thin air, and as someone who has done a lot of open source in my life, there is a mentally draining amount of feature requests to a lot of projects with very little in the way of funding to actually be able to contribute to it. WP Engine should give more than the measly (for their scale) under $100k they were giving back.

It is worth noting that WP Engine have made several important open source projects that are used by the community, and this should be commended and count as contributions to the ecosystem. Who knows if people would have stayed in the eoosystem if it wasn't for these plugins after all?

However, Matt's nuclear reaction to this whole situation is what I am going to focus on. Instead of calling them out over time like a responsible steward of the project, he decided to use the WordPress trademark as a battering ram by [sending a cease and desist letter to WP Engine](https://automattic.com/2024/wp-engine-cease-and-desist.pdf). This is a genuinely terrifying thing for a project like WordPress to do, and likely scared the dozens of hosts using WordPress. The reasoning for this letter being that they did not pay a licensing fee that was not initially agreed and that Matt later admitted no other site was paying the same for. This likely did not serve to qwell hosting providers or website development agencies fears.

## Active hostility

Around this time, WordPress under Matt's leadership killed access for WP Engine to the WordPress update servers. They did later reinstate it for a few days, but this made it very difficult for WP Engine to conduct their business or for their customers to be able to patch their plugins. Whilst it didn't matter too much for a few days, the concern in the WordPress community was that this was going to go on for a lot longer. This got a lot of agencies nervous, with a lot of them planning a move off of WordPress. Since they do not need to worry much about customer customisations and rather are concerned about in-house customisations, they are fine to move services once they have the migrations figured out, and the short term pain of doing so outweighs the long term pain of instability on a platform they cannot afford to have a lot of support tickets due to problems with over time. This is what made WordPress so great for a lot of people for such a long time, and why in the end so many are now looking to move away.

After this happened, Matt decided to take it as an opportunity to go after anyone in testomonials for WP Engine:

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<div class="w-full flex justify-center">
    <blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Hey <a href="https://twitter.com/mcuban?ref_src=twsrc%5Etfw">@mcuban</a>, have you been following all the scammy stuff <a href="https://twitter.com/wpengine?ref_src=twsrc%5Etfw">@wpengine</a> and <a href="https://twitter.com/LeeEWittlinger?ref_src=twsrc%5Etfw">@LeeEWittlinger</a> have been doing? They’re now trying to use you as a customer to burnish their image. Happy to migrate your sites, it’ll take a few hours. We’ll match whatever they were charging you.</p>&mdash; Matt Mullenweg (@photomatt) <a href="https://twitter.com/photomatt/status/1841283504799133800?ref_src=twsrc%5Etfw">October 2, 2024</a></blockquote>
</div>

So we now have a CEO of a non-profit foundation and for-profit company that is in charge of the trademark and is actively out for blood. After actively threatening the CEO of WP Engine if they do not resign and join Automattic, Matt decides to take his rampage against them one step further.

## Irresponsible disclosure

Responsible disclosure is a corner stone of cyber security. When a company finds a vulnerability, the expected action is that the company does not weaponise it for a commercial gain. Google Project Zero is a fantastic example of this. When they find a security vulnerability in a competitors product (even one they are in active litigation with!), they quietly disclose the vulnerability, let them deal with the problem, help them push patches where needed, and then after all of that post about the vulnerability. Most importantly, we don't use it as an attack because humans make mistakes, and it isn't a competitive advantage when your service probably has subtle security vulenerabilities too. It is rare for code to be perfect.

Automattic decided they didn't want to bother with any of this boring stuff and decided they would do it their own way. Firstly, Matt makes this ominous tweet:

<div class="w-full flex justify-center">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">What are the best alternatives to Advanced Custom Fields <a href="https://twitter.com/wp_acf?ref_src=twsrc%5Etfw">@wp_acf</a> for people who want to switch away? Is there an easy way to migrate?<br><br>I suspect there are going to be millions of sites moving away from it in the coming weeks.</p>&mdash; Matt Mullenweg (@photomatt) <a href="https://twitter.com/photomatt/status/1842500184825090060?ref_src=twsrc%5Etfw">October 5, 2024</a></blockquote>
</div>

To be clear, this is a disgusting tweet trying to compete against your own ecosystem. Whilst the vulnerability was not known about at this point, it is important to note due to the agencies setup discussed above, it is not like many WordPress users can "just move plugins". This requires a lot of careful planning and migration, and can't just be done on a whim.

Then the real reason for this tweet came out via this utterly distasteful tweet from Automattic:

<div class="w-full flex justify-center">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">So you directed Automattic employees to find a vulnerability in ACF so you could pull this stunt?<br><br>Completely unhinged behavior. <a href="https://t.co/fYIw2hjmgb">https://t.co/fYIw2hjmgb</a> <a href="https://t.co/aiZ3AbojkY">pic.twitter.com/aiZ3AbojkY</a></p>&mdash; Ryan Duff (@ryancduff) <a href="https://twitter.com/ryancduff/status/1842616090012110897?ref_src=twsrc%5Etfw">October 5, 2024</a></blockquote>
</div>

To be clear, I don't know if the vulnerability was found to get back at WP Engine (although I have my suspicions), but there are several incredibly bad things about this:

- During the blocking from the update servers, WP Engine staff were also blocked from pushing the update. This meant that for a while, it was unclear if a patch would even be delivered through conventional means.
- This created major concern that patching all of these hundreds or thousands of installs would require manual intervention since it seemed for a while like they were not going to be able to push the security update to the WordPress store.
- It goes incredibly against the spirit of responsible disclosure to brag about how people won't be using a plugin soon whilst choking their ability to release patches.

Clearly, Automattic agreed they overstepped the mark here, deleting that tweet and allowing WP Engine to send in a patch which they published on the store:

<div class="w-full flex justify-center">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">We made a copy of the update available to the <a href="https://t.co/79Y5uXcgA6">https://t.co/79Y5uXcgA6</a> Security team, who have posted it to the plugin repository. <a href="https://t.co/MwrcZ4MVJm">https://t.co/MwrcZ4MVJm</a></p>&mdash; Advanced Custom Fields (@wp_acf) <a href="https://twitter.com/wp_acf/status/1843376378210857441?ref_src=twsrc%5Etfw">October 7, 2024</a></blockquote>
</div>

In my opinion, Automattic really overstepped the mark here, and instilled fear into the agencies and developers that entrust them to do what is right for the platform. Why would I want to be in a position where I might end up not being able to push a security fix as a developer?

## Automattic's internal conflicts

It isn't even just on Twitter that this conflict plays out, though. Matt wanted to make Automattic a company that aligned with his views (although still wants disagreement apparently, which is a contradiction), and in doing so offered severance to any employee who did not agree with his direction. [159 employees took him up on this offer](https://www.cio.com/article/3550331/one-twelfth-of-automattic-staff-leave-over-wordpress-wp-engine-spat.html), and this doesn't seem to phase him. The problem with this mentality is that it creates instability within the ecosystem that only harms the customers, with many staff that are deeply loved by WordPress users leaving at the same time. It also drags Automattic deeper into these problems.

After this happened, Matt decided to take attack on Blind, an application that allows employees to talk privately between each other:

<div class="w-full flex justify-center">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">No, I wasn&#39;t kidding. The whole point of Blind is to protect people&#39;s identity, but at Automattic now you have to out yourself to Matt in order to gain access. So weird man. <a href="https://twitter.com/hashtag/automattic?src=hash&amp;ref_src=twsrc%5Etfw">#automattic</a> <a href="https://twitter.com/hashtag/wpdrama?src=hash&amp;ref_src=twsrc%5Etfw">#wpdrama</a> <a href="https://twitter.com/WordPress?ref_src=twsrc%5Etfw">@wordpress</a> <a href="https://t.co/dVBeecK7E0">https://t.co/dVBeecK7E0</a> <a href="https://t.co/7GlZbQSUh7">pic.twitter.com/7GlZbQSUh7</a></p>&mdash; Kellie Peterson (@kellie) <a href="https://twitter.com/kellie/status/1842231237903282391?ref_src=twsrc%5Etfw">October 4, 2024</a></blockquote>
</div>

Why does Matt think that these employees want to anonymously talk to each other? It is because they are scared Matt isn't doing what is best for the company. Matt should address these problems rather than stoking a culture of fear (which by the way, doesn't even work since Blind mitigated it through manual means).

## Conclusion

In conclusion, I think Automattic is hurting the WordPress community more than Matt personally thinks. Times have moved on since it was a site primarily used for individuals blogging, and I think they need to accept that or they risk even more people converting off of the platform. What was a valid point has turned into a huge nuclear response, and I think Automattic need to issue an apology for this.
