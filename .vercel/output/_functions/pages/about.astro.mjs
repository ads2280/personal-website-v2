/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_8IDSeq5-.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlhbBli4.mjs';
import { $ as $$Icon, a as aboutPageContent, b as $$Layout } from '../chunks/Layout_QzdHWcCs.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://anikasomaia.com");
const $$SocialLinkBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialLinkBox;
  const { title, url, icon, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="p-4 rounded-lg border border-black dark:border-white border-opacity-30 dark:border-opacity-30 flex items-center gap-3 group-hover:opacity-30 hover:!opacity-100 transition-opacity"${addAttribute(external ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "width": 25, "height": 25 })} <div class="flex items-center justify-between w-full"> <p>${title}</p> <div class="rotate-45"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })} </div> </div> </a>`;
}, "/Users/anikasomaia/personal-website-v2/src/components/SocialLinkBox.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageDescription = marked.parse(aboutPageContent.about.description);
  const connectDescription = marked.parse(aboutPageContent.connect.description);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": aboutPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">About</h1> <p class="opacity-60 mb-10">${aboutPageContent.subtitle}</p> <div class="mb-14"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(pageDescription)}` })} </div> <div class="flex flex-col min-[410px]:flex-row"> ${renderTemplate`<a${addAttribute(aboutPageContent.about.image_l.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_l.url, "alt": aboutPageContent.about.image_l.alt, "width": 350, "height": 250, "class": "w-[350px] h-[250px] object-cover rounded-xl -rotate-6" })} </a>` } ${renderTemplate`<a${addAttribute(aboutPageContent.about.image_r.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform mx-auto sm:ml-auto"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_r.url, "alt": aboutPageContent.about.image_r.alt, "width": 150, "height": 250, "class": "w-[150px] h-[250px] object-cover rounded-xl rotate-6" })} </a>` } </div> </section> <section class="mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Connect</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(connectDescription)}` })} </div> <div class="grid grid-cols-2 gap-2 group"> ${aboutPageContent.connect.links.map((item) => renderTemplate`${renderComponent($$result2, "SocialLinkBox", $$SocialLinkBox, { ...item })}`)} </div> </div> </section> ` })}`;
}, "/Users/anikasomaia/personal-website-v2/src/pages/about.astro", void 0);

const $$file = "/Users/anikasomaia/personal-website-v2/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
