<template>
  <codemirror
    ref="mycode"
    :value="curCode"
    :options="cmOptions"
    class="code"
    @changes="changes"
  >
  </codemirror>
</template>

<script>
import codemirrors from './codemirrors';
export default codemirrors;
</script>

<style lang="scss">
@import './codemirrors';
</style>
