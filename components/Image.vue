<template>
  <NuxtImg :class="class" :src="src" />
</template>

<script setup>
defineProps(["src", "class"]);
</script>
