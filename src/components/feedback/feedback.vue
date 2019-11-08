<template lang="pug">

</template>

<script>
  import SimpleVueValidator from 'simple-vue-validator';
  const Validator = SimpleVueValidator.Validator;

  export default {
    name: 'feedback',
    mixins: [SimpleVueValidator.mixin],
    data: () => ({

    }),
    components: {
      vcInput: () => import('../input/input.vue')
    }
  };
</script>

<style scoped>

</style>