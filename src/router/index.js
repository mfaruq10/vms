import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '@/components/Home1.vue';
import Home from '../view/Home.vue';
import Chekin from '../view/Chekin.vue';
import Otp from '../view/Otp.vue';
import Summary from '../view/Summary.vue';
import Notenter from '../view/Not-enter.vue';
import Success from '../view/Success.vue';
import Kuisioner from '../view/Kuisioner.vue';
import Notifikasi from '../view/Notifikasi.vue';
import History from '../view/History.vue';
import Account from '../view/Account.vue';
import Setting from '../view/Setting.vue';

Vue.use(Router)


export default new Router ({
  routes:[
  { 
    path: '/',
    name: 'home1',
    component: Home1
  },
  { 
    path: '/home',
    name: 'home',
    component: Home
  },
  { 
    path: '/chekin',
    name: 'chekin',
    component: Chekin
  },
  { 
    path: '/otp',
    name: 'otp',
    component: Otp
  },
  { 
    path: '/summary',
    name: 'summary',
    component: Summary
  },
  { 
    path: '/not-enter',
    name: 'notenter',
    component: Notenter
  },
  { 
    path: '/success',
    name: 'success',
    component: Success
  },
  { 
    path: '/kuisioner',
    name: 'kuisioner',
    component: Kuisioner
  },
  { 
    path: '/notifikasi',
    name: 'notifikasi',
    component: Notifikasi
  },
  { 
    path: '/history',
    name: 'history',
    component: History
  },
  { 
    path: '/account',
    name: 'account',
    component: Account
  },
  { 
    path: '/setting',
    name: 'setting',
    component: Setting
  },
]
})
