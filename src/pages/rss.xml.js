import child_process from "child_process";
import rss from "@astrojs/rss";
import { url } from "../info";

const blogPosts = import.meta.glob("./blog/*.md");

export async function GET() {
    return rss({
        title: "Astrid's Blog",
        description: "A blog about my life and thoughts on tech",
        site: url,
        items: await Promise.all(
            Object.entries(blogPosts).map(async ([path, postPromise]) => {
                // Get the date from the git history.
                const gitDate = child_process.execSync(
                    `git log --diff-filter=A --format=%aI -- ./src/pages/${path}`,
                    {
                        cwd: process.cwd(),
                    },
                );
                const date = new Date(gitDate.toString().trim());

                // Load the post.
                const post = await postPromise();
                return {
                    title: post.frontmatter.title,
                    description: post.frontmatter.description,
                    pubDate: date,
                    link: path
                        .replace(/\.md$/, "")
                        .replace(/^\.\/blog\//, "/blog/"),
                };
            }),
        ),
        customData: "<language>en-GB</language>",
    });
}
