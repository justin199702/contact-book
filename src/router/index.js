import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首頁', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Class',
    meta: { title: '班級管理', icon: 'peoples', affix: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Class/index'),
        name: 'Class',
        meta: { title: '班級管理', icon: 'peoples', affix: true }
      },
      {
        path: 'NewClass',
        component: () => import('@/views/Class/SubView/NewClass'),
        name: 'NewClass',
        meta: { title: '新增班級', icon: 'peoples', affix: true }
      },
      {
        path: 'ReviseClass',
        component: () => import('@/views/Class/SubView/ReviseClass'),
        name: 'NewClass',
        meta: { title: '修改班級', icon: 'peoples', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    name: 'Student',

    children: [
      {
        path: 'index',
        component: () => import('@/views/Student/index'),
        name: 'Guide',
        meta: { title: '學生管理', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '公告管理', icon: 'el-icon-message', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/Grades',
    component: Layout,
    children: [
      {
        path: 'page',
        component: () => import('@/views/Grades/index'),
        name: 'Grades',
        meta: {
          title: '成績管理',
          icon: 'el-icon-s-order',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },

  {
    path: '/Attendance',
    component: Layout,
    children: [
      {
        path: 'Attendance',
        component: () => import('@/views/Attendance/index'),
        name: 'Icons',
        meta: { title: '出勤管理', icon: 'skill', noCache: true }
      }
    ]
  },
  {
    path: '/Teacher',
    component: Layout,
    redirect: '/example/list',
    name: 'Teacher',
    meta: {
      title: '教師管理',
      icon: 'el-icon-s-custom'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/Teacher/index'),
        name: 'index',
        meta: { title: '教師管理', icon: 'edit' }
      }
    ]
  },

  {
    path: '/pay',
    component: Layout,
    name: 'Pay',
    meta: {
      title: '繳費管理',
      icon: ''
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Pay/index'),
        name: 'Tab',
        meta: { title: '繳費管理', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: '公告管理',
      icon: 'el-icon-message'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/Announcemet/index'),
        name: 'Announcemet',
        meta: { title: '公告管理', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/Announcemet/SubView/NewAnnouncemet'),
        name: 'NewAnnouncemet',
        meta: { title: '新增公告', noCache: true }
      },
      {
        path: '405',
        component: () => import('@/views/Announcemet/SubView/AnnouncementView'),
        name: 'ViewAnnouncemet',
        meta: { title: '公告檢視', noCache: true }
      }
    ]
  },
  componentsRouter,
  {
    path: '/Test',
    component: Layout,
    children: [
      {
        path: 'Test',
        component: () => import('@/views/Test/Test'),
        name: 'Icons',
        meta: { title: '元件測試', icon: 'skill', noCache: true }
      }
    ]
  },
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/error-log/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Log', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'Excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/export-excel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'Export Excel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/select-excel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'Export Selected' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/merge-header'),
  //       name: 'MergeHeader',
  //       meta: { title: 'Merge Header' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/upload-excel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'Upload Excel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   name: 'Zip',
  //   meta: { title: 'Zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'Export Zip' }
  //     }
  //   ]
  // },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'PDF', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'Theme', icon: 'theme' }
  //     }
  //   ]
  // },

  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'Clipboard', icon: 'clipboard' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // /** when your routing map is too long, you can split it into small modules **/
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
