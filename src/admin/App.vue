<template lang="pug">
  include ../blocks/form-elements.pug
  include ../blocks/button.pug
  .root-wrapper-container
    include ../blocks/login.pug
    include ../blocks/header-admin.pug
    include ../blocks/tabs.pug

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
  @import "./styles/*.pcss";

</style>