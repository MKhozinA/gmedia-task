<template>
  <section class="relative  text-white py-16" style="background: url('/hero/hero-bg.svg') no-repeat center center/cover;">
    <!-- Wrapper -->
    <img
      src="/hero/bg-hero.png"
      alt="author"
      class="absolute w-[360px] h-[244px] object-contain rounded-lg inset-0 -translate-x-[96px] -translate-y-[12px] opacity-50"
    />
    <div class="flex flex-col items-center justify-center gap-8 w-full px-6 mx-auto">
      <!-- Title & Subtitle -->
      <div
        class="flex flex-col justify-center items-center gap-2 w-full max-w-[1440px] px-10 py-10"
      >
        <h1
          class="font-semibold text-2xl md:text-4xl leading-[40px] tracking-[-0.005em] text-center"
        >
          {{ title }}
        </h1>
        <p class="font-semibold text-lg md:text-2xl leading-[32px] tracking-[-0.02em] text-center">
          {{ name }}
        </p>
      </div>

      <!-- Box -->
      <router-link :to="`/article/${name}`">
        <div
          class="flex flex-col md:flex-row items-start gap-20 w-full max-w-[1440px] bg-white shadow-md rounded-lg px-16 py-16"
        >
          <!-- Gambar -->
          <div class="relative w-[360px] h-[244px]">
            <img
              src="/hero/background.png"
              alt="author"
              class="absolute w-[360px] h-[244px] object-cover rounded-lg"
            />
            <img
              src="/hero/bg-content.png"
              alt="content"
              class="absolute w-[328px] h-[188px] object-cover rounded-lg top-[44px] left-[16px]"
            />
          </div>

          <!-- Konten -->
          <div class="flex flex-col gap-4 w-[832px] h-[244px]">
            <!-- Tanggal -->
            <div class="flex items-center gap-2 text-black">
              <i class="fas fa-calendar"></i>
              <span>Today</span>
            </div>

            <!-- Judul -->
            <h2
              class="font-semibold text-xl md:text-2xl leading-[40px] tracking-[-0.005em] text-[#303030]"
            >
              Use of Hostinger dbt (data build tool): Enhancing data accuracy and providing insights
              for growth
            </h2>

            <!-- Deskripsi -->
            <p class="text-base leading-[28px] tracking-[0.01em] text-[#303030] line-clamp-2">
              Our Data Platform Team participated in Coalesce 2024, Las Vegas, the premier conference
              for analytics engineers. Coalesce brings together data practitioners to sharpen their
              skills, connect with peers, a...
            </p>

            <!-- Penulis -->
            <div class="flex items-center gap-4">
              <img src="/hero/account.png" alt="author" class="w-10 h-10 rounded-full" />
              <span class="text-[#303030]">Maksym Ostrozhynskyy</span>
            </div>
          </div>

      </div>
    </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  setup() {
    const name = 'Enhance your English learning journey with curated tips, guides, and inspiring stories designed to help you grow.';  // You can now use this in the template
    const title = 'Deconvers Articles'
    return { name, title };
  },
};


</script>
