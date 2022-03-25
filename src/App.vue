<template>
<Navigation />
<div class="container">
  <router-view/>
</div>
<Footer />
</template>
<script lang="js">
import Navigation from '@/views/layout/components/Navigation.vue'
import Footer from '@/views/layout/components/Footer.vue'
export default{
  components: { Navigation, Footer}
}
</script>