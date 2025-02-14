<script setup lang="ts">

import {onMounted, ref, type Ref} from "vue";
import {useGatewayStore} from "@/domain/gateway/stores";

const loading: Ref<boolean> = ref(false)
const page: Ref<number> = ref(1);

const props = defineProps({
  providerId:String
})

const store = useGatewayStore()
onMounted(() => {
  store.fetchDlqByProvider(page.value, props.providerId ?? "")
      .then(() => (loading.value = false))
      .catch(() => {
        loading.value = false
      })
})

</script>

<template>
  <div class="bg-white py-5">
    {{store.dlq}}
    <div class="flex">
      <div class="w-10/12 mx-auto text-center">
        <span class="lds-ring mx-1" v-if="loading">
          <div></div><div></div><div></div><div></div>
        </span>
      </div>
    </div>
    <div class="flex">
      <div class="w-full text-xs">
        <table class="table">
          <thead>
          <tr class="header-tr">
            <th class="t-header">Request ID</th>
            <th class="t-header">Endpoint</th>
            <th class="t-header">Method</th>
            <th class="text-center">Response Code</th>
            <th class="text-center">Status</th>
            <th class="text-center">Retries</th>
            <th class="text-center">Date</th>
            <th class="text-center"></th>
          </tr>
          </thead>
          <tbody v-if="store.dlq">
          <tr class="body-tr"
              v-for="(letter, idx) in store.dlq"
              :key="idx">
            <td class="text-xs">
              {{letter.id}}
            </td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr class="body-tr px-5">
            <td class="text-xs text-center bg-gray-100" colspan="12">No dead letters found</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/button.css";
@import "@/assets/styles/table.css";
@import "@/assets/styles/forms.css";
@import "@/assets/styles/ring.css";
@import "@/assets/styles/ripple.css";
</style>