import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import ServiceProviders from "@/domain/providers/ServiceProviders.vue";
import Services from "@/domain/services/Services.vue";
// import Accounts from "@/domain/accounts2/Accounts.vue";
import Accounts from "@/domain/accounts2/Accounts.vue";
import ServiceRequests from "@/domain/applications/ServiceApplications.vue";
import FormComposer from "@/domain/composer/FormComposer.vue";
import { routes as authRoutes } from "@/domain/auth/routes"
import { useAuth } from "@/domain/auth/composables";
import moment from "moment";
import ComposerLayout from "@/layouts/ComposerLayout.vue";
import FormPreview from "@/domain/composer/FormPreview.vue";
import ServiceDetails from "@/domain/services/views/ServiceDetails.vue";
import ServiceProviderDetails from "@/domain/providers/views/ServiceProviderDetails.vue";
import DataAnalytics from "@/domain/analytics/DataAnalytics.vue";
import Settings from "@/domain/settings/Settings.vue";

declare module "vue-router" {
  interface RouteMeta {
    parentName?: string
    requiresAuth: boolean
  }
}

const appRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "app-home" },
  },
  {
    path: "/home",
    name: "app-home",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        name: "providers",
        path: "/home/service-providers",
        component: ServiceProviders,
      },
      {
        name: "services",
        path: "/home/services",
        component: Services,
      },
      {
        name: "service-applications",
        path: "/home/service-applications",
        component: ServiceRequests,
      },
      {
        name: "accounts",
        path: "/home/accounts",
        component: Accounts
      },
      {
        name: "settings",
        path: "/home/settings",
        component: Settings
      },
      {
        name: "analytics",
        path: "/home/data-analytics",
        component: DataAnalytics
      },
    ]
  },
  {
    name: "service-details",
    path: "/service/:id",
    component: ServiceDetails
  },
  {
    name: "provider-details",
    path: "/provider/:id",
    component: ServiceProviderDetails
  },
  {
    name: "form-composer",
    path: "/composer",
    component: ComposerLayout,
    meta: { requiresAuth: true },
    children: [
      {
        name: "form-builder",
        path: "/composer/service/:id/specification",
        component: FormComposer
      },
      {
        name: "form-previewer",
        path: "/composer/service/preview/:id/specification",
        component: FormPreview
      },
    ]
  },
  ...authRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: "smooth" }
    }
  }
})

router.beforeEach((to, from, next) => {
  const { credentials, refreshToken } = useAuth()

  if (to.meta.requiresAuth) {
    if (credentials.value === undefined || refreshToken.value === undefined || refreshToken.value.exp < moment().unix()) {
      next({ name: "app-account-sign-in" })
    }
  } else if (to.name === "app-account-sign-in" && credentials.value !== undefined && refreshToken.value !== undefined) {
    next({ name: "app-home" })
  }

  next()
})
export default router
