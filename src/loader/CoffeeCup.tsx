import React from 'react'
import { Style } from '../type'
import styled, { keyframes } from 'styled-components'

type Props = {
  ariaLabel?: string,
  wrapperStyle?: Style
  wrapperClass?: string
  visible?: boolean,
  color?: string,
  scale?: number
}

type CoffeeCupStyleProps = {
  scale: number,
  color: string,
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? '' : 'none'
})

const steam = keyframes`
  0% {
    height: 0px;
  }
  100% { 
    height: 6px;
  }  
`

const calculateBoxShadow = (originalScale: number = 1, color: string): string => {
  const scale = originalScale * 0.9
  return `${scale * 10}px 0px 0px 0px ${color},
   ${scale * 10}px -${scale * 10}px 0px 0px ${color}, 
   ${scale * 20}px 0px 0px 0px ${color}`
}

const CoffeeCupCore = styled('div')`
width: ${({ scale }: CoffeeCupStyleProps) => scale * 20}px;
height: ${({ scale }: CoffeeCupStyleProps) => scale * 24}px;
border: 1px solid red;
border-radius: 0px 0px 5px 5px; 
position: relative;
&: after, &:before {
  position: absolute
  content: ""
}

  &:after {
  width: ${({ scale }: CoffeeCupStyleProps) => scale * 5} px
  height: ${({ scale }: CoffeeCupStyleProps) => scale * 12} px
  border: 1px solid red;  
  border-left: none;
  border-radius: 0px 20px 20px 0px
  left: ${({ scale }: CoffeeCupStyleProps) => scale * 20}px;
}
  &:before {
  width: ${({ scale }: CoffeeCupStyleProps) => scale * 1}px;
  height: ${({ scale }: CoffeeCupStyleProps) => scale * 6}px;
  background-color: red;
  top: -10px;
  left: 4px;
  box-shadow: ${({ scale, color }: CoffeeCupStyleProps) =>
    calculateBoxShadow(scale, color)
  };
  -webkit-animation: ${steam} 1s linear infinite alternate;
  -moz-animation: ${steam} 1s linear infinite alternate;
  animation: ${steam} 1s linear infinite alternate;
}
`

const CoffeeCup: React.FunctionComponent<Props> = ({
  ariaLabel,
  wrapperClass,
  wrapperStyle,
  visible = true,
  color = 'green',
  scale = 1,
}): React.ReactElement => {
  return (
    <div
      aria-label={ariaLabel}
      role="presentation"
      style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
      className={`container ${wrapperClass} `}
      data-testid="cradle-loading"
    >
      <CoffeeCupCore color={color} scale={scale} />
    </div>
  )
}

export default CoffeeCup
