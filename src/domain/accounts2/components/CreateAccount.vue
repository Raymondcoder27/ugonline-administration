<script setup lang="ts">
import type { CreateAccount } from "@/types";
import { type Ref, ref, reactive } from "vue";
import { useAccounts } from "@/domain/accounts2/stores";
import { useNotificationsStore } from "@/stores/notifications";
import { defineEmits } from "vue";
import { useBranchStore } from "@/domain/branches/stores";
import { idText } from "typescript";

const branchStore = useBranchStore();

let form: CreateAccount = reactive({
  firstName: "",
  lastName: "",
  // middleName: "",
  // role: "admin",
  // username: "",
  email: "",
  phone: "",
  password: "",
});
const notify = useNotificationsStore();
const loading: Ref<boolean> = ref(false);
const emit = defineEmits(["cancel", "backOfficeAccountCreated"]);
const store = useAccounts();

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

function submit() {
  let payload = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    status: "active",
    password: form.password,
    unharshedPassword: form.password,
    middleNames: "",
    role: "",
    createdAt: "",
    emailVerified: false,
    phoneVerified: false,
    activatedAt: "",
    // role: form.role,
    // branchId: form.branchId,
  };
  loading.value = true;
  store.addBackOfficeAccount(payload); // Simply add the branch
  notify.success("BackOffice Account Created");
  emit("backOfficeAccountCreated");
  loading.value = false;
}
</script>

<template>
  <div class="bg-white py-5">
    <p class="text-xl font-bold">Create an Agent Account</p>
    <p class="text-sm text-gray-500">
      The individual responsible for overseeing agent operations, managing branches, tills, and ensuring smooth service delivery to the public.
    </p>
    <form @submit.prevent="submit" class="pt-5">
      <div class="">
        <!-- <label class="block uppercase text-neutral-600 text-xs font-bold mb-1"
          >Select Branch</label
        > -->

        <div class="flex">
          <div class="cell-full">
            <label
              class="block uppercase text-neutral-600 text-xs font-bold mb-1"
              >First Name</label
            >
            <input
              autocomplete="off"
              type="text"
              v-model="form.firstName"
              class="noFocus form-element e-input w-full"
              required
            />
          </div>
        </div>
        <div class="flex">
          <div class="cell-full">
            <label
              class="block uppercase text-neutral-600 text-xs font-bold mb-1"
              >Last Name</label
            >
            <input
              autocomplete="off"
              type="text"
              v-model="form.lastName"
              class="noFocus form-element e-input w-full"
              required
            />
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
            <label
              class="block uppercase text-neutral-600 text-xs font-bold mb-1"
              >Email Address</label
            >
            <input
              autocomplete="off"
              type="email"
              v-model="form.email"
              class="noFocus form-element e-input w-full"
              required
            />
          </div>
          <div class="cell">
            <label
              class="block uppercase text-neutral-600 text-xs font-bold mb-1"
              >Phone Number</label
            >
            <input
              autocomplete="off"
              type="tel"
              v-model="form.phone"
              class="noFocus form-element e-input w-full"
              required
            />
          </div>
          <div class="cell">
            <label
              class="block uppercase text-neutral-600 text-xs font-bold mb-1"
              >Password</label
            >
            <input
              autocomplete="off"
              type="tel"
              v-model="form.password"
              class="noFocus form-element e-input w-full"
              required
            />
          </div>
        </div>
      </div>

      <!-- <div class="flex">
        <div class="cell-full">
          <label class="block uppercase text-neutral-600 text-xs font-bold mb-1">Select a Role</label>
          <select autocomplete="off" v-model="form.role" class="noFocus form-element e-input w-full">
            <option value="admin">Administrator</option>
            <option value="public">Public User</option>
          </select>
        </div>
      </div> -->

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