export default [
  {
    path: '/',
    redirect: 'dashboard',
    component: () => import(/* webpackChunkName: "demo" */ '../components/Dashboard.vue'),
    children: 
    [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../components/Dashboard.vue'),
      },
    ]
  }
]