import router from '../../router'
import { defineStore } from 'pinia'
// import MQL from '@/plugins/mql.js'
export const login = defineStore('login', {
  persist: {
    storage: sessionStorage,
    // paths:['token','status']
  },
    state: () => ({ 
        token: sessionStorage.getItem('user-token') || '',
        status: '',
    }),
    getters:{
      isAuthenticated:(state) => !!state.token,
      authStatus:(state)=>state.status
    },
    actions:{
      MUTATE_AUTH_REQUEST(){
        this.status = 'loading'
      },
      MUTATE_AUTH_SUCCESS(token){
        this.status = 'sucess'
        this.token = token
      },
      MUTATE_AUTH_ERROR(){
        this.status = 'error'
      },
      AUTH_REQUEST(payload) {
        
      },
    
      AUTH_LOGOUT () {
        return new Promise((resolve) => {
          sessionStorage.removeItem('user-token')
          // remove the axios default header
          // delete axios.defaults.headers.common['Authorization']
          router.push({
            name: 'login',
          })
          resolve()
        })
      },
    
    }
})