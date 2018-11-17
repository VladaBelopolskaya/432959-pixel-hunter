'use strict';

(function () {
  /**
   * Отображение экрана из массива по переданному номеру
   * @param {Element} arrayElement элемент массивa
   */
  function showScreen(arrayElement) {
    const main = document.querySelector(`#main`);
    const newElement = arrayElement.cloneNode(true);
    while (main.firstChild) {
      main.firstChild.remove();
    }
    main.appendChild(newElement);
  }

  /**
   * Поиск template по заданному id
   * @param {string} id of template
   * @return {DocumentFragment} содержимое искомого template
   */
  function findTemplate(id) {
    return document.querySelector(id).content;
  }

  /**
   * Показ другого экрана при нажатии на стрелки влево / вправо
   * @param {Event} evt событие нажатия на кнопку клавиатуры
   */
  function changeScreen(evt) {
    if (evt.keyCode === 39) {
      showNextScreen();
    }
    else if (evt.keyCode === 37) {
      showPreviousScreen();
    }
  }

  /**
   * Показ следующего экрана, если текущий экран не последний
   */
  function showNextScreen() {
    if (currentScreenNumber < arrayOfScreens.length - 1) {
      currentScreenNumber += 1;
      showScreen(arrayOfScreens[currentScreenNumber]);
    }
  }

  /**
   * Показ предыдущего экрана, если текущий экран не первый
   */
  function showPreviousScreen() {
    if (currentScreenNumber > 0) {
      currentScreenNumber -= 1;
      showScreen(arrayOfScreens[currentScreenNumber]);
    }
  }

  /**
   * Добавление на страницу визуальных стрелок
   */
  function addVirtualArrows() {
    const body = document.querySelector(`body`);
    const div = document.createElement(`div`);
    const buttonLeft = document.createElement(`button`);
    const buttonRight = document.createElement(`button`);
    div.style.cssText = `position: absolute; top: 95px; left: 50%; margin-left: -56px;`;
    buttonLeft.id = `button-left`;
    buttonLeft.style.cssText = `background: none; border: 2px solid black; padding: 5px 20px;`;
    buttonLeft.textContent = `<-`;
    buttonRight.id = `button-right`;
    buttonRight.style.cssText = `background: none; border: 2px solid black; padding: 5px 20px;`;
    buttonRight.textContent = `->`;
    div.appendChild(buttonLeft);
    div.appendChild(buttonRight);
    body.appendChild(div);
  }

  const arrayOfScreens = [];
  const introScreen = findTemplate(`#intro`);
  arrayOfScreens.push(introScreen);
  const greetingScreen = findTemplate(`#greeting`);
  arrayOfScreens.push(greetingScreen);
  const rulesScreen = findTemplate(`#rules`);
  arrayOfScreens.push(rulesScreen);
  const game1Screen = findTemplate(`#game-1`);
  arrayOfScreens.push(game1Screen);
  const game2Screen = findTemplate(`#game-2`);
  arrayOfScreens.push(game2Screen);
  const game3Screen = findTemplate(`#game-3`);
  arrayOfScreens.push(game3Screen);
  const statsScreen = findTemplate(`#stats`);
  arrayOfScreens.push(statsScreen);

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
