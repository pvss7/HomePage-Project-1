// Original component: builds the hexagonal "honeycomb" project grid
// on the homepage from the shared projects data, instead of hard-coding
// six near-identical <li> blocks by hand in the HTML.

import { projects } from "./projects-data.js";

/**
 * Renders the honeycomb project grid into the given <ul> element.
 * @param {HTMLUListElement} listElement
 */
export function renderHoneycomb(listElement) {
  if (!listElement) return;

  // Code review (Srujan Kothuri): Great use of a DocumentFragment here. All
  // cells are built off-page and inserted with one appendChild, so the browser
  // reflows once instead of once per project. Using textContent (not
  // innerHTML) for the tag and caption also means project text can never be
  // parsed as HTML.

  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const item = document.createElement("li");
    item.className = "honeycomb__cell";

    const link = document.createElement("a");
    link.className = "honeycomb__link";
    link.href = `./projects.html#${project.id}`;

    const img = document.createElement("img");
    img.className = "honeycomb__img";
    img.src = project.thumb;
    img.alt = project.alt;
    img.loading = "lazy";

    const tag = document.createElement("span");
    tag.className = "honeycomb__tag";
    tag.textContent = project.tag;

    const caption = document.createElement("span");
    caption.className = "honeycomb__caption";
    caption.textContent = project.title;

    link.append(img, tag, caption);
    item.appendChild(link);
    fragment.appendChild(item);
  });

  listElement.appendChild(fragment);
}
