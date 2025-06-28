const findTemplate = (template) =>{
  let getTemplate = document.querySelector(template);

  if(!getTemplate) {
    throw new Error(`Template not found: ${getTemplate}`);
  }

  return getTemplate.content.firstElementChild;
};

const renderFragment = (items, makeElement, container) =>{
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.append(makeElement(item)));
  container.append(fragment);
};


export {findTemplate, renderFragment};
