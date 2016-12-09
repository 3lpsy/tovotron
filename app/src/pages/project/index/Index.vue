<template>
    <div>
        <app-container>
            <div slot="main">
                <div class="section">
                    <div class="container">
                        EMBEDDED PROJECT CREATOR
                    </div>
                </div>
                <div class="section">
                    <div class="container">
                        <project-board-list></project-board-list>
                    </div>
                </div>
            </div>
        </app-container>
    </div>
</template>

<script>
import loader from "../../../utils/loader";

export default {
    name: 'task',
    computed: {
        tasks() {
            return this.$store.getters['task/getters/all'];
        }
    },
    components: {
        AppContainer: loader.layout('container'),
        ProjectBoardList: loader.component('project', 'board', 'board-list' ),
        EmbeddedProjectCreator: loader.component('project', 'create', 'embedded' ),
    }
};
</script>

<style type="text/css">

</style>
