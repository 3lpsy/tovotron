import {folder2FileName as parse, cap} from "./../helpers/index";

export default {

    container() {
        return require("./../layouts/default/Container.vue");
    },

    layout(layout) {
        return require(`./../layouts/default/${cap(layout)}.vue`);
    },

    page (main, page) {
        return require(`./../pages/${main}/${page}/${cap(page)}.vue`);
    },

    component (main, folder, component = null) {
        if (!component) {
            component = parse(folder);
        } else {
            component = parse(component);
        }
        return require(`./../components/${main}/${folder}/${component}.vue`);
    },

    provider (name) {
        return require(`./../${name}/index.js`).default;
    },

};
