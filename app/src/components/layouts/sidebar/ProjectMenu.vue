<template>
    <div>
        <p class="menu-label nav-side-label">
            <span>
                <span class="icon is-small" @click="toggleMenu">
                    <i :class="toggleIconClass"></i>
                </span>
                Projects
                <span class="icon is-small" @click="goTo('project')">
                    <i class="fa fa-gear"></i>
                </span>
                <span class="icon is-small" @click="goTo('project.create')">
                    <i class="fa fa-plus"></i>
                </span>
            </span>
        </p>
        <ul class="menu-list" v-if="isExpanded">
            <li v-for="project in projects">
                <router-link to="project">
                    <span class="icon is-small">
                        <i :class="'fa fa-' + project.icon"></i>
                    </span>
                    {{project.name}}
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
            projects() {
                return this.$store.getters['project/getters/all']
            },
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
            },
            goTo(name) {
                this.$router.push({name});
            }
        }
    };
</script>

<style type="text/css">

</style>
