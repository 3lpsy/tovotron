import loader from "./../../../utils/loader";

const beforeEnter = (route, redirect, next) => {
    next();
}

const beforeRouteLeave = (route, redirect, next) => {
    next();
}

export default () => {
    return {
        path: '/calendar',
        name: 'calendar',
        component: loader.page('calendar', 'index'),
        beforeEnter: beforeEnter,
        beforeRouteLeave: beforeRouteLeave,
    }
}
