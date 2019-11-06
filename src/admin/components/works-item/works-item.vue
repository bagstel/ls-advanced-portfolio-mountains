<template lang="pug" src="./works-item.pug"></template>
<script src="./works-item.js"></script>
<style lang="postcss" scoped>
  .btn {
    &--edit {
      background-image: svg-load('pencil.svg', fill=blue, height=17px);
      background-position: center right;
      padding-right: 30px;
    }

    &--cross {
      background-image: svg-load('cross.svg', fill=red, height=15px);
      background-position: center right;
      padding-right: 30px;
    }
  }
</style>