<template>
    <div class="bg-slate-50 h-full">
        <project-item></project-item>
    </div>
</template>


<script>
import ProjectItem from '../components/ProjectItem.vue';
export default {
    components: {
        'project-item': ProjectItem
    }
}
</script>