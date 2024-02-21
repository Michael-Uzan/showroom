import { BOARD_API } from "../config"
import { httpService } from "./http.service"

export const boardService = {
  query,
}

function query() {
  return httpService.get(BOARD_API)
}
