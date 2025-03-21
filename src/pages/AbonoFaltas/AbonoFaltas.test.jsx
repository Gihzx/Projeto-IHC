import { render, screen, fireEvent } from '@testing-library/react';
import'@testing-library/jest-dom'
import AbonoFaltas from './index.jsx'; 



describe('AbonoFaltas', () => {
  it('deve renderizar os campos corretamente', () => {
    render(<AbonoFaltas />);

    // Verificar se os campos de entrada estão presentes
    expect(screen.getByText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByText(/Matrícula/i)).toBeInTheDocument();
    expect(screen.getByText(/Curso/i)).toBeInTheDocument();
    expect(screen.getByText(/Turno/i)).toBeInTheDocument();
    expect(screen.getByText(/CPF/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Início da Falta/i)).toBeInTheDocument();
    expect(screen.getByText(/Fim da Falta/i)).toBeInTheDocument();
    expect(screen.getByText(/Motivo/i)).toBeInTheDocument();
    expect(screen.getByText(/Observações/i)).toBeInTheDocument();
    
  });

  it('deve atualizar o estado ao digitar nos campos', () => {
    render(<AbonoFaltas />);

    // Simular entrada nos campos de texto
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'João' } });
    fireEvent.change(screen.getByLabelText(/Matrícula/i), { target: { value: '12345' } });
    fireEvent.change(screen.getByLabelText(/Curso/i), { target: { value: 'Integrado - Técnico em Desenvolvimento de Sistemas' } });
    fireEvent.change(screen.getByLabelText(/Turno/i), { target: { value: 'noite' } });
    fireEvent.change(screen.getByLabelText(/CPF/i), { target: { value: '03624440489' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'nanda_oliveirafalcao@hotmail.com' } });
    fireEvent.change(screen.getByLabelText(/Início da Falta/i), { target: { value: '2024-02-02' } });
    fireEvent.change(screen.getByLabelText(/Fim da Falta/i), { target: { value: '2024-02-20' } });
    fireEvent.change(screen.getByLabelText(/Motivo/i), { target: { value: 'atestadoMedico' } });
    fireEvent.change(screen.getByLabelText(/Observações/i), { target: { value: 'Nenhuma observação' } });
    
    
  
  

    // Verificar se os valores dos campos foram atualizados corretamente
    expect(screen.getByLabelText(/Nome/i).value).toBe('João');
    expect(screen.getByLabelText(/Matrícula/i).value).toBe('12345');
    expect(screen.getByRole('combobox', { name: /Curso/i }).value).toBe('Integrado - Técnico em Desenvolvimento de Sistemas');
    expect(screen.getByLabelText(/Turno/i).value).toBe('noite');
    expect(screen.getByLabelText(/CPF/i).value).toBe('03624440489');
    expect(screen.getByLabelText(/Email/i).value).toBe('nanda_oliveirafalcao@hotmail.com');
    expect(screen.getByLabelText(/Início da Falta/i).value).toBe('2024-02-02');
    expect(screen.getByLabelText(/Fim da Falta/i).value).toBe('2024-02-20');
    expect(screen.getByLabelText(/Motivo/i).value).toBe('atestadoMedico');
    expect(screen.getByLabelText(/Observações/i).value).toBe('Nenhuma observação');

  });
    

  it('deve chamar handleSubmit ao enviar o formulário', () => {
   
    render(<AbonoFaltas />);

   

    // Simular envio do formulário
    fireEvent.submit(screen.getByText(/Solicitar/i));

  });
});
  
  