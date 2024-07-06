<template>
    <section id="experience" class="min-h-screen flex flex-col justify-center items-center space-y-6 animate-fade-in">
      <h2 class="text-4xl font-bold">Experience</h2>
      <div class="space-y-4 text-left">
        <div>
          <h3 class="text-xl font-bold">JKUAT</h3>
          <p>BSc. I.T, 2021 - Present</p>
        </div>
        <div>
          <h3 class="text-xl font-bold">ALX</h3>
          <p>Software Engineering, 2022 - 2023</p>
        </div>
        <div>
          <h3 class="text-xl font-bold">AWS Cloud</h3>
          <p>2023 - Present</p>
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
  