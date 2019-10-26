<template lang="pug">
  include ../blocks/form-elements.pug
  include ../blocks/button.pug
  .login
    .login__content
      form.login__form
        .title.login__title Авторизация
        +input('login__form-input', 'Логин', 'user', 'text', 'login', 'Terminator_2000')
        +input('login__form-input', 'Пароль', 'key', 'password', 'password', '•••••••••••••••••••••')
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
  @import "../styles/blocks/form-elements.pcss";

  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("~images/bg/bg_welcome.jpg") 50%/cover no-repeat;
    position: relative;
    height: 100vh;

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

</style>