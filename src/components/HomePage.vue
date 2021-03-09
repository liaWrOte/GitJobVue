<template>
  <div class="hello" >
    HomePage
    <button src="#"><router-link to="/results" >Go to resultsPage</router-link></button>
    <input
    type="text"
    id="name"
    class="input"
    placeholder="Votre recherche ici"
    v-model="newSearch"
    @keyup.enter="launchSearch"
    />
    <div v-if="hasResults">
      <p>test</p>
      <li v-for="resultTerm in searchResults[1]" :key="resultTerm">
        {{ resultTerm }}
      </li>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      newSearch: '',
      searchResults: null,
      hasResults: false,
    };
  },
  methods: {
    getValue(value) {
      console.log(value);
    },
    changeResultsStatus() {
      this.hasResults = !this.hasResults;
    },
    launchSearch() {
      axios({
        method: 'POST',
        url: `https://fr.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${this.newSearch}`,
        origin: 'http://www.mediawiki.org',
      })
        .then((response) => {
          this.searchResults = response.data;
          console.log('results', this.searchResults);
          console.log('resultStatus', this.hasResults);
          console.log(this.newSearch);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.changeResultsStatus();
          console.log('resultStatus', this.hasResults);
          console.log('finally');
        });
    },
  },
};
</script>
