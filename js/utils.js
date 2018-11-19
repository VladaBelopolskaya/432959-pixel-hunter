/**
 * Создание DOM-элемента на основле переденной в виде строки разметки
 * @param {template} template разметка
 * @return {HTMLElement} созданый DOM-элемент
 */
export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template.trim();
  return element;
};

/**
 * Отображение элемента на страницу
 * @param {Element} elem DOM-элемент
 */
export const showScreen = (elem) => {
  console.log(`123`);
  const main = document.querySelector(`#main`);
  while (main.firstChild) {
    main.firstChild.remove();
  }
  main.appendChild(elem);
};
