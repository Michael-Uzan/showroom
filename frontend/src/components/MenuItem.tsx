import { IBoard } from "../interfaces/IBoard"
import { userActivityService } from "../services/userActivity.service"

interface IPrpsType {
  board: IBoard
}

export const MenuItem = ({ board }: IPrpsType) => {
  const onBoardClicked = async () => {
    try {
      await userActivityService.evokeBoardClickedActivity(board._id)
    } catch (error) {
      console.error("cannot send activity to backend", error)
    }
  }

  return (
    <div className="menu-item capital">
      <a href={`#${board._id}`} className="pointer" onClick={onBoardClicked}>
        {board.title}
      </a>
    </div>
  )
}
