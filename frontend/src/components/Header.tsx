import { IconArrow, IconSearch, IconTriangle } from "./common/Icons"

export const Header = () => (
  <header className="header flex space-between align-center">
    <div className="flex align-center">
      <IconArrow className="pointer" />
      <h1 className="logo upper-case bold">{"van Heusen"}</h1>
      <div className="flex align-center pointer">
        <h3 className="title capital">{"brands"}</h3>
        <IconTriangle className="triangle" />
      </div>
    </div>
    <IconSearch className="pointer" />
  </header>
)
