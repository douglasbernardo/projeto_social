import { defineStore } from 'pinia'
import axios from 'axios'

export const useVolunterStore = defineStore('volunter', {
  state: () => {
    return{
        user: 0
    }
  },
  actions:{
    async addVolunter(data: object){
        try{
            const res = await axios.post('http://localhost:8000/volunter/add-volunter',data)
            this.user = res.status
            return res.status
        }catch(error){
            console.log('erro ao cadastrar voluntario')
            throw error
        }
    }
  }
})