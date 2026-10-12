<template>
    <div>
        <v-form
        ref="form"
        @submit.prevent="onSubmit"
        >
        <v-text-field
            v-model="dataVolunter.name"
            :readonly="loading"
            :rules="[required('Nome')]"
            label="Nome"
            clearable
        ></v-text-field>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="dataVolunter.email"
                    :readonly="loading"
                    :rules="[required('Email')]"
                    label="E-mail"
                    clearable
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="dataVolunter.phone"
                    :readonly="loading"
                    :rules="[required('Celular')]"
                    label="DDD 998230990"
                    clearable
                ></v-text-field>
            </v-col>
        </v-row>
        <v-date-input
            v-model="dataVolunter.birthDate"
            label="Data de Nascimento"
            prepend-icon=""
            :rules="[required('Data de Nascimento')]"
            prepend-inner-icon="$calendar"
        ></v-date-input>
        <v-text-field
            v-model="dataVolunter.city"
            :readonly="loading"
            :rules="[required('Cidade')]"
            label="Cidade"
            clearable
        ></v-text-field>
        <v-select
            :items="itensCanHelp"
            v-model="dataVolunter.areasIWillHelp"
            :readonly="loading"
            multiple
            :rules="[required('Área que posso ajudar?')]"
            label="Areas que posso ajudar?"
            clearable
        ></v-select>

        <v-select
            :items="['Instagram','Facebook','Google','Amigo']"
            v-model="dataVolunter.howDidYouKnowUs"
            :readonly="loading"
            :rules="[required('Como conheceu o projeto?')]"
            label="Com conheceu o projeto sou +?"
            placeholder="Com conheceu o projeto sou +?"
        ></v-select>

        <br>

        <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
        >
            Me voluntariar
        </v-btn>
        </v-form>
    </div>
</template>
<script lang='ts' setup>
import { VDateInput } from 'vuetify/labs/VDateInput'
import { useVolunterStore } from '~/store/volunterStore'

  const dataVolunter = reactive({
    name: '',
    email: '',
    phone: '',
    city: '',
    birthDate: '',
    areasIWillHelp: [],
    howDidYouKnowUs: ''
  })
  const itensCanHelp = ref([
    'Arrecadação de alimentos',
    'Distribuição de doações',
    'Eventos',
    'Divulgação',
    'Transporte',
    'Apoio administrativo',
    'Tecnologia',
    'Comunicação/redes sociais',
    'Outras'
  ])
  const store = useVolunterStore()
  const form = ref(false)
  const loading = ref(false)

async function onSubmit() {
  if (!form.value) return

  loading.value = true

  const inicio = Date.now()

  try {
    const status = await store.addVolunter(dataVolunter)

    if (status === 201) {
      console.log('Voluntário cadastrado com sucesso!')
    }
  } catch (error) {
    console.error('Erro ao cadastrar voluntário:', error)
  } finally {
    const tempoDecorrido = Date.now() - inicio
    const tempoRestante = Math.max(0, 1000 - tempoDecorrido)

    await new Promise(resolve => setTimeout(resolve, tempoRestante))

    loading.value = false
  }
}
function required(nameInput: string) {
  return (v) => !!v || `${nameInput} é obrigatório`
}
</script>
