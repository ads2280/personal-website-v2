/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, e as defineScriptVars, m as maybeRenderHead } from '../../chunks/astro/server_BVA2hifG.mjs';
import 'kleur/colors';
import { b as $$Layout, i as identity } from '../../chunks/Layout_CG7rfovR.mjs';
import { g as getEntry, r as renderEntry } from '../../chunks/_astro_content_B6am67nH.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BixfW36c.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
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
  const claudeSummary = entry.data.claudeSummary;
  const claudePrompt = entry.data.claudePrompt || "Too long? Ask Claude";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
    title: entry.data.title,
    description: entry.data.description,
    image: entry.data.image.url
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-4">${entry.data.title}</h1> <p class="opacity-60 mb-6"> ${entry.data.description} </p> <div class="flex gap-4 mb-6"> ${renderComponent($$result2, "Image", $$Image, { "src": identity.logo, "alt": identity.name, "width": 40, "height": 40, "class": "w-[40px] aspect-square object-cover rounded-full bg-white" })} <div> <p class="font-medium">${identity.name}</p> <p class="opacity-60"> ${entry.data.pubDate.toLocaleDateString()} · ${remarkPluginFrontmatter.minutesRead} ${claudeSummary && renderTemplate`<button id="claude-explain-btn" class="ml-2 text-sm opacity-100 underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all"> ${claudePrompt} </button>`} </p> </div> </div> ${claudeSummary && renderTemplate`<div id="claude-response" class="hidden mb-8 p-4 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"> <div class="flex items-start gap-3"> <div class="w-6 h-6 rounded-full bg-[#D97757] flex items-center justify-center flex-shrink-0 mt-0.5"> <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path> </svg> </div> <div class="flex-1"> <p class="font-medium text-sm mb-1 text-[#D97757]">Claude</p> <div id="claude-text" class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"></div> <span id="cursor" class="hidden animate-pulse">|</span> </div> </div> </div>`} ${renderComponent($$result2, "Image", $$Image, { "src": entry.data.image.url, "alt": entry.data.image.alt, "width": 800, "height": 300, "class": "apsect-video w-full rounded-xl mb-10" })} <article class="prose dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-300 prose-a:underline-offset-4 prose-headings:mb-2 prose-p:text-gray-600 dark:prose-p:text-[#b3b3b3]"> ${renderComponent($$result2, "Content", Content, {})} </article> </section> ` })} ${claudeSummary && renderTemplate(_a || (_a = __template(["<script>(function(){", "\n    const btn = document.getElementById('claude-explain-btn');\n    const response = document.getElementById('claude-response');\n    const textEl = document.getElementById('claude-text');\n    const cursor = document.getElementById('cursor');\n\n    let hasPlayed = false;\n\n    btn.addEventListener('click', async () => {\n      if (hasPlayed) {\n        const isHidden = response.classList.toggle('hidden');\n        btn.textContent = isHidden ? 'Show summary' : 'Hide summary';\n        return;\n      }\n\n      hasPlayed = true;\n      btn.textContent = 'Thinking...';\n\n      await new Promise(r => setTimeout(r, 800));\n\n      response.classList.remove('hidden');\n      cursor.classList.remove('hidden');\n      btn.textContent = 'Hide summary';\n\n      const text = claudeSummary;\n      let i = 0;\n      const speed = 12;\n\n      const typeWriter = () => {\n        if (i < text.length) {\n          textEl.innerHTML += text.charAt(i);\n          i++;\n          setTimeout(typeWriter, speed + Math.random() * 8);\n        } else {\n          cursor.classList.add('hidden');\n        }\n      };\n\n      typeWriter();\n    });\n  })();<\/script>"])), defineScriptVars({ claudeSummary }))}`;
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
