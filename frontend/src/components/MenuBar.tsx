import { IBoard } from "../interfaces/IBoard"
import { MenuItem } from "./MenuItem"

interface IPropsType {
  boards: IBoard[]
}

export const MenuBar = ({ boards }: IPropsType) => (
  <div className="menu-bar">
    {boards.map((board: IBoard) => (
      <MenuItem key={board._id} board={board} />
    ))}
  </div>
)
