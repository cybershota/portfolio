<template>
  <div class="wrapper-small my-5">
    <div class="project-card md:flex mt-8">
      <div class="img max-w-lg md:max-w-sm  mx-auto">
        <img :src="thumbnail" class="rounded-xl" alt="" />
      </div>
      <div class="flex flex-col justify-between max-w-lg mx-auto">
        <div class="txt md:px-5 lg:px-0">
          <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
          <h4 class="font-semibold text-primary">{{ hashtag }}</h4>
          <p class="text-base text-gray-700 my-3">
            {{ description }}
          </p>
        </div>
        <div>
          <div class="md:px-5 lg:px-0 py-3">
            <a
              :href="livedemo"
              target="_blank"
              class="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm text-gray-200 font-semibold font-medium rounded-full"
              >Live Demo</a
            >
            <a :href="sourcecode" target="_blank" class="ml-6 text-indigo-600 hover:underline"
              >Source Code</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: ['title', 'description', 'slug', 'thumbnail', 'livedemo', 'sourcecode', 'hashtag'],
};
</script>

<style></style>
