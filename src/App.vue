<script setup lang="ts">
  import CodePlayer, { CodePlayerOptions } from 'codeplayer';

  const options: CodePlayerOptions = {
    appType: 'vue3',
  };
</script>

<template>
<CodePlayer :options="options" class="codeplayer-container"></CodePlayer>
</template>

<style scoped>
  /* .codeplayer-container {
    max-height: 100vh;
    height: 100vh;
  } */
</style>
