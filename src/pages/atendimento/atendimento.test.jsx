import { render, screen, waitFor } from "@testing-library/react";
import DetalhesProcesso from ".";
import { BrowserRouter } from "react-router-dom";
import { server } from './src/mocks/server';
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import { expect } from "vitest";

const mockResponse = {
  id: 1,
  nome: "João Silva",
  curso: "Engenharia",
  matricula: "123456",
  motivo: "Revisão de nota",
  dataSolicitacao: "2024-01-29",
  descricao: "Preciso de revisão na disciplina X",
  anexo: "arquivo.pdf",
};

const server = setupServer(
  rest.get("http://localhost:8080/api/solicitacoes/1", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("rederizar informações como dados do id, se etão aparecendo corretamente", async () => {
  render(
    <BrowserRouter>
      <DetalhesProcesso />
    </BrowserRouter>
  );

 await waitFor(() => {
    const idText = screen.getByText("ID: 1");
    console.log("ID Text:", idText);  // Aqui você verá o ID sendo exibido
    expect(idText).toBeInTheDocument();
  });


  // Verifica se os demais dados foram exibidos corretamente
  expect(screen.getByText("Nome: João Silva")).toBeInTheDocument();
  expect(screen.getByText("Curso: Engenharia")).toBeInTheDocument();
  expect(screen.getByText("Matricula: 123456")).toBeInTheDocument();
  expect(screen.getByText("Motivo: Revisão de nota")).toBeInTheDocument();
  expect(
    screen.getByText("Data da solicitação 29/01/2024")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Descrição: Preciso de revisão na disciplina X")
  ).toBeInTheDocument();
  expect(screen.getByText("Arquivo:arquivo.pdf")).toBeInTheDocument();
});
