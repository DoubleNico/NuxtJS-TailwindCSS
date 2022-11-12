<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <button @click="changeMode">{{ $colorMode.value }}</button>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const changeMode = () => {
  if (colorMode.value === 'light') colorMode.value = 'dark'
  else if (colorMode.value === 'dark') colorMode.value = 'contrast'
  else colorMode.value = 'light'
  colorMode.preference = colorMode.value
}
</script>

<style>
.dark-mode {
  @apply text-white bg-background-dark;
}

.light-mode {
  @apply text-black bg-background-light;
}

.contrast-mode {
  @apply text-white bg-background-contrast;
}
</style>
