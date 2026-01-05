import rss from '@astrojs/rss';
import { a as getCollection } from '../chunks/_astro_content_Xj3HcnGS.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  let posts = await getCollection("posts");
  posts = posts.filter((p) => !p.data?.draft);
  posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate).getTime();
    const dateB = new Date(b.data.pubDate).getTime();
    return dateB - dateA;
  });
  return rss({
    title: "Anika Somaia's Blog",
    description: "Thoughts, stories and ideas about AI, math, and building things.",
    site: context.site ?? "https://anikasomaia.com",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`
    })),
    customData: `<language>en-us</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
