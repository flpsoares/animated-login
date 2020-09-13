<template>
  <div class="flex flex-row justify-between focus-within:border-blue-800 py-2 border-b-2 border-personalGray-600">
    <input class="text-personalGray-600 font-bold focus:text-blue-800 w-full" :placeholder="name" type="text">
    <i :class="icon" class="text-2xl text-personalGray-600"></i>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    name: String,
    icon: String
  }
}
</script>

<style>

</style>