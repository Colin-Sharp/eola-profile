
<template>
    <div>
        <section class="max-w-screen-xl pt-20 sm:mx-auto">
            <div v-if="projects">
                <div v-for="(project, index) in projects" :key="index">
                    <div v-if="currentId === project.id">
                        <div v-for="image in project.images" :key="image.id" class="flex pb-3 px-3">
                            <img class="w-6/12" :src="image.deforeImage" alt="">
                            <img class="w-6/12 pl-3" :src="image.afterImage" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <button class="my-10 border-2 text-slate-50 border-slate-900 bg-slate-900 rounded ml-8 px-6 py-2 hover:bg-slate-50 hover:text-slate-900">
                <RouterLink class="text-2xl flex items-center" to="/"><span class="text-4xl pb-1 pr-1">&#8249;&#8249;</span> <span>BACK</span></RouterLink>
            </button>
        </section>
    </div>
</template>


<script>
import gingerBefore from '../assets/images/ginger-before.jpg'
import gingerRetouched from '../assets/images/ginger-retouched.png'
import parfumeBlueBefore from '../assets/images/ParfumePink-before.png'
import parfumeBlueAfter from '../assets/images/ParfumeBlue-after.png'
import parfumeYellow from '../assets/images/ParfumeYellow.png'
export default {
   data() {
     return {
        projects: [
            {id: 1,
            images: [{
                id: 1,
                deforeImage: gingerBefore,
                afterImage: gingerRetouched,
            }],
            text: 'this if for project',
            title: 'Project'},
            {id: 2,
            images: [{
                id: 1,
                deforeImage: parfumeBlueBefore,
                afterImage: parfumeBlueAfter,
            },
            {
                id: 2,
                deforeImage: parfumeBlueBefore,
                afterImage: parfumeYellow,
            }],
            text: 'this if for project',
            title: 'Project'},
        ],
        currentId: 1
     }
   },
   mounted() {
    this.currentId = parseInt(this.$route.params.id);
   }
}
</script>

<style scoped>

.arrows {
    fill: white;
}
.arrows:hover {
    fill: black;
}
</style>
