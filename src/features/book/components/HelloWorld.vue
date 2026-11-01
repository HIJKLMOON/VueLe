<script setup lang="ts">
import { ref } from "vue";

const friend = ref("John");
const onDisabled = ref(false);
const data = {
  id: "John",
  title: "Friend",
};

const onClick = () => {
  friend.value = friend.value === "Tom" ? "John" : "Tom";
};
</script>

<template>
  <h1>Hello</h1>
  <div v-bind="data">{{ friend }}</div>
  <button @click="onClick" :disabled="onDisabled">修改</button>
  <router-link :to="{ name: 'setting' }">setting</router-link>
</template>
