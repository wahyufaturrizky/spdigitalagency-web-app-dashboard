<template>
  <p :class="class">{{ label }}</p>
</template>

<script setup>
defineProps(["label", "class"]);
</script>
