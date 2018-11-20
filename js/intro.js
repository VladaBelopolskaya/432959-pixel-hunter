import {getElementFromTemplate, showScreen} from './js/utils.js';
import greeting from './js/greeting.js';

const template = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;
const element = getElementFromTemplate(template);

const asteriskButton = element.querySelector(`.intro__asterisk`);

asteriskButton.addEventListener(`click`, () => {
  showScreen(greeting);
});

export default element;
