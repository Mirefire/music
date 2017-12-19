import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage')
    // },
    {
      path: '/',
      name: 'index',
      component: require('@/components/index').default
      // children: [
      //   {path: '/', name: 'Leftmusic', component: Leftmusic},
      //   {path: '/music', name: 'Leftmusic', component: Leftmusic},
      //   {path: '/download', name: 'Leftdownload', component:Leftdownload},
      //   {path: '/collect', name: 'Leftcollect', component: Leftcollect},
      //   {path: '/manner', name: 'Leftmanner', component: Leftmanner}
      // ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
