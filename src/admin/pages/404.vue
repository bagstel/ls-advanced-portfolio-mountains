<template lang="pug">
  .page__container
    .not-found-page
      h1 Запрашиваемая страница {{ $router.currentRoute.path }} не найдена
</template>

<style lang="postcss" scoped>
  .not-found-page {
    position: relative;
  }
</style>