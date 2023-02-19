<script>
import profileImage from '../assets/images/profile-image.png';
import childIcecream from '../assets/images/child-icecream.jpeg'
import popeStatue from '../assets/images/pope-statue.png'
import sasha from '../assets/images/SashaRetouchedFinal.png'
import sunset from '../assets/images/sunset-paris.jpeg'
import trees from '../assets/images/trees.jpeg'
export default {
  data(){
    return {
      profileImage: profileImage,
      image1: sasha,
      image2: popeStatue,
      image3: childIcecream,
      image4: sunset,
      image5: trees
    }
  }
}
</script>


<template>
    <section class="bg-slate-50 px-5 md:px-20 pt-20 max-w-screen-xl h-screen sm:mx-auto">
      <h1 class="text-7xl mb-20">About</h1>
      <article class="flex flex-col items-center md:flex-row md:items-start">
        <img class="object-cover h-59 w-96 mb-10" :src="profileImage" alt="">
        <div class="md:pl-20">
          <h2 class="text-6xl mb-3">Eola</h2>
          <p class="leading-8 text-xl">As long as I can remember, I  have always been passionate about visual arts. I choose Photography for my postgraduate diploma. In the last months of College, I got my first job as a photographer in the studio, and I continued working as a photographer for 3 Years combining work as a freelancer and employee in the studio. 
             During this time I gain good working experience and confidence in: 
            <br>
            -high-level photographic discussion in a range of photographic techniques and styles. 
            Colour consistency across images
            matching digital to physical samples
            adjusting imagery from different cameras and settings
            Photo processing portraits and group photos
            Framing, Retouching, 
            Butch photo processing 
            Creating actions for Photoshop.
            In recent years I dedicated my focus to retouching. I improved my knowledge in hi-end and learn product retouching</p>
      </div>
      </article> 
      <div class="flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap">
        <img :src="image3" class="pb-3 object-cover w-12/12 sm:w-3/12 sm:px-3 sm:pb-0" alt="">
        <img :src="image5" class="pb-3 object-cover w-12/12 sm:w-3/12  sm:px-3 sm:pb-0" alt="">
        <img :src="image4" class="pb-3 object-cover w-12/12 sm:w-3/12  sm:px-3 sm:pb-0" alt="">
        <div class="flex w-12/12 sm:w-3/12 h-58 justify-center sm:px-3">
          <img :src="image1" class="object-cover pb-3 pr-3 w-6/12 h-58" alt="">
          <img :src="image2" class="object-cover pb-3 w-6/12 h-58" alt="">
        </div>
      </div>
    </section>
</template>

