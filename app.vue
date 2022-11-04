<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<style>
.dark-mode {
  @apply text-white bg-background-dark;
}

.light-mode {
  @apply text-black bg-background-light;
}
</style>
