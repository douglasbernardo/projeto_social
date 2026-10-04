<template>
  <Home />
  <section v-for="link in links" :id="link.id" :key="link.id">
    <component :is="link.component" />
  </section>
</template>

<script setup>
import TimeLineObjetivos from '~/components/TimeLineObjetivos.vue'
import Projetos from '~/components/Projetos.vue'
import Footer from '~/components/Footer.vue'

const links = [
  { id: 'Objetivo', title: 'Objetivo', component: TimeLineObjetivos },
  { id: 'Projetos+', title: 'Projetos+', component: Projetos },
  { id: 'Contato', title: 'Contato', component: Footer },
]
</script>
