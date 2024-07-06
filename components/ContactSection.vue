<template>
    <section id="contact" class="min-h-screen flex flex-col justify-center items-center space-y-6 animate-fade-in">
      <h2 class="text-4xl font-bold">Contact</h2>
      <div class="card bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 class="text-2xl font-bold">Get in Touch</h3>
        <p>If you'd like to talk about a project or just say hi, I'd love to hear from you.</p>
        <a href="mailto:your-email@example.com" class="btn-primary">Send Email</a>
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
  