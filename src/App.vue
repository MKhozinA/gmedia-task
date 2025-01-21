<template>
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>

<script>
import FooterSection from './views/components/Footer.vue' 

export default {
  name: 'App',
  components: { 
    FooterSection,
  },
}
</script>
