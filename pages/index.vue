<template>
    <div>
      <HomeSection />
      <AboutSection />
      <WorksSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  </template>
  
  <script setup>
  import HomeSection from '~/components/HomeSection.vue'
  import AboutSection from '~/components/AboutSection.vue'
  import WorksSection from '~/components/WorksSection.vue'
  import SkillsSection from '~/components/SkillsSection.vue'
  import ExperienceSection from '~/components/ExperienceSection.vue'
  import ContactSection from '~/components/ContactSection.vue'
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
  