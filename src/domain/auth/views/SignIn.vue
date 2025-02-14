<script setup lang="ts">
import { reactive, ref, watch, type Ref, type ComputedRef, computed, onMounted } from "vue"
import Logo from "@/assets/logo.svg"
import type { SignInPayloadInterface } from "@/domain/auth/types"
import { useAccountStore } from "@/domain/auth/stores"
import { useRouter } from "vue-router"
import { useAuth } from "@/domain/auth/composables"
import { useCommonsStore } from "@/stores/commons"

const router = useRouter()
const store = useAccountStore()
const commons = useCommonsStore()
const appName = import.meta.env.VITE_APP_NAME
const form: SignInPayloadInterface = reactive({
  username: "",
  password: ""
})
const loading: Ref<boolean> = ref(false)
const email: Ref<string> = ref("")
const signIn = async () => {
  loading.value = true
  store
    .signIn(form)
    .then(() => (loading.value = false))
    .catch((error:any) => {
      loading.value = false
      commons.formatError(error)
    })
}
onMounted(() => {
  // c.value = null
})
watch(
  () => email.value,
  (data) => {
    form.username = data.replace(" ", "").toLowerCase()
  }
)
const validForm: ComputedRef<boolean> = computed(() => {
  return form.username.length > 0 && form.password.length >= 8
})
const { credentials } = useAuth()
watch(
  () => credentials.value,
  (data) => {
    if (data !== undefined) {
      router.push({ name: "providers" })
    }
  },
  { deep: true }
)
</script>

<template>
  <div class="grid grid-cols-1 gap-4 bg-white m-auto w-full max-w-sm shadow-lg rounded-lg">
    <div class="flex col-span-2 border border-primary-200">
      <div class="w-full p-5 col-span-2">
        <img :src="Logo" class="mx-auto w-24" />
        <div class="flex flex-col space-y-0 text-center">
          <span class="text-lg pt-4 font-bold text-primary-700 tracking-tight">{{ appName }}</span>
          <span class="font-semibold text-sm text-neutral-500">Sign in to continue</span>
        </div>
        <form @submit.prevent="signIn()">
          <div class="w-full grid grid-cols-1 gap-3 px-3 pt-3">
            <input required class="e-input form-element !px-5 lowercase" v-model.trim="email" type="email"/>
            <input required class="e-input form-element !px-5" v-model.trim="form.password" type="password"/>
            <button :disabled="!validForm" type="submit" class="mt-2 button">
              Sign In
              <span class="lds-ring mx-1" v-if="loading">
              <div></div><div></div><div></div><div></div>
            </span>
            </button>
            <span class="w-full text-center text-xs">
          Don't have an account?
          <span @click="router.push({ name: 'app-account-sign-up' })" class="cursor-pointer font-semibold text-primary-900 hover:underline">
            Sign Up Now
          </span>
        </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/button.css";
@import "@/assets/styles/forms.css";
@import "@/assets/styles/ring.css";
@import "@/assets/styles/ripple.css";
</style>
