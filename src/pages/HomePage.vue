<template>
  <div class="hello">
    HomePage
    <button src="#"><router-link to="/results" >Go to resultsPage</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
