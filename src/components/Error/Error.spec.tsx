import { render, screen } from '@testing-library/react'
import { Error } from './Error'
import { TestWrapper } from '@/utils'

describe('Error component', () => {
  it('should render the title and description', () => {
    render(<Error title="500" description="Sunucu hatası" />, {
      wrapper: TestWrapper,
    })

    const titleElement = screen.getByText(/500/i)
    const descriptionElement = screen.getByText(/Sunucu hatası/i)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should display the default title and description if none are provided', () => {
    render(<Error />, { wrapper: TestWrapper })

    const defaultTitle = screen.getByText(/404/i)
    const defaultDescription = screen.getByText(/Aradığınız sayfa bulunamadı/i)

    expect(defaultTitle).toBeInTheDocument()
    expect(defaultDescription).toBeInTheDocument()
  })

  it('should have a link to the homepage', () => {
    render(<Error />, { wrapper: TestWrapper })

    const linkElement = screen.getByText(/Anasayfaya dön/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.getAttribute('href')).toBe('/')
  })
})
