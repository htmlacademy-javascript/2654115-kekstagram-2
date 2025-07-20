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

const isEscape = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { findTemplate, renderFragment, isEscape, debounce };
