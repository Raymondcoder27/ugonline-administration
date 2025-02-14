<script setup lang="ts">

import type {CreateAccount} from "@/types";
import {type Ref, ref} from "vue";

let form:Ref<CreateAccount> = ref({
  firstName: "",
  lastName: "",
  middleName: "",
  idType: "",
  idNumber: "",
  departmentId: "",
  email: "",
  phone: "",
})
const emit = defineEmits(['cancel'])
function submit(){

}
</script>

<template>
  <div class="bg-white py-5">
    <p class="text-xl font-bold"> Create an Account</p>
    <p class="text-sm text-gray-500">Administrators who will manage this portal and handle providers and services</p>
    <form @submit="submit" class="pt-5">
      <div class="flex">
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">First Name</label>
          <input type="text" v-model="form.firstName" class="noFocus form-element e-input w-full"
                 required />
        </div>
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Last Name</label>
          <input type="text" v-model="form.lastName" class="noFocus form-element e-input w-full"
                 required />
        </div>
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Middle Name</label>
          <input type="text" v-model="form.middleName" class="noFocus form-element e-input w-full"
                 required />
        </div>
      </div>
      <div class="flex">
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Id Types</label>
          <select v-model="form.idType" class="noFocus form-element e-input w-full">
            <option value="National_ID">National ID</option>
            <option value="Passport">Passport</option>
            <option value="Employee_ID">Employee ID</option>
          </select>
        </div>
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">ID Number</label>
          <input type="text" v-model="form.idNumber" class="noFocus form-element e-input w-full"
                 required />
        </div>
      </div>

      <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Department</label>
          <select v-model="form.departmentId" class="noFocus form-element e-input w-full">
            <option value="D1">Department 1</option>
            <option value="D2">Department 2</option>
            <option value="D3">Department 3</option>
            <option value="D4">Department 4</option>
          </select>
        </div>
      </div>

      <div class="flex">
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Email Address</label>
          <input type="email" v-model="form.email" class="noFocus form-element e-input w-full"
                 required />
        </div>
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Phone Number</label>
          <input type="tel" v-model="form.phone" class="noFocus form-element e-input w-full"
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