export const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:3030/api/"

export const BOARD_API = "boards"
export const USER_ACTIVITY_API = "user-activity"

export const DEFAULT_PAGE = "showroom_feed"
export const DEBOUNCE_TIME = 2000
