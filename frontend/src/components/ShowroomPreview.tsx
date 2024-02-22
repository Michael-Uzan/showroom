import { IBoard } from "../interfaces/IBoard"
import { userActivityService } from "../services/userActivity.service"
import { BoardPreview } from "./BoardPreview"

import { useEffect } from "react"

interface IPropsType {
  boards: IBoard[]
}

export const ShowroomPreview = ({ boards }: IPropsType) => {
  useEffect(() => {
    const pageLoad = async () => {
      try {
        await userActivityService.evokePageLoadActivity()
      } catch (error) {
        console.error("cannot send activity to backend", error)
      }
    }

    pageLoad()
  }, [])

  return (
    <div className="showroom-preview">
      {boards.map((board: IBoard) => (
        <BoardPreview key={board._id} board={board} />
      ))}
    </div>
  )
}
