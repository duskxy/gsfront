const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/search',
        name: 'search',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/search.vue'], resolve)
    }
];
export default routers;