import loader from "./../../../utils/loader";

const beforeEnter = (route, redirect, next) => {
    next();
}

const beforeRouteLeave = (route, redirect, next) => {
    next();
}

export default () => {
    return {
        path: '/project/create',
        name: 'project.create',
        component: loader.page('project', 'create'),
        beforeEnter: beforeEnter,
        beforeRouteLeave: beforeRouteLeave,
    }
}
