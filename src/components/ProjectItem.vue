
<template>
    <div>
        <section class="max-w-screen-xl bg-slate-50 h-screen pt-10 sm:mx-auto">
            <div v-if="projects" class="sm:mx-12">
                <div v-for="project in projects" :key="project.id">
                    <div v-if="currentId === project.id">
                        <div  class="flex pb-3 px-3 flex-wrap">
                            <div v-for="(image, index) in project.images" :key="index" :class="['sm:w-6/12', { 'sm:mr-10': (index === 0) && (project.images.length > 2) }, {'sm:pt-14': index > 1}]">
                                <p v-if="index === 0" class="mt-6 mb-2 font-bold">BEFORE</p>
                                <p v-if="index === 1" class="mt-6 mb-2 font-bold">AFTER</p>
                                <img :src="image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between px-3">
                    <button @click="previous()" class="my-10 rounded transition-all ease-in-out delay-150 px-3 sm:px-10 py-1 button">
                        <span class="text-2xl flex items-center" ><span class="text-3xl pb-1 sm:pr-2">&#8249;</span> <span class="hidden sm:block">Previous</span></span>
                    </button>
                    <button @click="next()" class="my-10 ml-2 rounded transition-all ease-in-out delay-150 px-3 sm:px-14 py-1 button">
                        <span class="text-2xl flex items-center"> <span class="hidden sm:block">Next</span> <span class="text-3xl pb-1 sm:pl-2">&#8250;</span></span>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import gingerBefore from '../assets/images/ginger-before.png';
import gingerRetouched from '../assets/images/ginger-retouched.png';
import parfumePinkAfter from '../assets/images/PerfumePinkB.png';
import parfumeBlueAfter from '../assets/images/PerfumeBlue.png';
import parfumeBlueBefore from '../assets/images/BluePorfumeOriginal.png';
import limeAndRed from '../assets/images/Lime-and-Red-v2.png';
import limeAndRedBefore from '../assets/images/Lime-and-Red-original.jpg';

import chanelretoched from '../assets/images/Chanelretoched.png';
import chanelOriginal from '../assets/images/ChanelOriginal.png';
import portraitAfter from '../assets/images/PortraitAfter.jpg';
import portraitBefore from '../assets/images/PortraitBefore.jpg';
import bagBefore from '../assets/images/Bag-before.jpeg';
import bagAfter from '../assets/images/Bag.jpeg';
import sashaBefore from '../assets/images/SashaOriginal.jpg';
import sashaAfter from '../assets/images/SashaRetouched.png';
import DetailsAfter from '../assets/images/DetailsAfter.jpg';
import DetailsBefore from '../assets/images/DetailsBefore.jpg';
import BeautyAfter from '../assets/images/BeautyAfter.jpg';
import BeautyBefore from '../assets/images/BeautyBefore.jpg';
import Bege from '../assets/images/BegeBefore.jpg';
import BegeAfter from '../assets/images/Bege.jpg';
import Stellary from '../assets/images/Stellary.jpg';
import StellaryOriginal from '../assets/images/StellaryOriginal.jpg';

export default {
   data() {
     return {
        projects: [
            {id: 1,
            images: [
                BeautyBefore,
                BeautyAfter
            ]},
            {id: 2,
            images: [
                parfumeBlueBefore,
                parfumeBlueAfter,
                parfumePinkAfter
            ]},
            {id: 3,
            images: [
                Bege,
                BegeAfter
            ]},
            {id: 4,
            images: [
                chanelOriginal,
                chanelretoched
            ]},
            {id: 5,
            images: [
                portraitBefore,
                portraitAfter
            ]},
            {id: 6,
            images: [
                bagBefore,
                bagAfter
            ]},
            {id: 7,
            images: [
                sashaBefore,
                sashaAfter
            ]},
            {id: 8,
            images: [
                DetailsBefore,
                DetailsAfter
            ]},
            
            {id: 9,
            images: [
                gingerBefore, 
                gingerRetouched
            ]},
            {id: 10,
            images: [
                limeAndRedBefore,
                limeAndRed
            ]},
            {id: 11,
            images: [
                StellaryOriginal,
                Stellary
            ]}
        ],
        currentId: null
     }
   },
   mounted() {
    this.currentId = parseInt(this.$route.params.id);
   },
   methods: {
    next() {
        if (this.currentId < this.projects.length) {
            this.$router.push({path: '/project/' + (this.currentId + 1)})
            this.currentId++
        } else {
            this.$router.push({path: '/project/1'})
            this.currentId = 1
        }
    },
    previous() {
        if (this.currentId > 1) {
            this.$router.push({path: '/project/' + (this.currentId - 1)});
            this.currentId--
        } else {
            this.$router.push({path: '/project/' + (this.projects.length)});
            this.currentId = this.projects.length;
        }
    }
   }
}
</script>

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
