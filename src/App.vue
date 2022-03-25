<template>
<Navigation />
  <router-view/>
<Footer />
</template>
<script lang="js">
import Navigation from '@/views/layout/components/Footer.vue'
import Footer from '@/views/layout/components/Footer.vue'
export default{
  components: { Navigation, Footer}
}
</script>