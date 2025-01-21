<template>
  <NavBar variant="white"/>
    <Content />
  <Related />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Content from './components/Content.vue';
import Related from './components/Related.vue'

export default {
  name: 'DetailArticle',
  components: {
    NavBar,
    Related,
    Content,
  },
}
</script>
