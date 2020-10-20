import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'

export default [
  {
    path: 'accounts',
    component: empty, // Parent router-view
    redirect: '',
    meta: { title: i18n.t('route.Accounts') },
    children: [
      {
        path: '',
        component: () => import('@/views/accounts/Account/AccountList'), // Parent router-view
        name: 'AccountList',
        meta: { title: i18n.t('route.AccountList'), activeMenu: '/accounts/accounts' }
      },
      {
        path: 'create',
        component: () => import('@/views/accounts/Account/AccountCreateUpdate'), // Parent router-view
        name: 'AccountCreate',
        hidden: true,
        meta: { title: i18n.t('route.AccountCreate'), activeMenu: '/accounts/accounts', action: 'create' }
      },
      {
        path: ':id/update',
        component: () => import('@/views/accounts/Account/AccountCreateUpdate'), // Parent router-view
        name: 'AccountUpdate',
        hidden: true,
        meta: { title: i18n.t('route.AccountUpdate'), activeMenu: '/accounts/accounts', action: 'update' }
      },
      {
        path: ':id',
        component: () => import('@/views/accounts/Account/AccountDetail/index'), // Parent router-view
        name: 'AccountDetail',
        hidden: true,
        meta: { title: i18n.t('route.AccountDetail'), activeMenu: '/accounts/accounts' }
      }
    ]
  },
  {
    path: 'account-types',
    component: empty, // Parent router-view
    redirect: '',
    meta: { title: i18n.t('route.AccountType') },
    children: [
      {
        path: '',
        component: () => import('@/views/accounts/AccountType/AccountTypeList'), // Parent router-view
        name: 'AccountTypeList',
        meta: { title: i18n.t('route.AccountTypeList'), activeMenu: '/accounts/account-types' }
      },
      {
        path: 'create',
        component: () => import('@/views/accounts/AccountType/AccountTypeCreateUpdate'), // Parent router-view
        name: 'AccountTypeCreate',
        hidden: true,
        meta: { title: i18n.t('route.AccountTypeCreate'), activeMenu: '/accounts/account-types', action: 'create' }
      },
      {
        path: ':id/update',
        component: () => import('@/views/accounts/AccountType/AccountTypeCreateUpdate.vue'), // Parent router-view
        name: 'AccountTypeUpdate',
        hidden: true,
        meta: { title: i18n.t('route.AccountTypeUpdate'), activeMenu: '/accounts/account-types', action: 'update' }
      },
      {
        path: ':id',
        component: () => import('@/views/accounts/AccountType/AccountTypeDetail/index.vue'), // Parent router-view
        name: 'AccountTypeDetail',
        hidden: true,
        meta: { title: i18n.t('route.AccountTypeDetail'), activeMenu: '/accounts/account-types' }
      }
    ]
  },
  {
    path: 'namespaces',
    component: empty, // Parent router-view
    redirect: '',
    meta: { title: i18n.t('route.Namespaces') },
    children: [
      {
        path: '',
        component: () => import('@/views/accounts/Namespace/NamespaceList'), // Parent router-view
        name: 'NamespaceList',
        meta: { title: i18n.t('route.Namespace'), activeMenu: '/accounts/namespaces' }
      },
      {
        path: 'create',
        component: () => import('@/views/accounts/Namespace/NamespaceCreateUpdate'), // Parent router-view
        name: 'NamespaceCreate',
        hidden: true,
        meta: { title: i18n.t('route.NamespaceCreate'), activeMenu: '/accounts/namespaces', action: 'create' }
      },
      {
        path: ':id/update',
        component: () => import('@/views/accounts/Namespace/NamespaceCreateUpdate'), // Parent router-view
        name: 'NamespaceUpdate',
        hidden: true,
        meta: { title: i18n.t('route.NamespaceUpdate'), activeMenu: '/accounts/namespaces', action: 'update' }
      },
      {
        path: ':id',
        component: () => import('@/views/accounts/Namespace/NamespaceDetail/index'), // Parent router-view
        name: 'NamespaceDetail',
        hidden: true,
        meta: { title: i18n.t('route.NamespaceDetail'), activeMenu: '/accounts/namespaces' }
      }
    ]
  },
  {
    path: 'roles',
    component: empty, // Parent router-view
    redirect: '',
    meta: { title: i18n.t('route.Roles') },
    children: [
      {
        path: '',
        component: () => import('@/views/accounts/Role/RoleList'), // Parent router-view
        name: 'RoleList',
        meta: { title: i18n.t('route.Role'), activeMenu: '/accounts/roles' }
      },
      {
        path: 'create',
        component: () => import('@/views/accounts/Role/RoleCreateUpdate'), // Parent router-view
        name: 'RoleCreate',
        hidden: true,
        meta: { title: i18n.t('route.RoleCreate'), activeMenu: '/accounts/roles', action: 'create' }
      },
      {
        path: ':id/update',
        component: () => import('@/views/accounts/Role/RoleCreateUpdate'), // Parent router-view
        name: 'RoleUpdate',
        hidden: true,
        meta: { title: i18n.t('route.RoleUpdate'), activeMenu: '/accounts/roles', action: 'update' }
      },
      {
        path: ':id',
        component: () => import('@/views/accounts/Role/RoleDetail/index'), // Parent router-view
        name: 'RoleDetail',
        hidden: true,
        meta: { title: i18n.t('route.RoleDetail'), activeMenu: '/accounts/roles' }
      }
    ]
  }

]