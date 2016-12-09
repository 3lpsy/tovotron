import * as mutations from "./../mutations/types";

export const toggleSidebar = (context) => {
    context.commit(mutations.TOGGLE_SIDEBAR);
}
