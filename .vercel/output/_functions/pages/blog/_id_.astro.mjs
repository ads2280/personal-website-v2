/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_8IDSeq5-.mjs';
import 'kleur/colors';
import { b as $$Layout, i as identity } from '../../chunks/Layout_QzdHWcCs.mjs';
import { g as getEntry, r as renderEntry } from '../../chunks/_astro_content_Xj3HcnGS.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BlhbBli4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://anikasomaia.com");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const entry = await getEntry("posts", id);
  if (!entry) {
    return Astro2.redirect("/blog");
  }
  const { Content, remarkPluginFrontmatter } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
    title: entry.data.title,
    description: entry.data.description,
    image: entry.data.image.url
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-4">${entry.data.title}</h1> <p class="opacity-60 mb-6"> ${entry.data.description} </p> <div class="flex gap-4 mb-6"> ${renderComponent($$result2, "Image", $$Image, { "src": identity.logo, "alt": identity.name, "width": 40, "height": 40, "class": "w-[40px] aspect-square object-cover rounded-full" })} <div> <p class="font-medium">${identity.name}</p> <p class="opacity-60"> ${entry.data.pubDate.toLocaleDateString()} · ${remarkPluginFrontmatter.minutesRead} </p> </div> </div> ${renderComponent($$result2, "Image", $$Image, { "src": entry.data.image.url, "alt": entry.data.image.alt, "width": 800, "height": 300, "class": "apsect-video w-full rounded-xl mb-10" })} <article class="prose dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-300 prose-a:underline-offset-4 prose-headings:mb-2 prose-p:text-gray-600 dark:prose-p:text-[#b3b3b3]"> ${renderComponent($$result2, "Content", Content, {})} </article> </section> ` })}`;
}, "/Users/anikasomaia/personal-website-v2/src/pages/blog/[id].astro", void 0);

const $$file = "/Users/anikasomaia/personal-website-v2/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
