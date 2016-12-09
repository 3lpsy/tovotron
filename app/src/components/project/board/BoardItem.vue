<template>
<div>
    <div class="board box is">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <p>
                    <strong>{{project.name}}</strong> <small>{{projectTasks.length}}</small>
                    {{project.description}}
                    </p>
                </div>
                board
            </div>
        </article>

    <br>
</div>
</template>

<script>
import loader from "./../../../utils/loader";

    export default {
        props: ['project', 'projectId'],
        mounted() {
            // if no project, check for projectId and get project by id
        },
        computed: {
            allTasks() {
                return this.$store.getters["task/getters/all"];
            },
            projectTasks() {
                return this.allTasks.filter((task) => {
                    return task.projectId === this.project.id;
                })
            }
        },
        components: {
            ProjectBoardItem: loader.component("project", "board", "board-task")
        }
    };
</script>

<style type="text/css">

</style>
