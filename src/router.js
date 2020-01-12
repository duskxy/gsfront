const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/search.vue'], resolve)
    },
    {
        path: '/search',
        name: 'search',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/search.vue'], resolve)
    },
    {
        path: '/asset',
        name: 'asset',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/asset.vue'], resolve)
    },
    {
        path: '/gdork',
        name: 'gdork',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/dork.vue'], resolve)
    }
];
export default routers;