<template>
  <NavBar variant="white"/>
  <div>
    <h1>Detail Article</h1>
  </div>
  <div class="min-h-screen">
    <!-- Article Title -->
    <div class="container mx-auto px-6 mt-8">
      <h2 class="font-bold text-4xl text-[#028391]">Article Title</h2>
      </div>

    <!-- Article Content -->
    <article>
      <div class="container mx-auto px-6 mt-8">
        <div class="flex flex-col gap-4">
          <!-- Date -->
          <div class="flex items-center gap-2 text-black">
            <i class="fas fa-calendar"></i>
            <span>Today</span>
          </div>
          <!-- Title -->
          <h2 class="font-semibold text-xl md:text-2xl leading-[40px] tracking-[-0.005em] text-[#303030]">
            Use of Hostinger dbt (data build tool): Enhancing data accuracy and providing insights for growth
          </h2>
          <!-- Description -->
          <p class="text-base leading-[28px] tracking-[0.01em] text-[#303030] line-clamp-2">
            Our Data Platform Team participated in Coalesce 2024, Las Vegas, the premier conference for analytics engineers. Coalesce brings together data practitioners to sharpen their skills, connect with peers, a...
          </p>
          <!-- Author -->
          <div class="flex items-center gap-4">
            <img   alt="author" class="rounded-full w-10 h-10" />
            <span class="text-black ">Author Name</span>
          </div>
        </div>
      </div>

    </article>
  </div>
  <Related />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Related from './components/Related.vue'

export default {
  name: 'DetailArticle',
  components: {
    NavBar,
    Related,
  },
}
</script>
