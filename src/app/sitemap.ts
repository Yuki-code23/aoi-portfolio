import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aoi-portfolio.vercel.app'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // 今後ページが増えたらここに追加できます
        // {
        //   url: `${baseUrl}/works`,
        //   lastModified: new Date(),
        //   changeFrequency: 'weekly',
        //   priority: 0.8,
        // },
    ]
}
