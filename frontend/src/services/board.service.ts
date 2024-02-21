import { httpService } from "./http.service"

export const boardService = {
  query,
}

function query() {
  return httpService.get(`boards`)
}
