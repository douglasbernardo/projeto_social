<template>
    <v-row>
        <v-col>
            <v-img class="timeline-container" src="/community-tree.png"></v-img>
        </v-col>
        <v-col>
            <v-timeline side="end" line-thickness="1">
                <v-timeline-item size="x-small" density="compact" width="400" v-for="goal in goals">
                    <v-card class="pa-2" hover>
                        <div class="text-h5 font-weight-bold">{{ goal.title }}</div>
                        <p>
                            {{ goal.text }}
                        </p>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
    const goals = [
        {
            title: "Missão",
            text: "Nossa missão é dar visibilidade a pessoas e ONGs de Juiz de Fora que realizam projetos sociais, conectando-as a novos apoiadores e oportunidades. Acreditamos no poder da solidariedade e queremos fortalecer quem dedica sua vida a transformar a realidade de outros."
        },
        {
            title: "Visão",
            text: "Ser uma plataforma reconhecida por conectar projetos sociais e doadores, tornando Juiz de Fora uma cidade mais solidária, engajada e transformadora."
        },
        {
            title: "Valores",
            text: "Ética,Simplicidade e humildade, Comprometimento, Transparência e coerência em nossas ações e relações"
        }
    ]
</script>

<style scoped>
</style>
