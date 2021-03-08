<template>
  <div class="hello" >
    HomePage
    <button src="#"><router-link to="/results" >Go to resultsPage</router-link></button>
    <inputItem :inputPlaceholder="'Votre recherche ici'" v-model="getValue"/>
    <p v-on:childToParent="getSearchFromInputChild ($event)">{{ searchFromInputChild }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import inputItem from './Input/InputItem';

export default {
  name: 'HelloWorld',
  components: {
    inputItem,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchFromInputChild: [],
    };
  },
  methods: {
    getValue(value) {
      console.log(value);
    },
    getSearchFromInputChild(recivedData) {
      console.log('searchTermInParent', recivedData);
    },
    launchSearch() {
      axios({
        method: 'POST',
        url: `https://fr.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${this.newSearch}`,
        origin: 'http://www.mediawiki.org',
      })
        .then((response) => {
          this.searchResult.push(response.data);
          this.$emit('childToParentData', this.searchResult);
          console.log(this.searchResult);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('finally');
        });
    },
  },
};
</script>
