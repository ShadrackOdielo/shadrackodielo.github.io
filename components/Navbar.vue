<template>
    <header class="fixed w-full z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <!-- Logo / Name -->
        <div class="flex-shrink-0">
          <NuxtLink :to="homeLink" class="flex items-center">
            <img v-if="isHomeSection" src="/avatar.jpg" alt="Avatar" class="h-8 w-8 rounded-full">
            <span v-else class="text-xl font-bold dark:text-white">Shadrack Odielo</span>
          </NuxtLink>
        </div>
        <!-- Links for larger screens -->
        <div class="hidden md:flex space-x-4">
          <a v-for="link in links" :key="link.id" :href="link.href" class="text-gray-800 dark:text-white hover:text-blue-500" :class="{'underline': activeSection === link.id}">{{ link.name }}</a>
          <NuxtLink to="/blog" class="text-gray-800 dark:text-white hover:text-blue-500">Blog</NuxtLink>
         <ColorModeToggle/>
        </div>
        <!-- Mobile menu button-->
        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-800 dark:text-white hover:text-blue-500">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </nav>
      <!-- Mobile menu-->
      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a v-for="link in links" :key="link.id" :href="link.href" class="block text-gray-800 dark:text-white hover:text-blue-500">{{ link.name }}</a>
          <NuxtLink to="/blog" class="block text-gray-800 dark:text-white hover:text-blue-500">Blog</NuxtLink>
          <ColorModeToggle />
        </div>
      </div>
      <div class="h-1 bg-blue-500" :style="{ width: progress + '%' }"></div>
    </header>
  </template>
  
  <script setup lang="ts">
  
  const isOpen = ref(false)
  const route = useRoute()
  
  const isHomeSection = ref(true)
  const activeSection = ref('')
  const progress = ref(0)
  
  const links = [
    { id: 'home', name : 'home',  href: '#'},
    { id: 'about', name: 'About', href: '#about' },
    { id: 'work', name: 'Work', href: '#work' },
    { id: 'skills', name: 'Skills', href: '#skills' },
    { id: 'experience', name: 'Experience', href: '#experience' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ]
  
  const homeLink = computed(() => {
    return route.path === '/' ? '#' : '/'
  })
  
  
  const handleScroll = () => {
    isHomeSection.value = window.scrollY < window.innerHeight
    progress.value = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  
    const sections = links.map(link => document.getElementById(link.id))
    sections.forEach(section => {
      if (section && section.getBoundingClientRect().top <= window.innerHeight / 2 && section.getBoundingClientRect().bottom >= window.innerHeight / 2) {
        activeSection.value = section.id
        if (route.path === '/') {
          history.replaceState(null, '', `#${section.id}`)
        }
      }
    })
  }
  
  const observeSections = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
          if (route.path === '/') {
            history.replaceState(null, '', `#${entry.target.id}`)
          }
        }
      })
    }, { threshold: 0.5 })
  
    links.forEach(link => {
      const section = document.getElementById(link.id)
      if (section) {
        observer.observe(section)
      }
    })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    observeSections()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  