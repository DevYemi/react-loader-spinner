import React, { FunctionComponent } from 'react'
import { BaseProps, Style } from '../type'

interface RingsProps extends BaseProps {
  radius?: string | number,
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})
export const Rings: FunctionComponent<RingsProps> = ({
  height = 80,
  width = 80,
  radius = 6,
  color = 'green',
  ariaLabel = 'rings-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}) => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass} data-testid="rings-loading">
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      aria-label={ariaLabel}
      data-testid="rings-svg"
    >
      <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
        <circle cx="22" cy="22" r={radius} strokeOpacity="0">
          <animate
            attributeName="r"
            begin="1.5s"
            dur="3s"
            values="6;22"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="1.5s"
            dur="3s"
            values="1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            begin="1.5s"
            dur="3s"
            values="2;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="22" cy="22" r={Number(radius) + 2}>
          <animate
            attributeName="r"
            begin="0s"
            dur="1.5s"
            values="6;1;2;3;4;5;6"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
)

export default Rings
