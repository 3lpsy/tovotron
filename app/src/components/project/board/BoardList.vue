<template>
    <div>
        <div class="board-list">
            <project-board v-for="project in projects" :project="project">
            </project-board>
        </div>
    </div>
</template>

<script>
    import loader from "./../../../utils/loader";

    export default {
        mounted () {
        },
        computed: {
            projects() {
                return this.$store.getters['project/getters/all']
            }
        },
        components: {
            ProjectBoard: loader.component("project", "board", "board")
        }
    };
</script>

<style type="text/css">

</style>
