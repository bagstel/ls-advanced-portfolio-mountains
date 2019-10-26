<template lang="pug">
  .root-wrapper-container
    router-view(name="header")
    router-view(name="tabs")
    router-view
</template>

<script>
  export default {};
</script>

<style lang="postcss">
  @import "normalize.css";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/blocks/user.pcss";
  @import "../styles/blocks/avatar.pcss";
  @import "./components/*.pcss";

  .root-container {
    background: url("~images/bg/bg_welcome.jpg") 50%/cover no-repeat;
    position: relative;
    min-height: 100vh;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .9);
    }

    &--dark:before {
      background-color: rgba($text-color, .5);
    }
  }

  .page {
    &-title,
    &-subtitle {
      color: $text-color;
      font-weight: 700;
      line-height: 34px;
    }

    &-title {
      font-size: 21px;
    }

    &-subtitle {
      font-size: 18px;
    }

    &__container {
      position: relative;
      max-width: 92.5rem;
      width: 95%;
      margin: 0 auto;
      padding: 60px 0 30px 0;
    }

    &__header {
      display: flex;
      margin-bottom: 55px;
    }

    &__row:not(:last-child) {
      margin-bottom: 30px;
    }

    &__columns:not(:last-child) {
      margin-right: 30px;
    }
  }
</style>