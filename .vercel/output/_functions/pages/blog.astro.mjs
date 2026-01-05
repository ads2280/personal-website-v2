/* empty css                                 */
import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_8IDSeq5-.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlhbBli4.mjs';
import { b as $$Layout, c as blogPageContent } from '../chunks/Layout_QzdHWcCs.mjs';
import { a as getCollection, r as renderEntry } from '../chunks/_astro_content_Xj3HcnGS.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let posts = await getCollection("posts");
  posts = posts.filter((p) => !p.data?.draft);
  posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate).getTime();
    const dateB = new Date(b.data.pubDate).getTime();
    return dateB - dateA;
  });
  for (const post of posts) {
    const { remarkPluginFrontmatter } = await renderEntry(post);
    post.data.readingTime = remarkPluginFrontmatter.minutesRead;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": blogPageContent.seo }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Blog</h1> <p class="opacity-60 mb-14">${blogPageContent.subtitle}</p> <div class="grid grid-cols-1 gap-10 sm:gap-6 mb-10"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class=" sm:flex sm:flex-row-reverse sm:justify-between sm:gap-6 post"> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.image.url, "alt": post.data.image.url, "width": 100, "height": 100, "class": "rounded-lg w-[100px] h-[100px] object-cover" })} <div class="mt-4 sm:my-auto"> <p class="opacity-60 mb-2"> ${post.data.pubDate.toLocaleDateString()} ·${" "} ${post.data.readingTime} </p> <h3 class="font-medium hover-underline">${post.data.title}</h3> <p class="text-sm opacity-60 mt-2 mb-3">${post.data.description}</p> </div> </a>`)} </div> </section> ` })}`;
}, "/Users/anikasomaia/personal-website-v2/src/pages/blog/index.astro", void 0);

const $$file = "/Users/anikasomaia/personal-website-v2/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
