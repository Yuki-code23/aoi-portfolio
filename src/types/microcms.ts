import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Work = {
  title: string;
  theme?: string;
  image: MicroCMSImage;
  category: ("Character" | "Background" | "Concept Art")[];
  tools?: string;
  retouched: boolean;
  description?: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  content: string;
  publishedAt: string;
} & MicroCMSListContent;
