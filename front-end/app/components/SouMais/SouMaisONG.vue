<template>
  <v-container fluid class="pa-10">

    <!-- 🔹 Cabeçalho -->
    <v-row class="text-center mb-12">
      <v-btn to="/home" size="small">Voltar</v-btn>
      <v-col>
        <h1 class="text-h3 font-weight-bold mb-3 text-purple-darken-2">Sobre a Sou+</h1>
        <p class="text-subtitle-1 text-grey-darken-1">
          Conheça a história, o propósito e as ações que transformam vidas todos os dias.
        </p>
      </v-col>
    </v-row>

    
    <!-- 🔹 Seção da Fundadora -->
    <v-row align="center" justify="center" class="mb-16">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="220" class="elevation-5">
          <v-img src="/yasmin1.jpg" alt="Foto da fundadora da Sou+" />
        </v-avatar>
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold mb-2 text-purple-darken-2">Yasmin Moreira</h1>
        <p class="text-subtitle-1 text-grey-darken-1 font-italic mb-4">
          Fundadora da Sou+
        </p>
        <p class="text-body-1 text-grey-darken-2">
          Yasmin Moreira idealizou o projeto Sou+ em 2020 com o propósito de transformar empatia em ação.
          Inspirada por suas próprias experiências de voluntariado, ela reuniu amigos e começou a organizar
          campanhas de doação para famílias em situação de vulnerabilidade.  
          Hoje, sua liderança e dedicação inspiram dezenas de voluntários a fazer a diferença todos os dias.
        </p>
      </v-col>
    </v-row>

    <!-- 🔹 Seção História -->
    <v-row align="center" class="mb-16">
      <v-col cols="12" md="6">
        <h2 class="text-h5 font-weight-bold mb-3">Como tudo começou</h2>
        <p class="text-body-1 text-grey-darken-2">
          A Sou+ nasceu em 2020, com o objetivo de ajudar pessoas em situação de vulnerabilidade
          por meio de campanhas de doação e apoio comunitário. Tudo começou com um pequeno grupo
          de amigos que decidiram transformar empatia em ação.
        </p>
        <p class="text-body-1 text-grey-darken-2">
          Desde então, a ONG vem crescendo e impactando centenas de famílias com amor,
          solidariedade e esperança.
        </p>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          src="/momentos/comeco.jpg"
          alt="Início da Sou+"
          aspect-ratio="1.5"
          class="rounded-lg elevation-3"
          cover
        />
      </v-col>
    </v-row>

    <!-- 🔹 Linha do Tempo -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-5">Nossa trajetória</h2>
        <v-timeline align="start">
          <v-timeline-item
            v-for="(evento, i) in eventos"
            :key="i"
            :dot-color="evento.color"
            fill-dot
          >
            <template #opposite>
              <strong>{{ evento.ano }}</strong>
            </template>
            <v-card class="pa-3">
              <h3 class="text-h6 font-weight-bold mb-2">{{ evento.titulo }}</h3>
              <p class="text-body-2">{{ evento.descricao }}</p>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <!-- 🔹 Galeria -->
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-5">Nossos momentos</h2>
      </v-col>

      <v-col v-for="(foto, i) in fotos" :key="i" cols="12" sm="6" md="4">
        <v-img
          :src="foto"
          aspect-ratio="1"
          class="rounded-lg elevation-2"
          cover
        />
      </v-col>
    </v-row>

    <!-- 🔹 Rodapé -->
    <v-row class="mt-16 text-center">
      <v-col>
        <p class="text-caption text-grey-darken-1">
          © {{ new Date().getFullYear() }} Sou+ — Todos os direitos reservados.
        </p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
const eventos = [
  {
    ano: '2020',
    titulo: 'O começo de tudo',
    descricao: 'Primeira campanha de arrecadação de alimentos, que ajudou mais de 50 famílias.',
    color: 'purple',
  },
  {
    ano: '2021',
    titulo: 'Expansão',
    descricao: 'Novos voluntários se juntaram e ampliamos nosso alcance para outras comunidades.',
    color: 'deep-purple',
  },
  {
    ano: '2023',
    titulo: 'Parcerias importantes',
    descricao: 'Firmamos parcerias com empresas locais para arrecadar fundos e doações.',
    color: 'purple-darken-2',
  },
]

const fotos = [
  '/momentos/momento1.jpg',
  '/momentos/momento2.jpg',
  '/momentos/momento3.jpg',
  '/momentos/momento4.jpg',
  '/momentos/momento5.jpg',
  '/momentos/momento6.jpg',
]
</script>

<style scoped>
p {
  line-height: 1.6;
}
</style>
