<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="border-b-2 border-black">
    <div class="flex justify-between mx-5 sm:mx-10  items-center h-24">
      <RouterLink  class="text-2xl" to="/">Eola</RouterLink>
      <nav>
        <RouterLink to="/">Portfolio</RouterLink>
        <RouterLink class="px-2 sm:px-10" to="/about">About</RouterLink>
        <RouterLink  to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
