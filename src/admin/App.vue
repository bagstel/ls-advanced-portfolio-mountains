<template lang="pug">
  include ../blocks/form-elements.pug
  include ../blocks/button.pug
  .root-wrapper-container
    include ../blocks/login.pug
    include ../blocks/header-admin.pug
    .tabs
      .container.tabs__container
        ul.tabs__list
          li.tabs__item
            button(type="button").btn.tabs__btn Обо мне
          li.tabs__item
            button(type="button").btn.tabs__btn Работы
          li.tabs__item
            button(type="button").btn.tabs__btn Отзывы
</template>

<script>

</script>


<style lang="postcss">
  @import "normalize.css";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/blocks/button.pcss";
  @import "../styles/blocks/form-elements.pcss";
  @import "../styles/blocks/login.pcss";
  @import "../styles/blocks/header-admin.pcss";
  @import "../styles/blocks/user.pcss";

  .tabs {
    &__list {
      display: flex;
      height: 77px;
    }

    &__item {
      margin-right: 30px;
      height: 100%;
    }

    &__btn {
      width: 125px;
      color: #414c63;
      line-height: 2;
      height: 100%;
      border-bottom: 3px solid transparent;

      &:hover {
        color: $links-active;
        font-weight: 600;
        border-color: currentColor;
      }
    }
  }


</style>