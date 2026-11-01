<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'book' }">Friend</RouterLink>
      <RouterLink to="/setting">Setting</RouterLink>
      <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style></style>
