import { IUserActivity } from "../interfaces/IUserActivity"
import { httpService } from "./http.service"

export const userActivityService = {
  save,
}

function save(userActivity: IUserActivity) {
  return httpService.post(`user-activity`, userActivity)
}
