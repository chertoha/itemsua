import { mainPageProductsList } from '../utils/data/mainPageProductsList';
import template from '../templates/sidebar-tmpl.hbs';

const sidebarList = document.querySelector('.js-tree-list');

sidebarList.innerHTML = template(mainPageProductsList);
