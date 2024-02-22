import { httpService } from "./http.service"
import { BOARD_API } from "../config"

export const boardService = {
  query,
}

function query() {
  return httpService.get(BOARD_API)
}
