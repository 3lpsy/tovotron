<template>
    <div>
        <app-container>
            <div slot="main">
                <div class="section">
                    <div class="container">
                        EMBEDDED TASK CREATOR
                    </div>
                </div>
                <div class="section">
                    <div class="container">
                        LIST TASKS LIKE TIMELINE
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
        TaskCreateEmbedded: loader.component('task', 'create', 'embedded' ),
    }
};
</script>

<style type="text/css">

</style>
