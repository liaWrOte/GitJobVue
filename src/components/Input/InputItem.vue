<template>
  <div>
    <input type="text" id="name" class="input" :placeholder="inputPlaceholder" />
  </div>
</template>

<script>
export default {
  props: ['inputPlaceholder'],
};
</script>
