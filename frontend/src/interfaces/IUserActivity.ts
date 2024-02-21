export interface IUserActivity {
  _id: string
  timestamp: number
  page: string
  event_type: string
  data?: { board_id?: string }
}
