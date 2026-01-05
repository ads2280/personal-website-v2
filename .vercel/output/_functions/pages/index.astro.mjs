/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_8IDSeq5-.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlhbBli4.mjs';
import { $ as $$Icon, b as $$Layout, i as identity, h as homePageContent } from '../chunks/Layout_QzdHWcCs.mjs';
import { a as getCollection } from '../chunks/_astro_content_Xj3HcnGS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://anikasomaia.com");
const $$SocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialLink;
  const { title, url, icon, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex items-center gap-3 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"${addAttribute(external ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "width": 25, "height": 25 })} <div> <p>${title}</p> </div> </a>`;
}, "/Users/anikasomaia/personal-website-v2/src/components/SocialLink.astro", void 0);

const $$Astro = createAstro("https://anikasomaia.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { text, href, external, noAnchor } = Astro2.props;
  return renderTemplate`${!noAnchor ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : "_self", "target")} class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"><div class="rotate-45">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })}</div><span>${text}</span></a>` : renderTemplate`<div class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"><div class="rotate-45">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })}</div><span>${text}</span></div>`}`;
}, "/Users/anikasomaia/personal-website-v2/src/components/Link.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let posts = await getCollection("posts");
  posts = posts.filter((p) => !p.data?.draft);
  posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate).getTime();
    const dateB = new Date(b.data.pubDate).getTime();
    return dateB - dateA;
  });
  posts.splice(2);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": homePageContent.seo }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">${identity.name}</h1> <p class="opacity-60 mb-10">${homePageContent.role}</p> <div class="flex flex-col min-[520px]:flex-row gap-6 mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": identity.logo, "alt": identity.name, "width": 100, "height": 100, "class": "rounded-full" })} <div class="group flex flex-col justify-center gap-2 w-fit"> ${homePageContent.socialLinks.map((link) => renderTemplate`${renderComponent($$result2, "SocialLink", $$SocialLink, { "title": link.title, "url": link.url, "icon": link.icon, "external": link.external })}`)} </div> </div> <p class="max-w-md mb-8"> ${homePageContent.description} </p> <div class="flex items-center gap-4 group w-fit"> ${homePageContent.links.map((link) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "text": link.title, "href": link.url, "external": link.external })}`)} </div> </section> <section class="mt-20 max-w-2xl mx-auto px-6"> <h2 class="mb-8">Latest Posts</h2> <div class="grid grid-cols-1 gap-10 sm:gap-6 mb-10"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class=" sm:flex sm:flex-row-reverse sm:justify-between sm:gap-6 post"> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.image.url, "alt": post.data.image.url, "width": 100, "height": 100, "class": "rounded-lg w-[100px] h-[100px] object-cover" })} <div class="mt-4 sm:my-auto"> <p class="opacity-60 mb-2"> ${post.data.pubDate.toLocaleDateString()} </p> <h3 class="font-medium hover-underline">${post.data.title}</h3> <p class="text-sm opacity-60 mt-2 mb-3">${post.data.description}</p> </div> </a>`)} </div> <div class="text-center"> <a href="/blog" class="underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity">View all</a> </div> </section> ` })}`;
}, "/Users/anikasomaia/personal-website-v2/src/pages/index.astro", void 0);

const $$file = "/Users/anikasomaia/personal-website-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
