import loader from "./../../../utils/loader";

const beforeEnter = (route, redirect, next) => {
    next();
}

const beforeRouteLeave = (route, redirect, next) => {
    next();
}

export default () => {
    return {
        path: '/week',
        name: 'week',
        component: loader.page('week', 'index'),
        beforeEnter: beforeEnter,
        beforeRouteLeave: beforeRouteLeave,
    }
}
