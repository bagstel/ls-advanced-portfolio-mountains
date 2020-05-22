<template lang="pug" src="./header.pug"></template>
<style lang="postcss" src="./header.pcss"></style>
<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('user', ['logoutUser']),
      async logoutTheUser () {
        await this.logoutUser();
        localStorage.removeItem('token');
        await this.$router.push('/login')
      }
    }
  }
</script>