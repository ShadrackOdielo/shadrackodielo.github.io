<template>
    <section id="about" class="min-h-screen flex flex-col justify-center items-center text-center space-y-6 animate-fade-in">
      <div class="relative text-4xl md:text-6xl font-bold">
        <span class="absolute inset-0 text-gray-200 text-6xl md:text-9xl font-bold  -z-10">Who Am I</span>
        <span>About Me</span>
      </div>
      <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <NutxtImg src="/avatar.jpg" alt="Avatar" class="w-32 h-32 rounded-full border-4 border-blue-500"/>
        <div class="space-y-4 text-left">
          <p>I am a student ... passionate ... creative ...</p>
          <a href="/path-to-resume.pdf" class="btn-primary">Download My Resume</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  </style>
  