import { IBoard } from "../interfaces/IBoard"
import placeHolderImage from "../assets/imgs/place-holder.png"

interface IPoprsType {
  board: IBoard
}

export const BoardPreview = ({ board }: IPoprsType) => {
  const { _id: id, title, description, imageUrl } = board

  return (
    <div>
      {title ? <div>{title}</div> : null}
      {description ? <div>{description}</div> : null}
      <img src={imageUrl || placeHolderImage} />
    </div>
  )
}
