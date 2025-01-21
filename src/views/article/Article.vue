<template> 
  <NavBar />
  <Hero />
  <Trending />
  <Latest />
</template>

<script>
import Hero from './components/Hero.vue'
import Trending from './components/Trending.vue'
import Latest from './components/Latest.vue'
import NavBar from '../components/NavBar.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    Hero,
    Trending,
    Latest,
  },
}
</script>
