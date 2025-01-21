<template>
  <nav
    :class="navBarClass">
    <!-- Left Section: Logo and Title -->
    <router-link to='/'>
    <div class="flex cursor-pointer items-center gap-[3.49px]">
      <img
        :src="`${logo}`"
        alt="Logo"
        class="h-8"
        :class="logoClass"
      />
      <span class="text-xl font-semibold" :class="logoClass">Deconverse</span>
    </div>
  </router-link>

    <!-- Right Section: Buttons -->
    <div class="flex items-center gap-4">
      <MyButton variant="outline"   :color="this.variant">Log In</MyButton>
      <MyButton variant="filled"  :color="this.variant" >Sign Up →</MyButton>

    </div>
  </nav>
</template>

<script>
  import MyButton from './MyButton.vue';
  export default {
    name: 'NavBar',
    props: {
      variant: {
        type: String,
        default: 'transparent',
        validator: value => ['white', 'transparent'].includes(value)
      },
    },
    components: {
      MyButton,
    },
    computed: {
      navBarClass() {
        const baseClasses = 'fixed inset-0 h-24 z-10 text-white py-6 px-16 flex justify-between items-center w-full';
        const variantClasses = this.variant === 'white' ? 'bg-white' : 'bg-transparent';
        return `${baseClasses} ${variantClasses}`;
      },
      logoClass() {
        return this.variant === 'white' ? 'text-[#028391]' : 'text-white';
      }
    },
    data() {
      const logo = this.variant === 'white' ? '/logo/logo-green.png' : '/logo/logo.png'
      return { logo };
    },
  }
</script>
