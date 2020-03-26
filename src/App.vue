<template>
  <div>
  <router-view/>
  <footer-guide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
        name: "",
      components:{
        FooterGuide
      }
    }
</script>

<style scoped style="stylus" rel="stylesheet/stylus">

</style>
