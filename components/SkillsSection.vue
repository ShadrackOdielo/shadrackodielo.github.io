<template>
    <section id="skills" class="min-h-screen flex flex-col justify-center items-center space-y-6 animate-fade-in">
      <h2 class="text-4xl font-bold">Skills</h2>
      <div class="flex flex-wrap justify-center space-x-4">
        <div class="tab" v-for="skill in skills" :key="skill.name">
          <UIcon :name="skill.icon" class="text-4xl"/>
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const skills = [
    { name: 'Python', icon: 'i-devicon-python' },
    { name: 'TypeScript', icon: 'i-devicon-typescript' },
    { name: 'JavaScript', icon: 'i-devicon-javascript' },
    { name: 'HTML5', icon: 'i-devicon-html5' },
    { name: 'CSS3', icon: 'i-devicon-css3' },
    { name: 'Figma', icon: 'i-devicon-figma' },
    { name: 'Vue', icon: 'i-devicon-vuejs' },
    { name: 'Nuxt', icon: 'i-devicon-nuxtjs' },
    { name: 'Angular', icon: 'i-devicon-angular' },
    { name: 'Django', icon: 'i-devicon-django' },
    { name: 'Kotlin', icon: 'i-devicon-kotlin' },
    { name: 'C', icon: 'i-devicon-c' },
  ]
  </script>
  
  <style scoped>
  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
  </style>
  