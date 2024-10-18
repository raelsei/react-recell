import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button component', () => {
  test('should render the button with children', () => {
    render(<Button onClick={() => {}}>Click Me</Button>)

    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('should apply className props correctly', () => {
    const className = 'custom-class'
    render(
      <Button onClick={() => {}} className={className}>
        Styled Button
      </Button>
    )

    const buttonElement = screen.getByText(/Styled Button/i)
    expect(buttonElement).toHaveClass('custom-class')
  })

  test('should trigger onClick event', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)

    const buttonElement = screen.getByText(/Click Me/i)

    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
