/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_BVA2hifG.mjs';
import 'kleur/colors';
import { w as workPageContent, b as $$Layout } from '../chunks/Layout_BoY-DeMh.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BixfW36c.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://anikasomaia.com");
const $$ResumeItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResumeItem;
  const { title, company, date, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="py-4 border-b border-gray-200 dark:border-gray-900 last:border-b-0"> <a${addAttribute(company.url, "href")} class="flex items-start justify-between group hover:opacity-80 transition-opacity"> <div class="flex items-start gap-4 flex-1"> ${renderComponent($$result, "Image", $$Image, { "src": company.image, "alt": company.name, "width": 40, "height": 40, "class": "rounded-full w-[40px] h-[40px] object-cover mt-1" })} <div class="flex-1"> <h3 class="font-medium text-lg">${title}</h3> <p class="text-sm opacity-60 mb-2">${company.name}</p> ${description && renderTemplate`<p class="text-sm opacity-80 leading-relaxed">${description}</p>`} </div> </div> <p class="text-sm opacity-60 ml-4 mt-1">${date}</p> </a> </div>`;
}, "/Users/anikasomaia/personal-website-v2/src/components/ResumeItem.astro", void 0);

const $$Work = createComponent(($$result, $$props, $$slots) => {
  const workDescription = marked.parse(workPageContent.description);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": workPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Work</h1> <p class="opacity-60 mb-10">${workPageContent.subtitle}</p> <div class="mb-14"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(workDescription)}` })} </div> <div class="grid grid-cols-1 group"> ${workPageContent.items.map((item) => renderTemplate`${renderComponent($$result2, "ResumeItem", $$ResumeItem, { ...item })}`)} </div> </section> ` })}`;
}, "/Users/anikasomaia/personal-website-v2/src/pages/work.astro", void 0);

const $$file = "/Users/anikasomaia/personal-website-v2/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
