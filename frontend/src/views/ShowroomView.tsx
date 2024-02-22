import { LoaderWrapper } from "../components/common/LoaderWrapper"
import { MenuBar } from "../components/MenuBar"
import { ShowroomPreview } from "../components/ShowroomPreview"
import { boardService } from "../services/board.service"
import { IBoard } from "../interfaces/IBoard"

import { useEffect, useState } from "react"

const ShowroomViewWrapper = () => {
  const [boards, setBoards] = useState<IBoard[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const loadBoards = async () => {
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

    loadBoards()
  }, [])

  return (
    <LoaderWrapper className="showroom-view" loading={loading} error={error}>
      <MenuBar boards={boards} />
      <ShowroomPreview boards={boards} />
    </LoaderWrapper>
  )
}

export default ShowroomViewWrapper
