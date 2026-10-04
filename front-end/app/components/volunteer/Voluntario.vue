<template>
  <v-container fluid class="pa-10">

    <!-- 🔹 Cabeçalho -->
    <v-row class="text-center mb-12">
      <v-btn to="/home" size="small">Voltar</v-btn>
      <v-col>
        <h1 class="text-h3 font-weight-bold mb-3 text-purple-darken-2">Seja um Voluntário da Sou+</h1>
        <p class="text-subtitle-1 text-grey-darken-1">
            Saiba como se tornar voluntário e fazer a diferença.
        </p>
      </v-col>
    </v-row>

    <!-- 🔹 Linha do Tempo -->
    <v-row class="mb-16">
      <v-col cols="12">
        <h2 class="text-h5 font-weight-bold mb-5">Maneiras de se tornar um voluntário</h2>
        <v-row
            align="center"
            style="height: 150px;"
            no-gutters
        >
        <v-col
          v-for="n in eventos"
          :key="n"
        >
            <v-card
                class="mx-auto"
                :prepend-icon="n.icon"
                width="400"
            >
            <template v-slot:title>
                <span class="font-weight-black">{{ n.title }}</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
                {{ n.description }}
            </v-card-text>
            </v-card>
            
        </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const eventos = [
  {
    title: 'Seu Tempo',
    icon: 'mdi mdi-clock-outline',
    description: 'Doar seu tempo significa participar diretamente das atividades da ONG, como ajudar em eventos, ações externas, visitas e organização de doações. É estar presente no dia a dia, apoiando onde for mais necessário e contribuindo para que tudo funcione. Mesmo algumas horas por semana já têm um impacto enorme. Cada momento dedicado faz diferença real na vida de quem atendemos.',
  },
  {
    title: 'Doação Financeira',
    icon: 'mdi mdi-cash-multiple',
    description: 'As contribuições financeiras são fundamentais para manter as atividades funcionando, comprar materiais, apoiar famílias e ampliar projetos. Mesmo pequenas doações fazem grande diferença quando somadas. É uma maneira simples, segura e rápida de apoiar a causa e garantir que nossas ações continuem alcançando quem mais precisa.',
  },
  {
    title: 'Suas Habilidades',
    icon: 'mdi mdi-human-capacity-increase',
    description: 'Você também pode contribuir oferecendo suas habilidades profissionais. Áreas como design, marketing, fotografia, administração, tecnologia, pedagogia e jurídico fazem muita diferença dentro da ONG. Cada talento pode ser usado para fortalecer projetos, melhorar processos e alcançar ainda mais pessoas. É uma forma especial de voluntariar, colocando seu conhecimento a serviço de quem precisa..',
  },
  {
    title: 'Doação de Alimentos, roupas e itens essenciais',
    icon: 'mdi mdi-hand-coin-outline',
    description: 'Doar alimentos, roupas, produtos de higiene e outros itens essenciais é uma ajuda direta para famílias que enfrentam dificuldades. Essas doações passam por triagem, organização e chegam exatamente onde são mais necessárias. Cada contribuição física representa cuidado, acolhimento e esperança para quem recebe.',
  },
  {
    title: 'Apoio em campanhas',
    icon: 'mdi mdi-crowd',
    description: 'Você pode ajudar participando das nossas campanhas de arrecadação, divulgação e mobilização social. Isso inclui compartilhar informações, incentivar outras pessoas a doar, organizar pontos de coleta ou participar ativamente das ações. Seu envolvimento amplia nosso alcance e faz com que mais pessoas conheçam e apoiem nossos projetos.',
  },
  {
    title: 'Voluntariado remoto',
    icon: 'mdi mdi-remote-desktop',
    description: 'Se não puder estar presente fisicamente, também é possível voluntariar à distância. Ajudando nas redes sociais, respondendo mensagens, criando conteúdos, organizando informações ou divulgando nossas ações, você contribui de forma prática e eficiente. É uma forma flexível de participar e continuar fazendo a diferença sem sair de casa.',
  },
  {
    title: 'Ser Multiplicador',
    icon: 'mdi mdi-heart-multiple-outline',
    description: 'Ser multiplicador é ajudar a espalhar a causa, levando nossa mensagem para mais pessoas. Você pode compartilhar nossas ações, convidar amigos para participar, divulgar campanhas e apresentar a ONG para quem ainda não conhece. Esse apoio amplia nosso alcance e fortalece o impacto do projeto. Cada pessoa que você alcança também pode transformar vidas.',
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
</style>
