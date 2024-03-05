<template>
  <!-- Start Card -->
  <div
    :class="[
      itemCard.label === 'Revenue in Percentage' ? 'space-y-2' : 'flex flex-col justify-between',
      'p-4 border border-gray-400 rounded-md bg-white',
    ]"
  >
    <div class="flex flex-row justify-between items-center">
      <Text class="text-lg font-normal" :label="itemCard.label" />
      <MoreOutlined v-if="itemCard.label === 'Revenue in Percentage'" />
      <Image v-else-if="itemCard.label === 'Total Order'" src="/bookmark.png" />
      <Image v-else src="/mail.png" />
    </div>

    <Text
      v-if="itemCard.label !== 'Revenue in Percentage'"
      class="font-semibold text-3xl"
      :label="itemCard.order + ' Order'"
    />

    <div v-if="itemCard.label === 'Revenue in Percentage'" class="flex justify-between items-end">
      <div class="flex items-center gap-1.5">
        <ArrowUpOutlined class="text-green-400" />
        <Text class="font-normal text-green-400" label="40%" />
        <Text class="font-normal text-gray-400" label="vs last month" />
      </div>

      <Image src="/chart.png" />
    </div>
  </div>
  <!-- End Card -->
</template>

<script setup>
defineProps(["itemCard"]);
</script>
