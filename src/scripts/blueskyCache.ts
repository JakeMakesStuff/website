import { actions } from "astro:actions";
import type { ThreadViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

const threads: Map<string, Promise<ThreadViewPost>> = new Map();

export async function getThread(uri: string) {
    const r = threads.get(uri);
    if (r) return r;

    const id = uri.split("/").pop()!;
    const thread = actions.getBlueskyPostById({ id }).then((r) => {
        if (r.error) throw r.error;
        const thread = JSON.parse(r.data) as ThreadViewPost;
        if (thread.$type !== "app.bsky.feed.defs#threadViewPost") {
            throw new Error("Thread is not a thread view post");
        }
        return thread as ThreadViewPost;
    });
    threads.set(uri, thread);
    return thread;
}
