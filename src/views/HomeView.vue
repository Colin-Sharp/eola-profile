<template>
  <main>
    <section class="flex flex-col items-center mt-10 sm:flex-row flex-wrap max-w-screen-xl sm:mx-auto">
      <div v-for="(image, index) in images" :key="index" class="wrapper w-full h-96 sm:w-6/12 md:w-4/12 lg:w-3/12 md:mb-6">
        <div :class="[image, 'md:w-11/12 mx-auto bg-cover w-full h-full']">
          <RouterLink :to="'/project/' + (index + 1)" class="link-cover transition-all ease-in-out delay-150 bg-stone-900 bg-opacity-50 lg:bg-opacity-0 hover:bg-stone-900  hover:bg-opacity-50 bg-cover w-full md:w-11/12 group">
            <p
            class="flex lg:opacity-0 transition-all ease-in-out delay-150 text-2xl bg-opacity-50 w-full group-hover:opacity-100 justify-center uppercase text-slate-50 "
              >Veiw Project
          </p>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  data(){
    return {
      images: [
        'bg-Beauty',
        'bg-perfumeBlueAfter',
        'bg-Bege',
        'bg-Chanelretoched',
        'bg-PortraitAfter',
        'bg-bag',
        'bg-sasha',
        'bg-detailsAfter',
        'bg-ginger',
        'bg-limeAndRed',
        'bg-Stellary'
      ]
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
  top: 0;
  padding-top: 60%;
  height: 100%;
}

</style>
