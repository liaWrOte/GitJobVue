import Vue from 'vue';

Vue.component('input-item', {
  data() {
    return 'salut';
  },
  template: '<input type="text" class="input" placeholder="toBind">',
});
