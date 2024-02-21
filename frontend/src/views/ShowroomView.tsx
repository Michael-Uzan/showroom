import { useEffect, useState } from "react"
import { LoaderWrapper } from "../components/common/LoaderWrapper"
import { boardService } from "../services/board.service"
import { IBoard } from "../interfaces/IBoard"
import { BoardPreview } from "../components/common/BoardPreview"

const ShowroomViewWrapper = () => {
  const [boards, setBoards] = useState<IBoard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoading(true)
        const loadBoards = await boardService.query()
        if (loadBoards) {
          setBoards(loadBoards)
        } else {
          setError(true)
        }
      } catch (error) {
        setError(true)
        console.error("cannot load boards", error)
      } finally {
        setLoading(false)
      }
    }

    loadTodos()
  }, [])

  return (
    <LoaderWrapper loading={loading} error={error}>
      <ShowroomView boards={boards} />
    </LoaderWrapper>
  )
}

export default ShowroomViewWrapper

const ShowroomView = ({ boards }: { boards: IBoard[] }) => {
  return (
    <div>
      {boards.map((board: IBoard) => (
        <BoardPreview key={board._id} board={board} />
      ))}
    </div>
  )
}
