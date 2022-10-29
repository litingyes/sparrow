export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function applyAttributes(el, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    el.setAttribute(kebabCaseKey, value);
  }
}

export function applyTransform(el, transform) {
  const oldTransform = el.getAttribute('transform');
  const prefix = oldTransform ? `${oldTransform} ` : '';
  el.setAttribute('transform', `${prefix}${transform}`);
}
