<template>
  <header class="border-b-2 border-slate-500 bg-slate-50">
    <div class="flex justify-between mx-5 max-w-screen-xl px-3 sm:mx-auto items-center h-24">
      <RouterLink  class="text-2xl font-bold" to="/">Charlotte</RouterLink>
      <nav>
        <RouterLink class="link" to="/">Portfolio</RouterLink>
        <RouterLink class="link px-2 sm:px-10" to="/about">About</RouterLink>
        <RouterLink class="link" to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

