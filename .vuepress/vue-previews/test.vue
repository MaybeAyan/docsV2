<template>
  <div>
    {{ state }}
    <button @click="handleChange">change</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const state = ref("");

const handleChange = () => {
  state.value += "123";
};
</script>

<style lang="less" scoped></style>
