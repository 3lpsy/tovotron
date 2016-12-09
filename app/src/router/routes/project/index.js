import loader from "./../../../utils/loader";

const beforeEnter = (route, redirect, next) => {
    next();
}

const beforeRouteLeave = (route, redirect, next) => {
    next();
}

export default () => {
    return {
        path: '/project',
        name: 'project',
        component: loader.page('project', 'index'),
        beforeEnter: beforeEnter,
        beforeRouteLeave: beforeRouteLeave,
    }
}
