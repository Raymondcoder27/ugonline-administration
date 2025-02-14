<script setup lang="ts">

import Logo from "@/assets/images/banner.png";
</script>

<template>
  <div class="flex">
    <div class="w-full bg-primary-800 text-white px-4">
      <div class="flex mt-5 text-sm text-primary-50">
        <div class="w-3/12">
          <img :src="Logo" class="w-20 my-auto py-2"/>
        </div>
        <div class="w-5/12"></div>
        <div class="w-4/12">
          <div class="flex">
            <div class="w-full">
              <p class="float-right cursor-pointer hover:text-white">&copy; 2024 Government of the Republic of Uganda</p>
            </div>
          </div>
          <div class="flex">
            <div class="w-full">
              <div class="flex float-right mt-2">
                <div class="w-4/12 bg-black-800 border-b border-gray-100" style="height: 5px; width: 50px;"></div>
                <div class="w-4/12 bg-yellow-500" style="height: 5px; width: 50px;"></div>
                <div class="w-4/12 bg-red-600" style="height: 5px; width: 50px;"></div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="w-full py-2">
              <p class="float-right cursor-pointer hover:text-white">Powered by GovNet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>