import Vue from 'vue'
import VueRouter from 'vue-router'
import GeneralView from '../views/GeneralView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GeneralView
  },
  {
    path: '/companies',
    name: 'companies',
    component: () => import('../views/CompaniesListing.vue')
  },
  {
    path: '/opportunities',
    props: true,
    name: 'opportunities',
    component: () => import('../views/OpportunitiesListing.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchResults.vue')
  },
  {
    path: '/opportunity',
    props: true,
    name: 'opportunity',
    component: () => import('../views/Opportunity.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
