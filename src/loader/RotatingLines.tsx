import React from 'react'

type Props = {};

const style = {

export default function RotatingLines ({}: Props) {
  return (
    <svg className="loading-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48">
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(  0, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate( 30, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate( 60, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate( 90, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(120, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(150, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(180, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(210, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(240, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(270, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(300, 24, 24)" />
    <polyline className="loading-spinner__line" points="24,12 24,4" transform="rotate(330, 24, 24)" />
  </svg>
  )
}


//**

.loading-spinner {
  width: 96px;
  animation: spin12 0.75s steps(12, end) infinite;
}

@keyframes spin12 {
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner__line {
  stroke: #333;
  stroke-width: 5;
  stroke-linecap: round;
}

.loading-spinner__line:nth-child(12n+0) { stroke-opacity: 0.08; }
.loading-spinner__line:nth-child(12n+1) { stroke-opacity: 0.17; }
.loading-spinner__line:nth-child(12n+2) { stroke-opacity: 0.25; }
.loading-spinner__line:nth-child(12n+3) { stroke-opacity: 0.33; }
.loading-spinner__line:nth-child(12n+4) { stroke-opacity: 0.42; }
.loading-spinner__line:nth-child(12n+5) { stroke-opacity: 0.5; }
.loading-spinner__line:nth-child(12n+6) { stroke-opacity: 0.58; }
.loading-spinner__line:nth-child(12n+7) { stroke-opacity: 0.66; }
.loading-spinner__line:nth-child(12n+8) { stroke-opacity: 0.75; }
.loading-spinner__line:nth-child(12n+9) { stroke-opacity: 0.83; }
.loading-spinner__line:nth-child(12n+11) { stroke-opacity: 0.92; }




*/
