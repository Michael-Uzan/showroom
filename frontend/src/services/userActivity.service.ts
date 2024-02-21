import { DEBOUNCE_TIME, DEFAULT_PAGE, USER_ACTIVITY_API } from "../config"
import { IUserActivity } from "../interfaces/IUserActivity"
import { httpService } from "./http.service"

import loadsh from "lodash"

export const userActivityService = {
  evokePageLoadActivity,
  evokeBoardClickedActivity,
  evokeBoardViewedActivity,
}

function save(userActivity: IUserActivity) {
  const newActivity = { ...userActivity, timestamp: Date.now() }
  return httpService.post(USER_ACTIVITY_API, newActivity)
}

// a function to bulked the activities in order to reduce calls to the backend
const debounceSaved = loadsh.debounce(function (activity: IUserActivity) {
  save(activity)
}, DEBOUNCE_TIME)

function evokePageLoadActivity(page: string = DEFAULT_PAGE) {
  debounceSaved({
    event_type: "page_load",
    page,
  } as IUserActivity)
}

function evokeBoardClickedActivity(
  boardId: string,
  page: string = DEFAULT_PAGE
) {
  debounceSaved({
    event_type: "board_clicked",
    page,
    data: { board_id: boardId },
  } as IUserActivity)
}

function evokeBoardViewedActivity(
  boardId: string,
  page: string = DEFAULT_PAGE
) {
  // bored view is limited to only 1  run - so don't need to debounce it.
  save({
    event_type: "board_viewd",
    page,
    data: { board_id: boardId },
  } as IUserActivity)
}
