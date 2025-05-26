import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { NewProductPage } from '.'
import { BrowserRouter } from 'react-router-dom'
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

// Mock do useToast
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}))

describe('NewProductPage', () => {
  const renderNewProductPage = () => {
    return render(
      <BrowserRouter>
        <NewProductPage />
      </BrowserRouter>
    )
  }

  it('deve renderizar o formulário corretamente', () => {
    renderNewProductPage()
    
    expect(screen.getByPlaceholderText('Nome do produto')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Kg, L, Unidade...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Quantidade em estoque')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Estoque mínimo')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancelar' })).toBeInTheDocument()
  })

  it('deve voltar à página anterior ao clicar em Cancelar', async () => {
    renderNewProductPage()
    
    const cancelButton = screen.getByRole('button', { name: 'Cancelar' })
    await userEvent.click(cancelButton)
    
    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })

  it('deve voltar à página anterior ao clicar em Voltar', async () => {
    renderNewProductPage()
    
    const backButton = screen.getByRole('button', { name: 'Voltar' })
    await userEvent.click(backButton)
    
    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })

  it('deve desabilitar inputs e botões durante o salvamento', async () => {
    renderNewProductPage()
    
    const saveButton = screen.getByRole('button', { name: 'Salvar' })
    await userEvent.click(saveButton)
    
    const inputs = screen.getAllByRole('textbox')
    inputs.forEach(input => {
      expect(input).toBeDisabled()
    })
    
    expect(saveButton).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Cancelar' })).toBeDisabled()
    
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(-1)
    }, { timeout: 1500 })
  })

  it('deve permitir preencher todos os campos do formulário', async () => {
    renderNewProductPage()
    
    const nameInput = screen.getByPlaceholderText('Nome do produto')
    const unitInput = screen.getByPlaceholderText('Kg, L, Unidade...')
    const quantityInput = screen.getByPlaceholderText('Quantidade em estoque')
    const minStockInput = screen.getByPlaceholderText('Estoque mínimo')
    
    await userEvent.type(nameInput, 'Produto Teste')
    await userEvent.type(unitInput, 'Kg')
    await userEvent.type(quantityInput, '100')
    await userEvent.type(minStockInput, '10')
    
    expect(nameInput).toHaveValue('Produto Teste')
    expect(unitInput).toHaveValue('Kg')
    expect(quantityInput).toHaveValue(100)
    expect(minStockInput).toHaveValue(10)
  })
})