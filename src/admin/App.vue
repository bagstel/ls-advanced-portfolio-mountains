<template lang="pug">
  include ../blocks/form-elements.pug
  include ../blocks/button.pug
  .login
    .login__content
      form.login__form
        .title.login__title Авторизация
        +adminInput('login__form-input', 'Логин', 'user', 'text', 'login')
        +adminInput('login__form-input', 'Пароль', 'key', 'password', 'password')
        .login__btn: +button('feedback', 'submit', 'Отправить', '', false)
</template>

<script>

</script>


<style lang="postcss">
  @import "normalize.css";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/blocks/button.pcss";

  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("~images/bg/bg_welcome.jpg") 50%/cover no-repeat;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(#414c63, .5);
    }

    &__content {
      position: relative;
    }

    &__form {
      width: 563px;
      padding: 50px 77px 60px;
      background: #fff;
    }

    &__title {
      text-align: center;
      margin-bottom: 34px;
    }

    &__btn {
      display: flex;
      justify-content: center;
    }
  }

  .form {
    &__row {
      position: relative;
      margin-bottom: 40px;
    }

    &__label {
      display: block;
      color: rgba($links-color, .3);
      font-weight: 600;
      line-height: 36px;
      cursor: pointer;
      padding-left: 40px;
    }

    &__input-wrap {
      display: flex;
    }

    &__input {
      background: transparent;
      border: 0;
      color: $links-color;
      width: 100%;
      font-size: 18px;
      font-weight: 700;
      line-height: 36px;
      padding: 0 0 12px 40px;
      border-bottom: 2px solid $links-color;
      order: 1;
      cursor: pointer;

      &:focus {
        cursor: initial;
      }
    }

    &__icon {
      display: flex;
      position: absolute;
      top: 50%;
      width: 26px;
      height: 30px;
      background-repeat: no-repeat;

      @each $icon in (user, key) {
        &--$(icon) {
          background-image: svg-load("$(icon).svg", fill=#cfd2d7);
        }
      }
    }
  }
</style>