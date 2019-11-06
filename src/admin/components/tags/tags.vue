<template lang="pug">
  .tags
    ul.tags__list
      li(v-for="(tag, index) in tags" :key="tag").tags__item
        span {{ tag }}
        button(v-if="tagButton" type="button" @click="delTag(index)").btn.btn--cross
</template>

<script>
  export default {
    name: 'tags',
    props: ['techs', 'tagButton'],
    data() {
      return {
        tags: [],
      }
    },
    methods: {
      delTag(index) {
        this.tags.splice(index, 1);
        this.$emit('updateTag', this.tags.join(','));
      }
    },
    created() {
      if (this.techs.length > 0) {
        this.tags =  this.techs.split(',');
      }
    },
    watch: {
      techs() {
        this.tags = this.techs.split(',');
      }
    }
  };
</script>

<style lang="postcss" scoped>
  .tags {
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin-top: -9px;
      margin-left: -9px;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f1f4f9;
      color: rgba($tags-color, .7);
      font-size: 15px;
      font-weight: 600;
      line-height: 31px;
      border-radius: 22px;
      padding: 0 15px 0 15px;
      margin: 9px 0 0 9px;
      white-space: nowrap;
      min-height: 31px;
    }
  }

  .btn {
    height: 10px;
    width: 10px;

    &--cross {
      background-image: svg-load('cross.svg', fill=#000, height=10px);
      background-position: right center;
      margin-left: 15px;
    }
  }

  figcaption {
    .tags__item {
      background-color: #fff;
    }
  }

</style>