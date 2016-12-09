<template>
    <div class="App--base">
        <app-header></app-header>
        <app-sidebar></app-sidebar>
        <div :class="slotMainClass">
            <slot name="main"></slot>
        </div>
        <div :class="footerWrapperClass">
            <app-footer></app-footer>

        </div>
    </div>


</template>

<script>
    import loader from "../../utils/loader";

    export default {
        mounted () {
        },
        computed: {
            isSidebarExpanded() {
                return this.$store.getters["layout/getters/isSidebarExpanded"];
            },
            isExpandedClass() {
                return this.isSidebarExpanded ? " is-expanded" : "";
            },
            slotMainClass() {
                return "content-main" + this.isExpandedClass;
            },
            footerWrapperClass() {
                return "footer-wrapper" + this.isExpandedClass;
            }
        },
        components: {
            AppHeader: loader.layout('header'),
            AppSidebar: loader.component('layouts', 'sidebar'),
            AppFooter: loader.layout('footer')
        }
    };
</script>

<style type="text/css">
.content-main.is-expanded {
    margin-left: 180px;
}

.footer-wrapper.is-expanded {
    margin-left: 180px;
}
</style>
