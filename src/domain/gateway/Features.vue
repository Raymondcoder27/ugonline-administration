<script setup lang="ts">

import {useGatewayStore} from "@/domain/gateway/stores";
import {onMounted, ref, type Ref} from "vue";
import moment from "moment";

const loading: Ref<boolean> = ref(false)
const page: Ref<number> = ref(1);

const props = defineProps({
  providerId:String
})

const store = useGatewayStore()
onMounted(() => {
  loading.value = true
  store.fetchFeaturesByProvider(page.value, props.providerId ?? "")
      .then(() => (loading.value = false))
      .catch(() => {
        loading.value = false
      })
})

function convertDateTime(date:string){
  return moment(date).format("DD-MM-YYYY HH:mm:ss")
}

</script>

<template>
  <div class="bg-white py-5">
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
            <th class="t-header">ID</th>
            <th class="t-header">Label</th>
            <th class="text-center">Online Status</th>
            <th class="text-center">Publish Status</th>
            <th class="text-center">Date</th>
          </tr>
          </thead>
          <tbody v-if="store.features">
          <tr class="body-tr"
              v-for="(feature, idx) in store.features"
              :key="idx">
            <td class="text-xs">
              {{feature.id}}
            </td>
            <td class="text-xs">
              <span class="font-bold uppercase">{{feature.label}}</span>
            </td>
            <td class="text-xs text-center">
              {{feature.status}}
            </td>
            <td class="text-xs text-center">
              <label v-if="feature.publishedAt" class="bg-green-500 text-white rounded p-1">PUBLISHED<i class="mx-1 fa-solid fa-check"></i></label>
              <label v-else class="border border-gray-100 rounded p-1">PENDING</label>
            </td>

            <td class="text-center text-xs">{{ convertDateTime(feature.publishedAt) }}</td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr class="body-tr px-5">
            <td class="text-xs text-center bg-gray-100" colspan="12">No features found</td>
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