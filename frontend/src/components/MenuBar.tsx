import { IBoard } from "../interfaces/IBoard"
import { MenuItem } from "./MenuItem"

interface IPropsType {
  boards: IBoard[]
}

export const MenuBar = ({ boards }: IPropsType) => {
  return (
    <div>
      {boards.map(({ title }: IBoard) => (
        <MenuItem title={title} />
      ))}
    </div>
  )
}
