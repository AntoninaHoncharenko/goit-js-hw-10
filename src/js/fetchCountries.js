export class ApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    return fetch(`https://restcountries.com/v2/name/${this.searchQuery}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
