export function createMarkupList(data) {
  const { name, flags } = data;
  return `<li>
  <img src="${flags.svg}" alt="flag" width="40px" height=""30px/>
  <p>${name.common}</p>
</li>`;
}

export function createMarkupElement(data) {
  const { name, capital, population, flags, languages } = data[0];

  return `<h2>
  <img src="${flags.svg}" alt="flag" width="200px" height=""100px/>
  <p>${name.common}</p>
</h2>
<ul>
  <li>
    <p>Capital:</p>
    <span>${capital}</span>
  </li>
  <li>
    <p>Population:</p>
    <span>${population}</span>
  </li>
  <li>
    <p>Languages:</p>
    <span>${Object.values(languages).join(', ')}</span>
  </li>
</ul>`;
}
