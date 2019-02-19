import Vue from 'vue'
import Router from 'vue-router'
import QaList from '@/components/QaList'
import Showqa from '@/components/Showqa'
import Createqa from '@/components/Createqa'
import Editqa from '@/components/Editqa'
import Viewqa from '@/components/Viewqa'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QaList',
      component: QaList
    },
    {
      path: '/show-qa/:id',
      name: 'Showqa',
      component: Showqa
    },
    {
      path: '/create-qa',
      name: 'Createqa',
      component: Createqa
    },
    {
      path: '/edit-qa/:id',
      name: 'Editqa',
      component: Editqa
    },
    {
      path: '/view-qa',
      name: 'Viewqa',
      component: Viewqa
    }
  ]
})
