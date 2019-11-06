<template lang="pug">
  .root-wrapper
    router-view(name="header")
    router-view(name="tabs")
    .page__wrapper(:class="{ 'page__wrapper--dark': $route.path === '/login' }")
      router-view
    vc-tooltip()
</template>

<script>
  export default {
    components: {
      vcTooltip: () => import('components/tooltip/tooltip.vue/')
    }
  };
</script>

<style lang="postcss" src="./styles/main.pcss"></style>