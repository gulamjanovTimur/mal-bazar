
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Главная', component: () => import('src/pages/Main.vue') },
      { path: '/sign-in', name: 'Авторизация', component: () => import('src/pages/Authorization.vue') },
      { path: '/sign-up', name: 'Регистрация', component: () => import('src/pages/Registration.vue') },
      { path: '/details', component: () => import('src/pages/ProductDetails.vue') },
      { path: '/create', name: 'Создание объявления', component: () => import('src/pages/Create.vue') },
      { path: '/office', component: () => import('src/pages/Office.vue'),
        children: [
          { path: '', name: 'Пользователь | Личный кабинет', component: () => import('src/components/OfficeUser.vue')},
          { path: 'posts', name: 'Мои объявления | Личный кабинет', component: () => import('src/components/OfficePosts.vue')},
          { path: 'chats', name: 'Список чатов | Личный кабинет', component: () => import('src/components/OfficeChats.vue')},
        ]
      },
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
