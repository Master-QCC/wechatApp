import Vue from 'vue'
import Router from 'vue-router'

import {
  getUrlParam,
  createWechatUrl
} from '@/alias/utils'

import Index from '../views/index'
import Maillist from '../views/maillist'
import User from '../views/user'
import Chats from '../views/chats'
import Userwatch from '../views/userwatch'
import Userwallet from '../views/userwallet'
import Userfavourite from '../views/userfavourite'
import Me from '../views/me'
import Find from '../views/find'
import Usersetting from '../views/usersetting'
import Usercard from '../views/usercard'
import Userphoto from '../views/userphoto'
import Useremoji from '../views/useremoji'
import Useremojitwo from '../views/useremojitwo'
import Useremojisetting from '../views/useremojisetting'

Vue.use(Router);

const staticRouter = [{
  path: '/',
  name: 'Index',
  component: Index,
},{
  path: '/user',
  name: 'User',
  component: User,
},{
  path: '/maillist',
  name: 'Maillist',
  component: Maillist,
},{
  path: '/chats/:id',
  name: 'Chats',
  component: Chats,
},{
  path: '/userwatch',
  name: 'Userwatch',
  component: Userwatch,
},{
  path: '/userwallet',
  name: 'Userwallet',
  component: Userwallet,
},{
  path: '/userfavourite',
  name: 'Userfavourite',
  component: Userfavourite,
},{
  path: '/me',
  name: 'Me',
  component: Me,
},{
  path: '/find',
  name: 'Find',
  component: Find,
},{
  path: '/usersetting',
  name: 'Usersetting',
  component: Usersetting,
},{
  path: '/usercard',
  name: 'Usercard',
  component: Usercard,
},{
  path: '/userphoto',
  name: 'Userphoto',
  component: Userphoto,
},{
  path: '/useremoji',
  name: 'Useremoji',
  component: Useremoji,
},{
  path: '/useremojitwo',
  name: 'Useremojitwo',
  component: Useremojitwo,
},{
  path: '/useremojisetting',
  name: 'Useremojisetting',
  component: Useremojisetting,
}]

const router = new Router({
  mode: 'hash',
  routes: staticRouter,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
});

export default router