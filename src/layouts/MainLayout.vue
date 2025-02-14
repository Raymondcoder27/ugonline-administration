<script setup lang="ts">
import Header from "../components/Header.vue";
import SideMenu from "../components/SideMenu.vue";
import AppNotification from "@/components/AppNotification.vue";
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-neutral-100">
    <div class="flex flex-col h-full w-full">
      <Header />
      <main class="h-full flex flex-col">
        <div class="flex flex-row h-full">
          <SideMenu />
          <div class="flex flex-col flex-grow">
            <!-- Main Content Goes Here -->
            <div class="relative w-full flex-grow bg-gray-50 p-2">
              <RouterView />
            </div>
          </div>
        </div>
      </main>
<!--      <Footer />-->
    </div>
    <AppNotification />
  </div>
</template>

<style scoped></style>
