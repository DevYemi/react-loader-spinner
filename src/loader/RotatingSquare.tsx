import React from 'react'
import { Style } from '../type'

type RotatingSquareProps = {
  style?: Style
  wrapperClass?: ''
  color?: string
  strokeWidth?: string | number
  height?: string | number
  width?: string | number
  ariaLabel?: string
  wrapperStyle?: Style
  visible?: boolean
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none',
})

const RotatingSquare: React.FunctionComponent<RotatingSquareProps> = ({
  wrapperClass = '',
  color = 'red',
  height = 100,
  width = 100,
  strokeWidth = 4,
  ariaLabel = 'rotating-square-loading',
  wrapperStyle = {},
  visible = true,
}: RotatingSquareProps): React.ReactElement => {
  return (
    <div
      style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
      className={wrapperClass}
      data-testid="rotating-square-wrapper"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        height={`${height}`}
        width={`${width}`}
        aria-label={ariaLabel}
        data-testid="rotating-square-svg"
        xmlSpace="preserve"
      >
        <rect
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          x="25"
          y="25"
          width="50"
          height="50"
        >
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          />
        </rect>
        <rect x="27" y="27" fill={color} width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          />
        </rect>
      </svg>
    </div>
  )
}

export default RotatingSquare
