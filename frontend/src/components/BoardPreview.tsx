import { IBoard } from "../interfaces/IBoard"
import placeHolderImage from "../assets/imgs/place-holder.png"
import { userActivityService } from "../services/userActivity.service"

import { useRef } from "react"

interface IPropsType {
  board: IBoard
}

export const BoardPreview = ({ board }: IPropsType) => {
  const isHovered = useRef<boolean>(false)

  const { _id: id, title, description, imageUrl } = board

  const onBoardClicked = async () => {
    try {
      await userActivityService.evokeBoardClickedActivity(id)
    } catch (error) {
      console.error("cannot send activity to backend", error)
    }
  }

  const onBoardHover = async () => {
    if (isHovered.current) {
      return
    }

    try {
      await userActivityService.evokeBoardViewedActivity(id)
      isHovered.current = true
    } catch (error) {
      console.error("cannot send activity to backend", error)
    }
  }

  return (
    <div
      className="board-preview"
      onClick={onBoardClicked}
      onMouseEnter={onBoardHover}
    >
      <div className="board-title capital">{title}</div>
      {description ? (
        <div className="board-description">{description}</div>
      ) : null}
      <img src={imageUrl || placeHolderImage} />
    </div>
  )
}
