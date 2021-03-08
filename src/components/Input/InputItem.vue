<template>
  <div>
   <input
    type="text"
    id="name"
    class="input"
    :placeholder="inputPlaceholder"
    v-model="newSearch"
    @keyup.enter="sendSearchToParent"
    />
  </div>
</template>

<script>
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
    sendSearchToParent() {
      console.log(this.newSearch);
      this.$emit('childToParent', this.newSearch);
    },
    deep: true,
  },
  /* watch: {
    searchResult: {
      handler() {
        this.$emit('newData', [this.searchResult]);
      },
    },
  }, */
};
</script>

//`http://fr.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${this.newSearch}`, {
         // withCredentials: true,
       // })
