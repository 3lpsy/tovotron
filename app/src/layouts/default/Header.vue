<template>
    <section class="hero is-primary">
        <div class="hero-head">
            <div class="container">
                <nav class="nav">
                    <span class="nav-item" @click="toggleSidebar">
                        <span class="icon">
                            <i :class="sidebarToggleButtonIconClass" aria-hidden="true">
                            </i>
                       </span>
                    </span>
                    <div class="nav-center">
                      <div class="nav-item is-brand has-text-centered">
                        <p class="heading">Tovotron</p>
                      </div>
                    </div>
                    <span class="nav-item">
                        <span class="icon">
                         <i class="fa fa-gear"></i>
                       </span>
                    </span>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            isSidebarExpanded() {
                return this.$store.getters["layout/getters/isSidebarExpanded"];
            },
            sidebarToggleButtonIconName() {
                return this.isSidebarExpanded ? "chevron-circle-left" : "chevron-circle-right";
            },
            sidebarToggleButtonIconClass() {
                return "fa fa-" + this.sidebarToggleButtonIconName;
            }
        },
        methods: {
            toggleSidebar() {
                return this.$store.dispatch("layout/actions/toggleSidebar");
            }
        }
    };
</script>

<style type="text/css">

</style>
