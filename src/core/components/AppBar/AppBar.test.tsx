import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AppBar } from '.'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/core/contexts/AuthProvider'

// Mock do useNavigate
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: '/' })
  }
})

describe('AppBar', () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <AuthProvider>
          <AppBar />
        </AuthProvider>
      </BrowserRouter>
    )
  }

  it('deve renderizar todos os botões de navegação', () => {
    renderComponent()
    
    expect(screen.getByText('Estoque')).toBeInTheDocument()
    expect(screen.getByText('Receita')).toBeInTheDocument()
    expect(screen.getByText('Relatório')).toBeInTheDocument()
  })

  it('deve navegar para a página correta ao clicar nos botões', () => {
    renderComponent()
    
    fireEvent.click(screen.getByText('Receita'))
    expect(mockNavigate).toHaveBeenCalledWith('/receita')

    fireEvent.click(screen.getByText('Relatório'))
    expect(mockNavigate).toHaveBeenCalledWith('/relatorio')

    fireEvent.click(screen.getByText('Estoque'))
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('deve fazer logout ao clicar no botão de sair', () => {
    renderComponent()
    
    const logoutButton = screen.getByRole('button', { name: '' }) // Botão com ícone
    fireEvent.click(logoutButton)
    // Aqui você pode adicionar expectativas específicas para o logout
  })
})