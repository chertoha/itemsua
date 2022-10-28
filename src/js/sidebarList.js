import { mainPageProductsList } from '../utils/data/mainPageProductsList';
import template from '../templates/sidebar-tmpl.hbs';

const sidebarList = document.querySelector('.js-tree-list');

sidebarList.innerHTML = template(mainPageProductsList);

sidebarList.addEventListener('click', e => {
  const ref = e.target;
  if (!ref.classList.contains('tree-list__link')) {
    return;
  }

  const prevCurrentRef = document.querySelector('.tree-list__link--current');
  if (prevCurrentRef) {
    prevCurrentRef.classList.remove('tree-list__link--current');
  }
  ref.classList.add('tree-list__link--current');
});
