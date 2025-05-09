<script setup lang="ts">

import {reactive, type Ref, ref} from "vue";
import type {CreateServiceCategory} from "@/domain/settings/types";
import {useSettingsStore} from "@/domain/settings/stores";
import {useNotificationsStore} from "@/stores/notifications";
import type {ApiError} from "@/types";

const store = useSettingsStore()
const loading: Ref<boolean> = ref(false)
const notify = useNotificationsStore()

let form: CreateServiceCategory = reactive({
  name: "",
  icon: null,
})
const emit = defineEmits(['cancel'])

function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    let file = target.files[0];
    getFileBase64(file)
  }
}

function getFileBase64(file:File) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    form.icon = reader.result
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}

function submit(){
  loading.value = true
  let payload = {
    name:form.name,
    icon_url:form.icon
  }
  store
      .createCategory(payload)
      .then(() => {
        loading.value = false
        window.location.reload()
        notify.success("Created")
      })
      .catch((error:ApiError) => {
        loading.value = false
        notify.error(error.response.data.message)
      })
}

</script>

<template>
  <div class="bg-white py-5">
    <p class="text-xl font-bold"> Create a Service Category</p>
    <p class="text-sm text-gray-500">MDAs and/or Companies providing services are grouped according to these categories</p>
    <form @submit.prevent="submit" class="pt-5">
      <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Name</label>
          <input type="text" v-model="form.name" class="noFocus form-element e-input w-full"
                 required />
        </div>
      </div>

      <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Preferred Icon</label>
          <input type="file" @change="onFileChanged" class="noFocus form-element e-input w-full"
                 required />
        </div>
      </div>

      <div class="flex my-2 py-5">
        <div class="w-6/12 px-1">
          <button class="button-outline" type="button" @click="emit('cancel')">
            <i class="fa-solid fa-ban"></i> Cancel
          </button>
        </div>
        <div class="w-6/12 px-1">
          <button class="button" type="submit">
            <i class="fa-solid fa-hand-pointer"></i> Submit
            <span class="lds-ring mx-1" v-if="loading">
              <div></div><div></div><div></div><div></div>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/styles/button.css";
@import "@/assets/styles/forms.css";
@import "@/assets/styles/ring.css";
@import "@/assets/styles/ripple.css";

.cell {
  @apply w-6/12 px-1 my-2;
}

.cell-full {
  @apply w-full px-1 my-2;
}
</style>