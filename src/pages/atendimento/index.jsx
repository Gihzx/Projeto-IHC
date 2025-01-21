import { useParams } from "react-router-dom";
import CardProcessos from "../../components/CardProcessos";
function DetalhesProcesso() {
  const { id } = useParams();
  console.log(id);

  return <div>{id ? <CardProcessos id={id} /> : <p>Carregando...</p>}</div>;
}

export default DetalhesProcesso;
