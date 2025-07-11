const findTemplate = (template) => {
  const getTemplate = document.querySelector(template);

  if (!getTemplate) {
    throw new Error(`Template not found: ${template}`);
  }

  return getTemplate.content.firstElementChild;
};

const renderFragment = (items, makeElement, container) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => fragment.append(makeElement(item)));
  container.append(fragment);
};

const isEscape = (evt) => {
  return evt.key === 'Escape';
};


export { findTemplate, renderFragment, isEscape };
