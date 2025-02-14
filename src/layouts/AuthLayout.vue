<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-w-screen min-h-screen">
    <div class="flex flex-col w-screen h-screen">
      <main class="h-full flex flex-col">
        <div class="flex h-full">
          <!-- Main Content Goes Here -->
          <RouterView />
          <!-- Main Content Goes Here -->
        </div>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<style scoped></style>
