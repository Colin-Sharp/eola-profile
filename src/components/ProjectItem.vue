
<template>
    <section class="max-w-screen-xl sm:mx-auto">
        <div v-if="projects">
            <div v-for="(project, index) in projects" :key="index">
                <div v-if="currentId === project.id">
                    <h1 class="text-7xl pl-3 my-10 text-white">{{project.title}}</h1>
                    <div class="flex px-3">
                        <img class="w-6/12" :src="project.deforeImage" alt="">
                        <img class="w-6/12 pl-3" :src="project.afterImage" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>


<script>
import dummyImage from '../assets/images/profile-image.png'

export default {
   data() {
     return {
        projects: [
            {id: 1,
            deforeImage: dummyImage,
            afterImage: dummyImage,
            text: 'this if for project',
            title: 'Project'},
            {id: 2,
            deforeImage: dummyImage,
            afterImage: dummyImage,
            text: 'this if for project',
            title: 'Project'},
            {id: 3,
            deforeImage: dummyImage,
            afterImage: dummyImage,
            text: 'this if for project',
            title: 'Project'}
        ],
        currentId: 1
     }
   },
   mounted() {
    this.currentId = parseInt(this.$route.params.id);
   }
}
</script>

