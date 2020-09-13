<template>
  <div :class="`z-${zindex}`" class="flex flex-col">
    <span class="text-3xl">
      {{header}}
    </span>
    <span class="mt-2" style="font-size: 10pt;">
      {{content}}
    </span>
    <div class="flex mt-8 w-full">
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
    zindex: String
  },
  methods: {
    toggleRegister(){
      this.$emit('toggle')
      this.$store.commit('toggleRegister')
    }
  }
}
</script>

<style>

</style>