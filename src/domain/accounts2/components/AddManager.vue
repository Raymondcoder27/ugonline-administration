<script setup lang="ts">

import type { ManagerAccount } from "@/types";
import { type Ref, ref, reactive, onMounted } from "vue";
import { useAccounts } from "@/domain/accounts2/stores";
import { useNotificationsStore } from "@/stores/notifications";
import { defineEmits } from "vue";
import { useBranchStore } from "@/domain/branches/stores";

const branchStore = useBranchStore();


 const form: ManagerAccount = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "Branch Manager",
  branchId: null, 
})

const notify = useNotificationsStore()
const loading: Ref<boolean> = ref(false);
const emit = defineEmits(['cancel', 'managerAccountCreated'])
const store = useAccounts()
// function submit() {
//   loading.value = true
//   store.createAccount(form)
//     .then(() => {
//       loading.value = false
//       notify.success(`An account verification email has been sent to ${form.username.toLowerCase()}.`)
//       emit("cancel")
//     })
//     .catch(() => {
//       loading.value = false
//     })
// }

// function submit() {
//   let payload = {
//     name: form.name,
//   };
//   loading.value = true;
//   store.addBranch(payload); // Simply add the branch
//   notify.success("Branch Created");
//   emit("branchCreated");
//   loading.value = false;
// }


function submit() {
  let payload = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    // role: form.role,
    branchId: form.branchId,
    role: form.role
  };
  loading.value = true;
  store.createBranchManagerAccount(payload); // Simply add the branch
  notify.success("Manager Account Created");
  emit("managerAccountCreated");
  loading.value = false;
}



// onMounted fetch branches
onMounted(() => {
  // loading.value = true;
   store.fetchBranchManagers(),
    branchStore
    .fetchBranches()
  
    // .finally(() => (loading.value = false));
});
</script>

<template>
  <div class="bg-white py-5">
    <p class="text-xl font-bold">Add Manager</p>
    <p class="text-sm text-gray-500">The individual responsible for overseeing branch operations, managing staff, and ensuring smooth service delivery to agents and the public.</p>
    <form @submit.prevent="submit" class="pt-5">
      <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">First Name</label>
          <input autocomplete="off" type="text" v-model="form.firstName" class="noFocus form-element e-input w-full"
            required />
        </div>
      </div>
      <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Last Name</label>
          <input autocomplete="off" type="text" v-model="form.lastName" class="noFocus form-element e-input w-full"
            required />
        </div>
      </div>
      <!-- <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Middle Name</label>
          <input autocomplete="off" type="text" v-model="form.middleName" class="noFocus form-element e-input w-full" />
        </div>
      </div> -->

      <div class="flex">
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Email Address</label>
          <input autocomplete="off" type="email" v-model="form.email" class="noFocus form-element e-input w-full"
            required />
        </div>
        <div class="cell">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Phone Number</label>
          <input autocomplete="off" type="tel" v-model="form.phone" class="noFocus form-element e-input w-full"
            required />
        </div>
      </div>

      <!-- <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Select a Branch</label>
          <select autocomplete="off" v-model="form.role" class="noFocus form-element e-input w-full">
            <option value="admin">Branch Wakiso</option>
            <option value="public">Branch Masaka</option>
          </select>
        </div>
      </div> -->

      <div class="">
        <label class="block uppercase text-neutral-600 text-xs font-bold mb-1"
          >Select Branch</label
        >
        <select
          v-model="form.branchId"
          class="noFocus form-element e-input w-full"
        >
          <option :value="null">-- Select Branch --</option>
          <option
            v-for="(branch, idx) in branchStore.branches"
            :key="idx"
            :value="branch.name"
          >
            {{ branch.name }}
          </option>
        </select>
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
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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