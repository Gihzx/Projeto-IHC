import{ render, screen, fireEvent,expect,it,describe,jest } from "@testing-library/react";
import axios from "axios";
import AbonoFaltas from "./AbonoFaltas";

jest.mock("axios");

describe("Componente AbonoFaltas", () => {
  it("deve renderizar o formulário corretamente", () => {
    render(<AbonoFaltas />);
    expect(screen.getByText("Abono de Faltas")).toBeInTheDocument();
    expect(screen.getByLabelText("Nome do aluno(a)")).toBeInTheDocument();
    expect(screen.getByLabelText("Número de matrícula")).toBeInTheDocument();
  });

  it("deve enviar o formulário com os dados corretos", async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    render(<AbonoFaltas />);

    fireEvent.change(screen.getByLabelText("Nome do aluno(a)"), { target: { value: "João Silva" } });
    fireEvent.change(screen.getByLabelText("Número de matrícula"), { target: { value: "12345" } });
    fireEvent.change(screen.getByLabelText("Curso"), { target: { value: "Integrado - Administração" } });
    fireEvent.change(screen.getByLabelText("Período/Série"), { target: { value: "1º" } });
    fireEvent.change(screen.getByLabelText("Turno"), { target: { value: "Manhã" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "joao@email.com" } });
    fireEvent.change(screen.getByLabelText("CPF"), { target: { value: "123.456.789-00" } });
    fireEvent.change(screen.getByLabelText("Início da falta"), { target: { value: "2025-01-01" } });
    fireEvent.change(screen.getByLabelText("Fim da falta"), { target: { value: "2025-01-03" } });
    fireEvent.change(screen.getByLabelText("Motivo da falta"), { target: { value: "atestadoMedico" } });

    // Submete o formulário
    fireEvent.submit(screen.getByRole("button", { name: /solicitar/i }));

    // Verifica se a API foi chamada com os dados corretos
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8080/api/solicitacoes",
      expect.any(FormData),
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    // Aguarda a resposta
    await screen.findByText("Dados enviados com sucesso!");
  });

  it("deve exibir um erro se a API falhar", async () => {
    // Mock da API com erro
    axios.post.mockRejectedValueOnce(new Error("Erro ao enviar dados"));

    render(<AbonoFaltas />);

    // Preenche os campos obrigatórios
    fireEvent.change(screen.getByLabelText("Nome do aluno(a)"), { target: { value: "João Silva" } });
    fireEvent.change(screen.getByLabelText("Número de matrícula"), { target: { value: "12345" } });

    // Submete o formulário
    fireEvent.submit(screen.getByRole("button", { name: /solicitar/i }));

    // Aguarda a resposta
    await screen.findByText("Erro ao enviar dados para o back-end");
  });
});
