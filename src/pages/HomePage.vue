<template>
  <div class="hello">
    HomePage
    <button src="#"><router-link to="/results" >Go to resultsPage</router-link></button>
    <inputItem placeholder='salut'/>
  </div>
</template>

<script>
import inputItem from '../components/Input/InputItem.vue';

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
