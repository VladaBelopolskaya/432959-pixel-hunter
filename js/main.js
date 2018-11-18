'use strict';

(function () {
  const RIGHT_ARROW_CODE = 39;
  const LEFT_ARROW_CODE = 37;

  /**
   * Отображение экрана из массива по переданному номеру
   * @param {Element} arrayElement элемент массивa
   */
  const showScreen = (arrayElement) => {
    const main = document.querySelector(`#main`);
    const newElement = arrayElement.cloneNode(true);
    while (main.firstChild) {
      main.firstChild.remove();
    }
    main.appendChild(newElement);
  };

  /**
   * Поиск template по заданному id
   * @param {string} id of template
   * @return {DocumentFragment} содержимое искомого template
   */
  const findTemplate = (id) => {
    return document.querySelector(id).content;
  };

  /**
   * Показ другого экрана при нажатии на стрелки влево / вправо
   * @param {Event} evt событие нажатия на кнопку клавиатуры
   */
  const changeScreen = (evt) => {
    if (evt.keyCode === RIGHT_ARROW_CODE) {
      showNextScreen();
    } else if (evt.keyCode === LEFT_ARROW_CODE) {
      showPreviousScreen();
    }
  };

  /**
   * Показ следующего экрана, если текущий экран не последний
   */
  const showNextScreen = () => {
    if (currentScreenNumber < arrayOfScreens.length - 1) {
      currentScreenNumber += 1;
      showScreen(arrayOfScreens[currentScreenNumber]);
    }
  };

  /**
   * Показ предыдущего экрана, если текущий экран не первый
   */
  const showPreviousScreen = () => {
    if (currentScreenNumber > 0) {
      currentScreenNumber -= 1;
      showScreen(arrayOfScreens[currentScreenNumber]);
    }
  };

  /**
   * Добавление на страницу визуальных стрелок
   */
  const addVirtualArrows = () => {
    const body = document.querySelector(`body`);
    const div = document.createElement(`div`);
    div.className = `arrows__wrap`;
    div.innerHTML = `<style>.arrows__wrap { position: absolute; top: 95px; left: 50%; margin-left: -56px; } .arrows__btn { background: none; border: 2px solid black; padding: 5px 20px; }</style>
                     <button class="arrows__btn" id="button-left"><-</button>
                     <button class="arrows__btn" id="button-right">-></button>`;
    body.appendChild(div);
  };

  const arrayOfScreens = [];
  const arrayOfScreensId = [`#intro`, `#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`];
  arrayOfScreensId.forEach((item) => {
    arrayOfScreens.push(findTemplate(item));
  });

  let currentScreenNumber = 0;

  showScreen(arrayOfScreens[currentScreenNumber]);

  document.addEventListener(`keydown`, changeScreen);

  addVirtualArrows();

  const buttonLeft = document.querySelector(`#button-left`);
  const buttonRight = document.querySelector(`#button-right`);
  buttonLeft.addEventListener(`click`, showPreviousScreen);
  buttonRight.addEventListener(`click`, showNextScreen);
})();

// Нажатия на клавиши не должны отменять системных клавиатурных действий - что имеется ввиду?
// В некоторых браузерах может неправильно отображаться тэг <use> - но яя записываю темплейты в массив, а дальше уже их вставляю в DOM через clone.Node, надо ли мне переделывать, как указано в задании?
