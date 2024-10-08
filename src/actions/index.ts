import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    submitContactForm: defineAction({
        input: z.object({
            email: z.string().email(),
            message: z.string(),
            token: z.string(),
        }),
        async handler({ email, message, token }) {
            // Validate the Turnstile token.
            const turnstileResponse = await fetch(
                "https://challenges.cloudflare.com/turnstile/v0/siteverify",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        response: token,
                        secret: process.env.TURNSTILE_SECRET!,
                    }),
                },
            );
            const turnstileData = await turnstileResponse.json();
            if (!turnstileData.success) {
                return {
                    success: false as const,
                    error: "Invalid Turnstile token",
                };
            }

            // Send the discord webhook.
            const discordResponse = await fetch(process.env.DISCORD_WEBHOOK!, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    embeds: [
                        {
                            title: "New contact form submission",
                            fields: [
                                { name: "Email", value: email, inline: true },
                                {
                                    name: "Message",
                                    value: message,
                                    inline: true,
                                },
                            ],
                        },
                    ],
                }),
            });
            if (!discordResponse.ok) {
                return {
                    success: false as const,
                    error: "Failed to send form",
                };
            }
            return { success: true as const };
        },
    }),
};
