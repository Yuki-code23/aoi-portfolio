import { createClient } from "microcms-js-sdk";
import type { Work, News } from "@/types/microcms";

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
    throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
    throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is required");
}

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export const getWorks = async () => {
    return await client.getList<Work>({
        endpoint: "works",
    });
};

export const getWorkDetail = async (id: string) => {
    return await client.getListDetail<Work>({
        endpoint: "works",
        contentId: id,
    });
};

export const getNews = async () => {
    return await client.getList<News>({
        endpoint: "news",
    });
};
