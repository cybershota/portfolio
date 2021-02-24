<template>
  <div class="wrapper-small md:px-10">
    <div class="text-center mt-2 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">My Recent Work.</h3>
    </div>

    <div v-for="project of projects" :key="project.slug">
      <Projects
        :slug="project.slug"
        :thumbnail="project.thumbnail"
        :livedemo="project.livedemo"
        :sourcecode="project.sourcecode"
        :title="project.title"
        :description="project.description"
        :hashtag="project.hashtag"
      />
    </div>
  </div>
</template>

<script>
import Projects from '../components/Projects.vue';
export default {
  components: {
    Projects,
  },

  methods: {},

  async asyncData({ $content }) {
    const projects = await $content('project').fetch();
    return {
      projects,
    };
  },
};
</script>

<style></style>
