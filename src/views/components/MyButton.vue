<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    variant: {
      type: String,
      default: 'filled',
      validator: value => ['filled', 'outline'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: value => ['white', 'transparent'].includes(value)
    }
  },
  computed: {
    buttonClass() {
      const baseClasses = 'px-4 py-2 rounded-[14px] text-lg cursor-pointer';
      const variantClasses = this.variant === 'filled' ? 'border-none' : 'bg-transparent border-2';
      const colorClasses = this.color === 'white' 
        ? this.variant === 'filled'  
          ? 'bg-[#028391]' 
          : 'text-[#028391] bg-none'
        : this.variant === 'filled' 
          ? 'bg-white border-none text-[#028391]' 
          : 'text-white border-white';

      return `${baseClasses} ${variantClasses} ${colorClasses}`;
    }
  }
}
</script>
 