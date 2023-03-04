<script>
import profileImage from '../assets/images/profile-image.png';
import childIcecream from '../assets/images/child-icecream.png';
import sasha from '../assets/images/SashaRetouchedFinal.png';
import sasha2 from '../assets/images/Изображение.png';
import colin from '../assets/images/colin.png';
import sunset from '../assets/images/sunset-paris.png';
import skills from '../assets/images/skills.png';
import rada from '../assets/images/Rada.png'

export default {
  data(){
    return {
      profileImage: profileImage,
      colin: colin,
      sasha2: sasha2,
      sasha: sasha,
      childIcecream: childIcecream,
      sunset: sunset,
      skills: skills,
      rada: rada
    }
  }
}
</script>


<template>
    <section class="bg-slate-50 px-5 md:p-20 pt-20 max-w-screen-xl h-full sm:mx-auto">
      <h1 class="text-7xl mb-20">About</h1>
      <article class="flex flex-col items-center lg:flex-row md:items-start">
        <img class="object-cover lg:w-5/12 mb-8 lg:mb-0" :src="profileImage" alt="">
        <div class="lg:pl-20 lg:w-5/12">
          <h4 class="text-4xl mb-3">Charlotte Zaboronok</h4>
          <p class="leading-8 text-lg">
            As long as I can remember I have always been passionate about painting and visual arts. 
            In my school years, I attended art classes, and I decided to study Photography for my postgraduate diploma.
            I found Photography to be a beautiful way of painting with light. Later I discovered post-processing as 
            its own form of art, with so many ways of influencing the final result of the image.
            <br>
            I started my career in the photography industry in the last months of College. First, I worked for my 
            college photo laboratory, and after graduation, I got my first job as a photographer in the family photo 
            studio. After working there for six months I moved to work as an independent photographer for 3 Years. 
            Mainly focusing on events, schools, and family portraits. My Experience in the industry helped me 
            become confident with high-level photographic techniques and styles.
          </p>
        </div>
      </article> 
      <h4 class="text-2xl mt-8 mb-3">PHOTOGRAPHY</h4>
      <div class="flex flex-col items-center sm:items-center sm:flex-row sm:flex-wrap">
        <div class="w-full sm:w-7/12 flex flex-col items-center sm:items-center sm:flex-row sm:flex-wrap md:mb-4">
          <img :src="colin" class="object-cover mb-1 md:mb-0 w-full sm:w-6/12 sm:px-1 md:pr-6 md:pl-0 sm:mb-2 h-58" alt="">
          <img :src="sasha2" class="object-cover mb-1 md:mb-0 w-full sm:w-6/12 sm:px-1 md:px-3 sm:mb-2 h-58" alt="">
        </div>
        <div class="w-full sm:w-5/12 md:mb-4">
          <img :src="sunset" class="object-cover mb-1 md:mb-0 w-full sm:px-1 sm:mb-2 md:pl-4 h-58" alt="">
        </div>
       <div class="w-full sm:w-7/12 flex flex-col items-center sm:items-center sm:flex-row sm:flex-wrap md:mb-4">
          <img :src="rada" class="object-cover mb-1 w-12/12 sm:w-6/12 sm:px-1 md:pl-0 md:pr-6 h-58" alt="">
          <img :src="sasha" class="object-cover mb-1 w-12/12 sm:w-6/12 sm:px-1 md:px-3 h-58" alt="">
        </div>
        <div class="w-full sm:w-5/12 md:mb-4">
          <img :src="childIcecream" class="object-cover mb-1 md:mb-0 w-full sm:px-1 sm:mb-2 md:pl-4 h-58" alt="">
        </div>
      </div>
      <article>
        <h4 class="text-2xl mt-8 mb-3">SKILLS</h4>
        <div class="flex flex-wrap sm:items-center">
          <ul class="mb-8 w-full sm:w-6/12 list-disc pl-5 sm:pr-10">
            <li class="py-4 lg:py-8">Colour consistency across images</li>
            <li class="py-4 lg:py-8">matching digital to physical samples</li>
            <li class="py-4 lg:py-8">adjusting imagery from different cameras and settings</li>
            <li class="py-4 lg:py-8">Photo processing portraits and group photos</li>
            <li class="py-4 lg:py-8">Framing, Retouching.</li>
            <li class="py-4 lg:py-8">Butch photo processing.</li>
            <li class="py-4 lg:py-8">Creating actions for Photoshop.</li>
          </ul>
          <img class="object-cover w-full sm:w-6/12" :src="skills" alt="">
        </div>
      </article>
      <div class="flex justify-center py-32 ">
          <button class="my-10 rounded px-10 py-1 button">
              <RouterLink class="text-2xl flex items-center" to="/">Get in Touch</RouterLink>
          </button>
      </div>
    </section>
</template>

<style scoped>

section {
  height: 100%;
}
.button {
    border: 2px solid #222222;
}
.button:hover {
    background: #222222;
    color: #ffff;
}
</style>

