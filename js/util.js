const findTemplate = (template) =>{

  const tempEl = '#';
  const index = template.indexOf(tempEl);
  let getTemplate;

  if(index === 0){
    getTemplate = document.querySelector(template);
  } else{
    getTemplate = document.getElementById(template);
  }
  if(!getTemplate){
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
