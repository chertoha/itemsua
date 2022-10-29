import { mainPageProductsList } from '../../utils/data/mainPageProductsList';
import template from '../../templates/main-page-content-tmpl.hbs';

const categories = document.querySelector('.js-categories');

console.log(mainPageProductsList);
categories.innerHTML = template(mainPageProductsList);
