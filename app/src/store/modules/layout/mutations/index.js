import * as types from './types';

export default {
    [types.TOGGLE_SIDEBAR]: (state, rootState) => {
        state.isSidebarExpanded = ! state.isSidebarExpanded;
    }
}
