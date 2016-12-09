import calendarIndex from "./calendar/index";
import homeIndex from "./home/index";
import monthIndex from "./month/index";
import projectIndex from "./project/index";
import projectCreate from "./project/create";

import taskIndex from "./task/index";
import todayIndex from "./today/index";
import weekIndex from "./week/index";

import redirect from "./redirect";

export default [
    calendarIndex(),
    homeIndex(),
    monthIndex(),
    projectIndex(),
    projectCreate(),
    taskIndex(),
    todayIndex(),
    weekIndex(),
    redirect()
];
