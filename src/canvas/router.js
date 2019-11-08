export const canvasRouter = [
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('../views/Canvas'),
    children: [
      {
        path: '/demo-001',
        name: 'demo-001',
        component: () => import('../canvas/components/demo-001.vue')
      }
    ]
  }
]
