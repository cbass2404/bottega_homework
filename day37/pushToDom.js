const pushToDom = (target, elementName, text) => {
  const domTarget = document.querySelector(target);
  const newLI = document.createElement(elementName);
  newLI.classList.add("result");
  const textValue = document.createTextNode(text);
  newLI.appendChild(textValue);
  domTarget.appendChild(newLI);
};
