
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Главная', component: () => import('src/pages/Main.vue') },
      { path: '/sign-in', name: 'Авторизация', component: () => import('src/pages/Authorization.vue') },
      { path: '/sign-up', name: 'Регистрация', component: () => import('src/pages/Registration.vue') },
      { path: '/details', component: () => import('src/pages/ProductDetails.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
