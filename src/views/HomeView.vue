<template>
  <main>
    <section class="flex flex-col mt-10 sm:flex-row flex-wrap max-w-screen-xl sm:mx-auto">
      <div class="wrapper px-3 pt-3 w-full sm:w-6/12">
        <img :src="image1" alt="" class="w-full">
        <div class="link-cover hover:bg-stone-900 hover:bg-opacity-50 bg-cover w-full group">
          <RouterLink
            class="hidden text-2xl bg-opacity-50 w-full group-hover:flex justify-center items-center uppercase text-slate-50"
            :to="'/project/' + 1"
            >Veiw Progect</RouterLink>
        </div>
      </div>
      <div class="wrapper px-3 pt-3 w-full sm:w-6/12">
        <img :src="image2" alt="" class="w-full">
        <div class="link-cover hover:bg-stone-900 hover:bg-opacity-50 bg-cover w-full group">
          <RouterLink
            class="hidden text-2xl bg-opacity-50 w-full group-hover:flex justify-center items-center uppercase text-slate-50"
            :to="'/project/' + 2"
            >Veiw Progect</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ginger from '../assets/images/ginger-retouched.png';
import parfumeBlue from '../assets/images/ParfumeBlue.png'

export default {
  data(){
    return {
      image1: ginger,
      image2: parfumeBlue
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
}

.link-cover {
  position: absolute;
  top: 12px;
  padding-top: 60%;
  height: 100%;
}

</style>
