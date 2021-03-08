<template>
  <div>
   <input
    type="text"
    id="name"
    class="input"
    :placeholder="inputPlaceholder"
    v-model="newSearch"
    @keyup.enter="launchSearch"
    />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newSearch: '',
    };
  },
  props: {
    inputPlaceholder: String,
  },
  methods: {
    launchSearch() {
      axios({
        method: 'POST',
        url: `https://fr.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${this.newSearch}`,
        origin: 'http://www.mediawiki.org',
      })
        .then(response => (console.table(response)))
        .catch(error => console.log(error));
    },
  },
};
</script>

//`http://fr.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${this.newSearch}`, {
         // withCredentials: true,
       // })
