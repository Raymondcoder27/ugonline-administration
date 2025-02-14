import { defineStore } from "pinia"
import { ref, type Ref } from "vue"

export const useCommonsStore = defineStore("commons", () => {
  const loading: Ref<Boolean> = ref(false)

  const toggleLoading: (state: Boolean) => void = (state: Boolean) => {
    loading.value = state
  }

  const formatError: (error: any) => void = (error: any) => {
    console.log(error)
  }

  const isNumeric: (string: string) => boolean = (string: string) => {
    return !isNaN(Number(string)) && !isNaN(parseFloat(string))
  }

  const activityStatusStyling: (status : string) => string = (status : string) => {
    if(status == "ONLINE"){
      return "border border-gray-100 bg-gray-50 p-1 rounded text-gray-500"
    }
    if(status == "OFFLINE"){
      return "border border-red-100 bg-red-50 p-1 rounded text-red-500"
    }
    return "border border-gray-100 bg-gray-50 p-1 rounded text-gray-500"
  }

  return { loading, toggleLoading, formatError, activityStatusStyling, isNumeric }
})
