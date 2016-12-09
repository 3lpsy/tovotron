<template>
    <div>
        <aside :class="navSideClass" v-if="isSidebarExpanded">
            <ul class="menu-list">
                <li>
                    <router-link to="project">
                        <span class="icon is-small">
                            <i class="fa fa-list"></i>
                        </span>
                        Boards
                    </router-link>
                </li>
            </ui>
            <ul class="menu-list">
                <li>
                    <router-link to="task">
                        <span class="icon is-small">
                            <i class="fa fa-list"></i>
                        </span>
                        Tasks
                    </router-link>
                </li>
            </ui>
            <ul class="menu-list">
                <li>
                    <router-link to="calendar">
                        <span class="icon is-small">
                            <i class="fa fa-calendar"></i>
                        </span>
                        Calendar
                    </router-link>
                </li>
            </ui>
            <br>
            <sidebar-project-menu>
            </sidebar-project-menu>
            <br>
            <sidebar-time-menu>
            </sidebar-time-menu>

        </aside>
    </div>
</template>

<script>
    import loader from "./../../../utils/loader";
    export default {
        computed: {
            isSidebarExpanded() {
                return this.$store.getters["layout/getters/isSidebarExpanded"];
            },
            navSideStatusClass() {
                return this.isSidebarExpanded ? "is-expanded" : "";
            },
            navSideClass() {
                return "nav-side " + this.navSideStatusClass;
            }
        },
        components: {
            SidebarProjectMenu: loader.component("layouts", "sidebar", "project-menu"),
            SidebarTimeMenu: loader.component("layouts", "sidebar", "time-menu"),

        }
    };
</script>

<style type="text/css">

.nav-side-label a.label-icon {
    display: inline-block !important;
}
.nav-side.is-expanded {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    padding: 20px 0 50px;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1023;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
}

.nav-side-label {
    padding-left: 5px;
}

.nav-side-menu {

}
</style>
