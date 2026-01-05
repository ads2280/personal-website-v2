/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, F as Fragment, d as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BVA2hifG.mjs';
import 'kleur/colors';
import { b as $$Layout, p as projectsPageContent } from '../chunks/Layout_BoY-DeMh.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BixfW36c.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://anikasomaia.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, image, year, url, demoUrl } = Astro2.props;
  const htmlDescription = marked.parse(description);
  return renderTemplate`${maybeRenderHead()}<div class="sm:py-5 py-10 flex flex-col sm:flex-row gap-6 group-hover:opacity-60 hover:!opacity-100 transition-opacity"> <a${addAttribute(url, "href")} target="_blank" class="h-full bg-gray-200 dark:bg-gray-700 rounded-lg aspect-video sm:h-[150px] block"> ${renderComponent($$result, "Image", $$Image, { "width": 1920, "height": 1080, "src": image, "alt": title, "class": "w-full h-full object-cover rounded-lg aspect-video" })} </a> <div class="flex-1"> <div class="flex items-center gap-1 mb-2"> <a${addAttribute(url, "href")} target="_blank" class="hover:underline"> <h2 class="font-medium">${title}</h2> </a> <span class="opacity-60">· ${year}</span> </div> <div class="opacity-60"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(htmlDescription)}` })} ${demoUrl && renderTemplate`<span> ${" "} <a${addAttribute(demoUrl, "href")} target="_blank" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline">
See demo
</a> </span>`} </div> </div> </div>`;
}, "/Users/anikasomaia/personal-website-v2/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": projectsPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Projects</h1> <p class="opacity-60 mb-10">${projectsPageContent.subtitle}</p> <div class="grid grid-cols-1 group"> ${projectsPageContent.projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> </section> ` })}`;
}, "/Users/anikasomaia/personal-website-v2/src/pages/projects.astro", void 0);

const $$file = "/Users/anikasomaia/personal-website-v2/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
