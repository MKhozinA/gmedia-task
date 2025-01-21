<template>
  <button
    :class="['pagination-button', { active: isActive }]"
    @click="$emit('click')"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.pagination-button {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 0.375rem;
  background-color: #028391;
  color: white;
}

.active {
  background-color: #015761;
}
</style>