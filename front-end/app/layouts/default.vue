<template>
  <v-app>
    <v-app-bar>
      <v-btn @click="router.push('/souMais')" color="purple" size="x-large"> 
        <p class="text-capitalize font-weight-bold">Sou+</p>
      </v-btn>

      <v-spacer />

      <!-- Conecta o v-model -->
      <v-tabs
        hide-slider
        v-model="activeTab"
        align-tabs="center"
        color="grey-darken-2"
      >
        <v-tab
          v-for="link in links"
          :key="link.id"
          :value="link.id"
          :text="link.title"
        ></v-tab>
      </v-tabs>
      <v-tab class="bg-purple pa-2 ma-2" to="/voluntario">Faça parte</v-tab>
      <v-tab class="bg-purple pa-2 ma-2" to="/souMais">Raízes da Sou+</v-tab>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <NuxtPage/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import TimeLineObjetivos from '~/components/TimeLineObjetivos.vue'
import Projetos from '~/components/Projetos.vue'
import Footer from '~/components/Footer.vue'
import SouMaisONG from '~/components/SouMais/SouMaisONG.vue'

const router = useRouter()
const links = [
  { id: 'Objetivo', title: 'Objetivo', component: TimeLineObjetivos },
  { id: 'Projetos+', title: 'Projetos+', component: Projetos },
  { id: 'Contato', title: 'Contato', component: Footer },
]

const activeTab = ref('Sobre')

watch(activeTab, (newVal) => {
  const el = document.getElementById(newVal)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
})
</script>
