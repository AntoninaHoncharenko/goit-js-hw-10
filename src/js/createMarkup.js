export function createMarkupList(data) {
  const { name, flags } = data;
  return `<li class="country-item"> 
  <img src="${flags.svg}" alt="flag" width="60px" height=""40px/>
  <p class="name">${name.official}</p>
</li>`;
}

export function createMarkupElement(data) {
  const { name, capital, population, flags, languages } = data[0];

  return `
  <img src="${flags.svg}" alt="flag" width="200px" height=""100px/>
  <h2 class="card-name">${name.official}</h2>
<ul>
  <li class="item">
    <p class="subtitle">Capital:</p>
    <span>${capital}</span>
  </li>
  <li class="item">
    <p class="subtitle">Population:</p>
    <span>${population}</span>
  </li>
  <li class="item">
    <p class="subtitle">Languages:</p>
    <span>${Object.values(languages).join(', ')}</span>
  </li>
</ul>`;
}
