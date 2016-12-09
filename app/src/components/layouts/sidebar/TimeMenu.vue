<template>
    <div>
        <p class="menu-label nav-side-label">
            <span>
                <span class="icon is-small" @click="toggleMenu">
                    <i :class="toggleIconClass"></i>
                </span>
                Time
                <span class="icon is-small">
                        <i class="fa fa-gear"></i>
                </span>
            </span>
        </p>
        <ul class="menu-list" v-if="isExpanded">
            <li>
                <router-link to="today">
                    <span class="icon is-small">
                        <i class="fa fa-clock-o "></i>
                    </span>
                    Today
                </router-link>
            </li>
            <li>
                <router-link to="week">
                    <span class="icon is-small">
                        <i class="fa fa-circle-o-notch "></i>
                    </span>
                    Week
                </router-link>
            </li>
            <li>
                <router-link to="month">
                    <span class="icon is-small">
                        <i class="fa fa-circle-o"></i>
                    </span>
                    Month
                </router-link>
            </li>
        </ui>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                localIsExpanded: true
            }
        },
        computed: {
            toggleIconName() {
                return this.isExpanded ? "angle-down" : "angle-right";
            },
            toggleIconClass() {
                return "fa fa-" + this.toggleIconName;
            },
            isExpanded() {
                return this.localIsExpanded;
            }
        },
        methods: {
            toggleMenu() {
                this.localIsExpanded = ! this.isExpanded;
            }
        }
    };
</script>

<style type="text/css">

</style>
