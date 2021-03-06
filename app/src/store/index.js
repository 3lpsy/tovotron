import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules,
    plugins: [createLogger({
        mutationTransformer: (mutation) => {
            return mutation.type;
        }
    })],
    strict: true
})
