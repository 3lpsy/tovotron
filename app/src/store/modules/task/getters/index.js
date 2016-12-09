import * as types from './types';

export default {
    [types.ALL]: (state) => {
        return state.tasks;
    }
}
