import Card from "../../../components/UI/Cards";
import abonoFoto from "../../../assets/prazo-final-removebg-preview.png";
export function Requisicao() {
  return (
    <div>
      <Card
        name="Abono de faltas"
        image={abonoFoto}
        descriptionLine1="Descrição:"
        descriptionLine2="Solicite abono de faltas anexando suas justificativas."
      />
    </div>
  );
}
