<script setup lang="ts">
import AppModal from "@/components/AppModal.vue";
import { useAccounts } from "@/domain/accounts/stores/accounts";
import { type Ref, ref, watch } from "vue";
import CreateAccount from "@/domain/accounts/CreateAccount.vue";

const accounts = useAccounts();
const modalOpen: Ref<boolean> = ref(false);

function open() {
  modalOpen.value = true;
}

function close() {
  modalOpen.value = false;
}

// watch state of the modal
watch(
  () => modalOpen.value,
  (isOpen: boolean) => {
    if (!isOpen) {
      // do something if that's something you're interested in
    }
  },
);
</script>

<template>
  <div class="w-full shadow-lg bg-white rounded p-2">
    <div class="flex">
      <div class="w-full py-1">
        <i
          class="bg-primary-700 border border-primary-800 text-white p-2 rounded-full fa-solid fa-users"
        ></i>
        <label class="text-lg mx-1">System Accounts</label>
      </div>
    </div>
    <div class="flex space-x-2 my-1 pt-1 pb-3">
      <div class="flex-grow">
        <div class="flex bg-gray-10 border border-gray-200 rounded px-2 py-3">
          <input
            class="filter-element e-input w-2/12"
            type="text"
            placeholder="Search by Name"
          />
          <select class="filter-element w-2/12 e-select">
            <option :value="null">- Select ID Type -</option>
            <option value="NATIONAL_ID">National ID</option>
            <option value="PASSPORT">Passport</option>
            <option value="REFUGE_ID">Refuge ID</option>
          </select>
          <input
            class="filter-element e-input w-2/12"
            type="text"
            placeholder="ID Number"
          />
          <input
            class="filter-element e-input w-2/12"
            type="text"
            placeholder="Email Address"
          />
          <input
            class="filter-element e-input w-2/12"
            type="text"
            placeholder="Phone Number"
          />
          <select class="filter-element w-2/12 e-select">
            <option :value="null">- Select Status -</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
      </div>
      <div class="flex">
        <button
          @click="modalOpen = true"
          class="button btn-sm my-auto"
          type="button"
        >
          <i class="px-1 fa-solid fa-plus"></i> Add Account
        </button>
      </div>
    </div>
    <div class="flex my-1">
      <table class="table">
        <thead>
          <tr class="header-tr">
            <th class="t-header">#</th>
            <th class="t-header" width="30%">Names</th>
            <th class="t-header">ID Type</th>
            <th class="t-header">ID Number</th>
            <th class="t-header">Email</th>
            <th class="text-center">Phone</th>
            <th class="text-center">Status</th>
            <th class="text-center">Created</th>
            <th class="t-header"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="body-tr"
            v-for="(account, idx) in accounts.accounts"
            :key="idx"
          >
            <td width="10px">{{ idx + 1 }}.</td>
            <td>
              <label class="font-bold py-1"
                >{{ account.firstName }} {{ account.lastName }}
                {{ account.middleName }}</label
              >
            </td>
            <td>
              <span class="text-xs">{{
                account.idType.replace("_", " ")
              }}</span>
            </td>
            <td>
              <span class="text-blue-500 text-sm">{{ account.idNumber }}</span>
            </td>
            <td>
              <a
                class="underline text-green-600"
                :href="'smtp:' + account.email"
                >{{ account.email }}</a
              >
            </td>
            <td class="text-center">
              {{ account.phone }}
            </td>

            <td class="text-center">
              <label
                v-if="account.status == 'active'"
                class="bg-green-600 text-white py-1 px-2 rounded"
              >
                {{ account.status }} <i class="fa-solid fa-check px-1"></i>
              </label>

              <label
                v-else-if="account.status == 'pending'"
                class="bg-gray-600 text-white py-1 px-2 rounded"
              >
                {{ account.status }}
                <i class="fa-solid fa-exclamation px-1"></i>
              </label>

              <label v-else class="bg-red-600 text-white py-1 px-2 rounded">
                {{ account.status }} <i class="fa-solid fa-times px-1"></i>
              </label>
            </td>
            <td class="text-center">{{ account.createdAt }}</td>
            <td class="text-center">
              <button class="btn btn-dark" @click="open()">
                <i class="fa-solid fa-file-pen px-1"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal -->
  <AppModal v-model="modalOpen" xl2>
    <!-- Put here whatever makes you smile -->

    <!-- Chances are high that you're starting with a form -->
    <CreateAccount @cancel="close"/>
    <!-- That's also okay -->
  </AppModal>
  <!-- /Modal -->
</template>

<style scoped>
@import "@/assets/styles/forms.css";
@import "@/assets/styles/button.css";
@import "@/assets/styles/table.css";
@import "@/assets/styles/widgets.css";
</style>
