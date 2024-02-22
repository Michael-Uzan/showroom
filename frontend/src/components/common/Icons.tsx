interface IPropsType {
  className?: string
  size?: number
  full?: boolean
  fill?: string
  onClick?: () => void | null
}

export const IconSearch = ({ className, size = 20 }: IPropsType) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="8 8 20 20"
    style={{ margin: "10px" }}
  >
    <g fill="#000" fillRule="evenodd">
      <circle cx="18" cy="18" r="14.727" fill="none" />
      <path d="M16 23a6.955 6.955 0 0 1-4.949-2.05 7.007 7.007 0 0 1 0-9.9A6.955 6.955 0 0 1 16 9c1.87 0 3.628.729 4.95 2.05a6.977 6.977 0 0 1 2.008 5.721 6.928 6.928 0 0 1-2.008 4.179A6.959 6.959 0 0 1 16 23m11.854 4.146-5.814-5.813c-.02-.02-.048-.03-.071-.047 1.131-1.276 1.807-2.812 1.983-4.406a7.99 7.99 0 0 0-2.295-6.537A7.976 7.976 0 0 0 16 8a8 8 0 0 0 0 16 7.97 7.97 0 0 0 5.296-2.017c.014.019.02.04.037.057l5.813 5.814a.502.502 0 0 0 .708 0 .502.502 0 0 0 0-.708" />
    </g>
  </svg>
)

export const IconArrow = ({ className, size = 25 }: IPropsType) => (
  <svg className={className} width={size} height={size} viewBox="0 0 25 25">
    <path
      // style="fill:#232326"
      fill="#000"
      d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
      data-name="Left"
    />
  </svg>
)

export const IconTriangle = ({ className, size = 8, fill }: IPropsType) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill={fill || "#212121"}
  >
    <polygon points="50 15, 100 100, 0 100" />
  </svg>
)
