interface IPrpsType {
  title: string
}

export const MenuItem = ({ title }: IPrpsType) => {
  return <div>{title}</div>
}
