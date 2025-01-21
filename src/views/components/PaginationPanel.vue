<template>
  <div class="pagination-panel">
    <button @click="prevPage" :disabled="value <= min">Previous</button>
    <template v-for="page in pages" :key="page">
      <PaginationButton
        v-if="page !== '...' && page !== value"
        :value="page"
        @click="goToPage(page)"
      />
      <span v-else-if="page === '...'">...</span>
    </template>
    <button @click="nextPage" :disabled="value >= max">Next</button>
  </div>
</template>

<script>
import PaginationButton from './PaginationButton.vue';

export default {
  components: {
    PaginationButton,
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pages() {
      // get first 2, last 2, and current page - 1 and +1, make sure it doesn't overlap

      const pagesArray = [];
      pagesArray.push(this.min);
      if (this.value - 1 > this.min + 1) {
        pagesArray.push('...');
      }
      if (this.value - 1 >= this.min + 1) {
        pagesArray.push(this.value - 1);
      }
      if (this.value !== this.min && this.value !== this.max) {
        pagesArray.push(this.value);
      }
      if (this.value + 1 <= this.max - 1) {
        pagesArray.push(this.value + 1);
      }
      if (this.value + 1 < this.max - 1) {
        pagesArray.push('...');
      }
      pagesArray.push(this.max);
      
        return pagesArray;
    },
  },
  methods: {
    goToPage(page) {
      this.$emit('update:value', page);
    },
    nextPage() {
      if (this.value < this.max) {
        this.goToPage(this.value + 1);
      }
    },
    prevPage() {
      if (this.value > this.min) {
        this.goToPage(this.value - 1);
      }
    },
  },
};
</script>

<style scoped>
.pagination-panel {
  display: flex;
  align-items: center;
}
</style>