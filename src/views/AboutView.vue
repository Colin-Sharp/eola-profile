<script>
import profileImage from '../assets/images/profile-image.png';
import childIcecream from '../assets/images/child-icecream.png';
import sasha from '../assets/images/SashaRetouchedFinal.png';
import sasha2 from '../assets/images/Изображение.png';
import colin from '../assets/images/colin.png';
import sunset from '../assets/images/sunset-paris.png';
import skills from '../assets/images/skills.png';
import rada from '../assets/images/Rada.png';
import beach from '../assets/images/beach.png';

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
      rada: rada,
      beach: beach
    }
  }
}
</script>


<template>
    <section class="bg-slate-50 px-5 md:px-20 md:py-10 pt-10 max-w-screen-xl h-full sm:mx-auto">
      <h1 class="text-7xl mb-20">About</h1>
      <article class="flex flex-col items-center lg:flex-row md:items-start">
        <img @contextmenu="$event.preventDefault()" class="object-cover lg:w-4/12 mb-8 lg:pt-5 lg:px-5 lg:mb-0" :src="profileImage" alt="">
        <div class="lg:ml-9 lg:w-7/12">
          <h4 class="text-4xl mb-3">Charlotte Zaboronok</h4>
          <p class="leading-8 lg:hidden">
            My career in the visual arts began early on, fueled by a passion for painting and an unwavering love for the art of storytelling. It was during my postgraduate diploma in Photography that I discovered the beauty and power of capturing moments and emotions through the lens.
            After completing my education, I delved into the world of photography, initially working for my college photo laboratory before securing my first job as a photographer at a studio specialising in family portraits. It wasn't long before I leaped to become an independent photographer, focusing on events, schools, and family portraits. My experiences in the field helped me hone my craft, sharpen my photographic terminology and techniques, and develop my keen eye for composition.
            More recently, I have shifted my focus to the art of retouching. I have always been fascinated by the ways in which post-processing techniques can influence the final result of an image, and I have dedicated myself to perfecting the art of high-end and product photo editing. Through my work as a retoucher, I have come to appreciate the importance of every pixel and the power of visual storytelling.
            Overall, my journey has been one of continual growth and exploration, driven by a deep passion for the visual arts. Whether behind the camera or in front of the computer screen, I am committed to using my skills and experience to create stunning, evocative images that capture the imagination and inspire the soul.
          </p>
          <div class="hidden lg:flex">
            <p class="leading-6">
              My career in the visual arts began early on, fueled by a passion for painting and an unwavering love for the art of storytelling. It was during my postgraduate diploma in Photography that I discovered the beauty and power of capturing moments and emotions through the lens.
              After completing my education, I delved into the world of photography, initially working for my college photo laboratory before securing my first job as a photographer at a studio specialising in family portraits. It wasn't long before I leaped to become an independent photographer, focusing on events, schools, and family portraits. My experiences in the field helped me hone my craft, sharpen my photographic terminology and techniques,
            </p> 
            <p class="leading-6 pl-8">
              and develop my keen eye for composition.
              More recently, I have shifted my focus to the art of retouching. I have always been fascinated by the ways in which post-processing techniques can influence the final result of an image, and I have dedicated myself to perfecting the art of high-end and product photo editing. Through my work as a retoucher, I have come to appreciate the importance of every pixel and the power of visual storytelling.
              Overall, my journey has been one of continual growth and exploration, driven by a deep passion for the visual arts. Whether behind the camera or in front of the computer screen, I am committed to using my skills and experience to create stunning, evocative images that capture the imagination and inspire the soul.
            </p>

          </div>
        </div>
      </article> 
      <h4 class="text-2xl mt-16 mb-8 font-bold">PHOTOGRAPHY</h4>
      <div class="flex flex-col items-center sm:items-center sm:flex-row sm:justify-between sm:flex-wrap">
        <div class="w-full sm:w-6/12 flex flex-col items-center sm:items-center sm:flex-row sm:flex-wrap sm:mb-4">
          <img @contextmenu="$event.preventDefault()" :src="colin" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pr-2 h-58" alt="">
          <img @contextmenu="$event.preventDefault()" :src="sasha2" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pl-2 h-58" alt="">
        </div>
        <div class="w-full sm:w-6/12 sm:pl-20 flex sm:justify-end sm:mb-4">
          <img @contextmenu="$event.preventDefault()" :src="sunset" class="object-cover mb-1 sm:mb-0 w-full h-58" alt="">
        </div>
       <div class="w-full sm:w-6/12 flex flex-col items-center sm:items-center sm:flex-row sm:flex-wrap">
          <img @contextmenu="$event.preventDefault()" :src="rada" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pr-2 h-58" alt="">
          <img @contextmenu="$event.preventDefault()" :src="sasha" class="object-cover w-full mb-1 sm:mb-0 sm:w-6/12 sm:pl-2 h-58" alt="">
        </div>
        <div class="w-full sm:w-6/12 sm:pl-20 flex sm:justify-end">
          <img @contextmenu="$event.preventDefault()" :src="childIcecream" class="object-cover mb-1 sm:mb-0 w-full h-58" alt="">
        </div>
      </div>
      <article>
        <h4 class="text-2xl my-16 mb-8 font-bold">SKILLS</h4>
        <div class="flex flex-wrap sm:justify-between sm:items-center">
          <ul class="mb-8 w-full sm:mx-auto sm:w-6/12 lg:w-4/12 lg:text-2xl list-disc pl-5 sm:pr-10">
            <li class="py-4 ">Product, Beauty, High-End Retouching</li>
            <li class="py-4 ">Awareness of current design trends</li>
            <li class="py-4 ">Nondestructive editing</li>
            <li class="py-4 ">Colour grading</li>
            <li class="py-4 ">Colour consistency across images</li>
            <li class="py-4 ">Butch photo processing.</li>
            <li class="py-4 ">Creating actions for Photoshop.</li>
          </ul>
          <img @contextmenu="$event.preventDefault()" class="object-cover w-full sm:w-6/12" :src="skills" alt="">
        </div>
      </article>
      <article class="flex flex-col sm:mt-20 sm:flex-row items-start pt-16">
        <div>
          <p class="mb-4">
            I wanted to take a moment to share with you why I pressed pause on my photography career and took an extended break from the creative grind.
            Somewhere along the way, I lost touch with my passion. I was exhausted, uninspired, and felt like I was just going through the motions without any real connection to my work. So, I give myself the time to reassess my goals and priorities. I decided to take a step back and focus on the administrative job. 
          </p>
          <p class="mb-4">
            The pandemic gave me a rare moment to self-reflect on what's truly important in life. It took a while for me to realize that pursuing a creative career in its best form is an option. During this break, I reignited my love for learning and creating. I realised that I don't have to limit myself to just one form of creative expression. Instead, I can explore different mediums and techniques, and create something truly unique and meaningful.
          </p>
          <p class="mb-4">
            Having diverse experience has been crucial in my journey as a creative. It's given me a unique perspective on art. I've been able to push the boundaries of what I can create, and develop a more well-rounded approach to my work. Overall, my diverse experience has helped me to become a more versatile and adaptable artist, capable of tackling a wide range of projects with confidence and creativity.
          </p>
          <p class="mb-4">
            Today, I'm constantly honing my retouching skills and searching for ways to optimize my craft. I'm thrilled to apply for the Photo Editor position, as I truly believe that my diverse experience, passion, and commitment to the arts make me an ideal candidate for this role.
            Thank you for taking the time to read this message. I look forward to hearing from you soon.
          </p>
          <p class="mb-4">
            Sincerely,
          </p>
          <p>
            Charlotte
          </p>
        </div>
        <img @contextmenu="$event.preventDefault()" class="object-cover mt-8 sm:mt-0 sm:ml-8 w-full sm:w-6/12" :src="beach" alt="">
        
      </article>
      <div class="flex justify-center py-32 ">
          <button class="my-10 rounded px-20 py-5 button">
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
    background: white;
    transition: background 50ms ease-out;
}
.button:hover {
    transition: background 50ms ease-out;
    background: #222222;
    color: #ffff;
}
</style>

