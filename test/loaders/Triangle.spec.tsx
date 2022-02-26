import React from 'react'
import { Triangle } from '../../src/'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'triangle-loading'
const svgTestId = 'triangle-svg'

describe('Triangle Loader', () => {
  test('should be importable correctly', () => {
    const component = render(
      <Triangle height={100} color={'red'} width={100} />
    )
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<Triangle height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<Triangle height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<Triangle height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('aria-label')
  })
})
