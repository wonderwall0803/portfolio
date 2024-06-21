import { createClient } from 'microcms-js-sdk';

export type News = {
  id: string;
  title: string;
  body: string;
}

if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

// お知らせ一覧を取得
export const getNews = async () => {
    const news = await client.getList<News>({
    endpoint: "news"
    });
    return news;
}

// カテゴリー一覧を取得
export const getCategory = async () => {
    const category = await client.getList({
        endpoint: "categories"
    });
    return category;
};

// お知らせの詳細を取得
export const getDetail = async (contentId: string) => {
    const newsDetail = await client.getListDetail<News>({
        endpoint: "news",
        contentId,
    });
    return newsDetail;
};

// microCMSのプレビュー取得
export const getPreviewData = async (type: any, slug: string, draftKey: string) => {
  const data = client.get({
    endpoint: type,
    contentId: slug,
    queries: { draftKey: draftKey }
  }).then((res) => res).catch(() => null);
  return data;
}