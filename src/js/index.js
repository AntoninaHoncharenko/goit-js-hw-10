import '../css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { ApiService } from './fetchCountries';

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
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}

function createMarkupElement() {}

/*html*/ `<h2>
  <img src="" alt="" />
  <p></p>
</h2>
<ul>
  <li>
    <p></p>
    <span></span>
  </li>
  <li>
    <p></p>
    <span></span>
  </li>
  <li>
    <p></p>
    <span></span>
  </li>
</ul>`;

function createMarkupList() {}

/*html*/ `<li>
  <img src="" alt="" />
  <p></p>
</li>;`;
