import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LoginPage } from '.'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/core/contexts/AuthProvider'
import userEvent from '@testing-library/user-event'

// Mock do useNavigate
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

describe('LoginPage', () => {
  const renderLoginPage = () => {
    return render(
      <BrowserRouter>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </BrowserRouter>
    )
  }

  it('deve renderizar o formulário de login corretamente', () => {
    renderLoginPage()
    
    expect(screen.getByText('Gerenciador de Estoque')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument()
  })

  it('deve mostrar erro com e-mail inválido', async () => {
    renderLoginPage()
    
    const emailInput = screen.getByLabelText('E-mail')
    await userEvent.type(emailInput, 'email-invalido')
    
    const submitButton = screen.getByRole('button', { name: 'Entrar' })
    await userEvent.click(submitButton)
    
    expect(await screen.findByText('Endereço de e-mail inválido.')).toBeInTheDocument()
  })

  it('deve mostrar erro com senha muito curta', async () => {
    renderLoginPage()
    
    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    
    await userEvent.type(emailInput, 'teste@teste.com')
    await userEvent.type(passwordInput, '123')
    
    const submitButton = screen.getByRole('button', { name: 'Entrar' })
    await userEvent.click(submitButton)
    
    expect(await screen.findByText('A senha deve ter no mínimo 8 caracteres.')).toBeInTheDocument()
  })

  it('deve fazer login com credenciais corretas', async () => {
    renderLoginPage()
    
    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    
    await userEvent.type(emailInput, 'usuario@usuario.com')
    await userEvent.type(passwordInput, '12345678')
    
    const submitButton = screen.getByRole('button', { name: 'Entrar' })
    await userEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/')
    }, { timeout: 2000 })
  })

  it('deve mostrar erro com credenciais inválidas', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
    renderLoginPage()
    
    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    
    await userEvent.type(emailInput, 'wrong@email.com')
    await userEvent.type(passwordInput, '87654321')
    
    const submitButton = screen.getByRole('button', { name: 'Entrar' })
    await userEvent.click(submitButton)
    
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Usuário ou senha inválido')
    }, { timeout: 2000 })
    
    alertMock.mockRestore()
  })
})