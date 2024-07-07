<template>
  <section
    id="home"
    class="min-h-screen flex flex-col justify-center items-center text-center space-y-6 animate-fade-in bg-cover bg-center"
    :class="{
      'bg-home-bg-light': colorMode.value === 'light',
      'bg-home-bg-dark': colorMode.value === 'dark'
    }"
  >
    <h1 class="text-4xl md:text-6xl font-bold">Hi, I'm Shadrack Odielo</h1>
    <h2 class="text-2xl md:text-4xl font-light">Full Stack Web Developer and UX/UI Designer</h2>
    <div class="space-x-4">
      <UButton to="/path-to-resume.pdf">Resume</UButton>
      <a href="#contact" class="btn-secondary">Contact Me</a>
    </div>
    <div class="flex space-x-4 justify-center">
      <a href="https://twitter.com" target="_blank" class="text-gray-500 hover:text-blue-500">
        <UIcon name="i-fa-twitter" />
      </a>
      <a href="https://github.com" target="_blank" class="text-gray-500 hover:text-blue-500">
        <UIcon name="i-fa-github" />
      </a>
      <a href="https://linkedin.com" target="_blank" class="text-gray-500 hover:text-blue-500">
        <UIcon name="i-fa-linkedin" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">

const colorMode = useColorMode()
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}
.bg-home-bg-light {
  background-image: url('/img/homeBg.webp');
}
.bg-home-bg-dark {
  background-image: url('/img/homeBgDark.webp');
}
</style>
