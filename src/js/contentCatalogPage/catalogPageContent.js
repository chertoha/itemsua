import { catalogPageProductList } from '../../utils/data/catalogPageProductList';
import template from '../../templates/catalog-page-template.hbs';

const catalogRef = document.querySelector('.js-catalog');

catalogRef.innerHTML = template(catalogPageProductList);
