<template>
  <div class="hello">
    HomePage
    <button src="#"><router-link to="/results" >Go to resultsPage</router-link></button>
    <inputItem :inputPlaceholder="'salut'" />
  </div>
</template>

<script>
import inputItem from './Input/InputItem';

export default {
  name: 'HelloWorld',
  components: {
    inputItem,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
