import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Status } from ".";

describe("Status Component", () => {
    beforeEach(() => {
        render(<Status />);
    });

    it("renderiza todas as etapas corretamente", () => {
        expect(screen.getByText(/Documentos Enviados/i)).toBeInTheDocument();
        expect(screen.getByText(/Recebido pela Secretaria/i)).toBeInTheDocument();
        expect(screen.getByText(/Em análise/i)).toBeInTheDocument();
        expect(screen.getByText(/Concluído/i)).toBeInTheDocument();
    });
    it('verificar de as etapas possuem as classes corretas ', ()=>{
        expect(screen.getByText(/Documentos Enviados/i).parentElement).toHaveClass('step completed')
        expect(screen.getByText(/Recebido pela Secretaria/i).parentElement).toHaveClass('step completed')
        expect(screen.getByText(/Em análise/i).parentElement).toHaveClass('step active')
        expect(screen.getByText(/Em análise/i).parentElement).toHaveClass('step')
    })
    it('verifica se as datas estão sendo renderizada corretamente', ()=>{
        expect(screen.getByText(/22\/01\/2025 14:24/i)).toBeInTheDocument()
        expect(screen.getByText(/22\/01\/2025 15:58/i)).toBeInTheDocument()
    })
});
