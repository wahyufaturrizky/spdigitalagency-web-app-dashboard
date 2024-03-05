<template>
  <p :class="class">{{ label }}</p>
</template>

<script lang="ts" setup>
defineProps(["label", "class"]);
</script>

<style scoped></style>
