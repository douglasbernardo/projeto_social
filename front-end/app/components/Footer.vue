<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon.icon"
        density="compact"
        variant="text"
        :to="icon.link"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      <p>E-mail: soumais@gmail.com</p>
      <p>Telefone: 32 99921-3121</p>
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Sou +</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    {
      icon: 'mdi-instagram',
      link: 'https://www.instagram.com/soumais_jf/#'
    },
      {
      icon: 'mdi-facebook',
      link: 'https://www.instagram.com/soumais_jf/#'
    }
  ]
</script>