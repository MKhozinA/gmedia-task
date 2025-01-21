<template>
  <section class="py-16">
    <!-- Section Title -->
    <div class="container mx-auto px-6 mb-8">
      <h2 class="font-bold text-4xl text-[#028391]">Latest Articles</h2>
    </div>

    <!-- Card Layout -->
    <div class="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Loop through articles -->
      <div
        v-for="(article, index) in paginatedArticles"
        :key="index"
        class="bg-white p-6 rounded-lg shadow-lg"
      >
        <img :src="article.image" alt="Article" class="w-full h-48 object-cover rounded-md mb-4" />
        <div class="flex flex-col">
          <!-- Text Section -->
          <div class="flex items-center mb-4">
            <i class="fas fa-calendar text-black mr-2"></i>
            <span class="text-black text-sm">{{ article.date }}</span>
          </div>

          <h3 class="font-semibold text-xl text-black mb-2">{{ article.title }}</h3>
          <p class="text-sm text-black mb-2">{{ article.description }}</p>

          <div class="flex items-center mt-4">
            <img :src="article.authorImage" alt="author" class="rounded-full w-10 h-10 mr-3" />
            <span class="text-black">{{ article.author }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <!-- <div class="flex justify-center mt-8">
      <button
        @click="previousPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-[#028391] text-white rounded-l-md"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-[#028391] text-white rounded-r-md"
      >
        Next
      </button>
    </div> -->

    <PaginationPanel
      :value="currentPage"
      :max="totalPages"
      :min="1"
      class="flex justify-center mt-4"
      @update:value="handlePageChange"
    />
  </section>
</template>

<script>
import PaginationPanel from '../../components/PaginationPanel.vue'

// Helper function to generate random articles
function generateArticles(count) {
  const topics = ['Data Science', 'AI', 'Cloud Computing', 'Cybersecurity', 'Blockchain', 'DevOps', 'Web Development'];
  const authors = ['Maksym Ostrozhynskyy', 'Jane Doe', 'John Smith', 'Alice Johnson', 'Bob Brown', 'Maggie Taylor'];
  
  return Array.from({ length: count }, (_, i) => {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const randomDay = Math.floor(Math.random() * 30) + 1;
    
    return {
      image: `/latest-section/latest-1.png`,
      date: `${randomDay} May 2024`,
      title: `${randomTopic} Best Practices ${new Date().getFullYear()}`,
      description: `Latest insights and developments in ${randomTopic.toLowerCase()} for modern businesses.`,
      authorImage: '/hero/account.png',
      author: randomAuthor,
    };
  });
}

export default {
  components: {
    PaginationPanel,
  },
  data() {
    return {
      currentPage: 1,
      articles: generateArticles(22), // Generate 12 articles
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / 3)
    },
    paginatedArticles() {
      const start = (this.currentPage - 1) * 3
      return this.articles.slice(start, start + 3)
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },
    handlePageChange(newPage) {
      this.currentPage = newPage
    }
  },
}
</script>

<style scoped>
/* Styling for pagination buttons */
button:disabled {
  opacity: 0.5;
}

.pagination-panel :deep(button) {
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  background-color: #028391;
  color: white;
  border-radius: 0.375rem;
}

.pagination-panel :deep(button:disabled) {
  opacity: 0.5;
}

.pagination-panel :deep(span) {
  margin: 0 0.25rem;
}
</style>
