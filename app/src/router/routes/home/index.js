// import loader from "./../../../utils/loader";

const beforeEnter = (route, redirect, next) => {
    next();
}

const beforeRouteLeave = (route, redirect, next) => {
    next();
}

const homeIndex = () => {
    return {
        path: "/",
        redirect: "/task",
        // path: '/',
        // name: 'home',
        // component: loader.page('home', 'index'),
        beforeEnter: beforeEnter,
        beforeRouteLeave: beforeRouteLeave,
    }
}

export default homeIndex;
