import { readFileSync, writeFileSync, unlinkSync } from "fs";
import { AtpAgent } from "@atproto/api";
import path from "path";
import fm from "front-matter";
import { spawnSync } from "child_process";

const identifier = process.env.BLUESKY_IDENTIFIER;
if (!identifier) {
    throw new Error("BLUESKY_IDENTIFIER is not set");
}
const token = process.env.BLUESKY_TOKEN;
if (!token) {
    throw new Error("BLUESKY_TOKEN is not set");
}

const agent = new AtpAgent({
    service: "https://bsky.social",
});

const loginPromise = agent.login({
    identifier,
    password: token,
});

async function post(fp: string, attrs: { title: string; description: string }, content: string) {
    await loginPromise;
    const fileName = path.basename(fp).replace(".md", "");
    let shortDescription = attrs.description.slice(0, 100);
    if (attrs.description.length > 100) {
        shortDescription += "...";
    }
    const start = `"${shortDescription}"\n\n`;
    const post = await agent.post({
        text: `"${start}View Blog Post`,
        embed: {
            $type: "app.bsky.embed.external",
            external: {
                uri: `https://astrid.place/blog/${fileName}`,
                title: attrs.title,
                description: shortDescription,
            },
        },
        facets: [
            {
                features: [
                    {
                        $type: "app.bsky.richtext.facet.link",
                        uri: `https://astrid.place/blog/${fileName}`,
                    },
                ],
                index: {
                    byteStart: start.length,
                    byteEnd: start.length + fileName.length,
                },
            },
        ],
    });
    content = content.replace(/^---\n/, `---
bluesky:
    cid: "${post.cid}"
    uri: "${post.uri}"
`);
    writeFileSync(fp, content);
}

const files = readFileSync("blog-files.txt", "utf8").split("\n");

for (const file of files) {
    const content = readFileSync(file, "utf8");
    const data = fm<{ bluesky: any; title: string; description: string }>(content);
    if (data.attributes.bluesky) {
        continue;
    }
    await post(file, data.attributes, content);
}

export function runShellScript(cmd: string, args: string[]) {
    const result = spawnSync(cmd, args, {
        shell: process.env.SHELL || true,
        stdio: "inherit",
        env: process.env,
    });
    if ((result.status || 0) !== 0) {
        process.exit(result.status);
    }
    if (result.error) {
        throw result.error;
    }
}

if (files.length > 0) {
    // Delete the blog-files.txt file
    unlinkSync("blog-files.txt");

    // Try to commit and push the changes
    runShellScript("git", ["add", "."]);
    runShellScript("git", ["commit", "-m", "Post to Bluesky"]);
    runShellScript("git", ["push"]);
}
