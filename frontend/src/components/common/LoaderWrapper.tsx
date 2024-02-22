import ImageLoading from "../../assets/imgs/Loading.gif"

import { ReactNode } from "react"

interface IPropType {
  children: ReactNode
  loading?: boolean
  error?: boolean
  errorMessage?: string
  className?: string
}

export const LoaderWrapper = ({
  className,
  children,
  loading,
  error,
  errorMessage,
}: IPropType) => {
  return loading ? (
    <div className="loader-wrapper">
      <img className="loader-image" src={ImageLoading} />
    </div>
  ) : error ? (
    <div className="loader-wrapper">
      <div className="page-not-found">{errorMessage || "404 Not Found!"}</div>
    </div>
  ) : (
    <div className={className}>{children}</div>
  )
}
