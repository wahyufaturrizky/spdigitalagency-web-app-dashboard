<template>
  <div class="relative">
    <label v-if="label" :class="classNameLabel" :for="name"
      >{{ label }} <span class="text-red-400">{{ required ? "*" : "" }}</span></label
    >

    <div
      v-if="prefixIcon"
      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
    >
      {{ prefixIcon }}
    </div>

    <div :class="[label ? 'mt-2' : 'mt-0']">
      <input
        :type="type"
        :class="classNameInput"
        :placeholder="placeholder"
        :id="name"
        :name="name"
        :autocomplete="autocomplete"
        :required="required"
        v-model="name"
      />
    </div>

    <Text v-if="error" class="text-red-400 mt-2 font-bold text-sm" />

    <div
      v-if="suffixIcon"
      :class="[
        error ? 'bottom-8' : 'bottom-0',
        'right-0 flex items-center mr-3 cursor-pointer inset-y-0',
      ]"
    >
      {{ suffixIcon }}
    </div>
  </div>
</template>

<script setup>
defineProps([
  "name",
  "classNameLabel",
  "label",
  "prefixIcon",
  "type",
  "classNameInput",
  "placeholder",
  "autocomplete",
  "required",
  "error",
  "suffixIcon",
]);
</script>
