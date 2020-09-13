<template>
  <div :class="`z-${zindex}`" class="flex flex-col">
    <span :class="`transition duration-1500 opacity-${opacity}`" class="text-3xl">
      {{header}}
    </span>
    <span :class="`transition duration-1500 opacity-${opacity}`" class="mt-2" style="font-size: 10pt;">
      {{content}}
    </span>
    <div :class="`transition duration-1500 opacity-${opacity}`" class="flex mt-8 w-full">
      <button @click="toggleRegister" class="w-32 h-9 rounded-md border border-white">
        {{button}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoChoose',
  props: {
    header: String,
    content: String,
    button: String,
    zindex: String,
    opacity: String
  },
  data(){
    return {
      showLogin: false
    }
  },
  methods: {
    toggleRegister(){
      this.$emit('toggle')
      this.showLogin = !this.showLogin
      this.$store.commit('toggleRegister')
    },
    toggle(){
      
    }
  },
  computed: {
    loginConfig(){
      if(this.showLogin == true){
        return '100'
      }else{
        return '0'
      }
    },
  }
}
</script>

<style>

</style>