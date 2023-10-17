import { Article } from '~/types/article.types';

export default defineEventHandler(async event => {
  const { method } = event;
  let articles: Article[] = [];
  if (method === 'GET') {
    // Mock data.
    articles = [
      {
        attributes: {
          _id: 1,
          title: 'Article POI',
          description: 'descriptionription',
          thumbnail: 'icons/android-chrome-512x512.png',
          url: 'https://nuxt.com/docs/guide/directory-structure/server',
        },
      },
      {
        attributes: {
          _id: 2,
          title: 'Article BXW',
          description: 'descriptionription',
          thumbnail: 'icons/android-chrome-512x512.png',
          url: 'https://nuxt.com/docs/guide/directory-structure/server',
        },
      },
      {
        attributes: {
          _id: 3,
          title: 'Article FDE',
          description: 'descriptionription',
          thumbnail: 'icons/android-chrome-512x512.png',
          url: 'https://nuxt.com/docs/guide/directory-structure/server',
        },
      },
      {
        attributes: {
          _id: 4,
          title: 'Article ASD',
          description: 'descriptionription',
          thumbnail: 'icons/android-chrome-512x512.png',
          url: 'https://nuxt.com/docs/guide/directory-structure/server',
        },
      },
    ];
  }
  return articles;
});
