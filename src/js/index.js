import '../css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { ApiService } from './fetchCountries';
import { createMarkupElement, createMarkupList } from './createMarkup';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

const apiService = new ApiService();

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
  apiService.query = event.target.value.trim().toLowerCase();
  if (apiService.searchQuery === '') {
    refs.list.innerHTML = '';
    refs.info.innerHTML = '';
    return;
  }
  apiService
    .fetchCountries()
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      if (data.length === 1) {
        const markupElement = createMarkupElement(data);
        refs.info.insertAdjacentHTML('beforeend', markupElement);
      } else {
        refs.info.innerHTML = '';
      }

      if (data.length > 1 && data.length <= 10) {
        data.forEach(country => {
          const markupList = createMarkupList(country);
          refs.list.insertAdjacentHTML('beforeend', markupList);
        });
      } else {
        refs.list.innerHTML = '';
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.list.innerHTML = '';
      refs.info.innerHTML = '';
    });
}
