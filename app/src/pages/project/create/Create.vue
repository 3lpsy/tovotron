<template>
    <div>
        <app-container>
            <div slot="main">
                <p>
                    CREATE PROJECT
                </p>
            </div>
        </app-container>
    </div>
</template>

<script>
import loader from "../../../utils/loader";

export default {
    name: 'project-create',
    data() {
        return {};
    },
    components: {
        AppContainer: loader.layout('container'),
    }
};
</script>

<style type="text/css">

</style>
