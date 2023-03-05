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
          <p class="leading-8 text-">
            I started my career in the photo industry in the last months of College. First, I worked for my college 
            photo laboratory, and after graduation, I got my first job as a photographer in the family photo studio. 
            Soon after, I moved to work as an independent photographer, mainly focusing on events, schools, and family 
            portraits. My Experience in the industry helped me become confident with high-level photographic terminology 
            and techniques. In recent years I dedicated my focus to retouching as a career. I improved my knowledge in 
            high-end and product photo editing.
          </p>
        </div>
      </article> 
      <h4 class="text-2xl mt-8 mb-3">PHOTOGRAPHY</h4>
      <div class="flex flex-col items-center sm:items-center sm:flex-row sm:justify-between sm:flex-wrap">
        <div class="w-full sm:w-6/12 flex flex-col items-center sm:items-center sm:flex-row sm:flex-wrap sm:mb-4">
          <img :src="colin" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pr-2 h-58" alt="">
          <img :src="sasha2" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pl-2 h-58" alt="">
        </div>
        <div class="w-full sm:w-5/12 flex sm:justify-end sm:mb-4">
          <img :src="sunset" class="object-cover mb-1 sm:mb-0 w-full h-58" alt="">
        </div>
       <div class="w-full sm:w-6/12 flex flex-col items-center sm:items-center sm:flex-row sm:flex-wrap">
          <img :src="rada" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pr-2 h-58" alt="">
          <img :src="sasha" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pl-2 h-58" alt="">
        </div>
        <div class="w-full sm:w-5/12 flex sm:justify-end">
          <img :src="childIcecream" class="object-cover mb-1 sm:mb-0 w-full h-58" alt="">
        </div>
      </div>
      <article>
        <h4 class="text-2xl mt-8 mb-3">SKILLS</h4>
        <div class="flex flex-wrap sm:justify-between sm:items-center">
          <ul class="mb-8 w-full sm:mx-auto sm:w-6/12 lg:w-4/12 lg:text-2xl list-disc pl-5 sm:pr-10">
            <li class="py-4 lg:py-8">Product, Beauty, High-End Retouching</li>
            <li class="py-4 lg:py-8">Awareness of current design trends</li>
            <li class="py-4 lg:py-8">Nondestructive editing</li>
            <li class="py-4 lg:py-8">Colour grading</li>
            <li class="py-4 lg:py-8">Colour consistency across images</li>
            <li class="py-4 lg:py-8">Butch photo processing.</li>
            <li class="py-4 lg:py-8">Creating actions for Photoshop.</li>
          </ul>
          <img class="object-cover w-full sm:w-6/12" :src="skills" alt="">
        </div>
      </article>
      <div class="flex justify-center py-32 ">
          <button class="my-10 rounded px-10 py-1 button">
              <RouterLink class="text-2xl flex items-center" to="/contact">Get in Touch</RouterLink>
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

