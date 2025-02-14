import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Usado para navegação
import { Card } from '../../components/Card';
import Sidebar from '../../components/Siddebar';
import "./styles.css";
import Formulario from '/src/assets//formulario-de-assinatura.png';

function Home() {
    const navigate = useNavigate();
    const tipoUsuario = localStorage.getItem('tipoUsuario'); // Obtendo o tipo de usuário do localStorage

    useEffect(() => {
        if (tipoUsuario === 'SERVIDOR') {
            // Se for servidor, redireciona para a página do CRA
            navigate('/cradt');
        } else if (tipoUsuario === 'ESTUDANTE') {
            // Se for estudante, não faz nada (permanecer na página /home)
            // Ou pode colocar qualquer outra lógica específica para o estudante
        }
    }, [tipoUsuario, navigate]);

    return (
        <>
            <Sidebar />
            <div className="container-home">
                <div className='container-card-list-solicitacoes'>
                    <Card
                        titulo="Dúvidas"
                        url_image_card="./src/assets/questionario.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                    <Card
                        titulo="Trancamento Reabertura e Reintegração de matricula"
                        url_image_card="./src/assets/porta.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                    <Card
                        titulo="Abono de Faltas"
                        url_image_card="./src/assets/prazo-final.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="/AbonoFaltas"
                    />
                    <Card
                        titulo="Aproveitamento de Disciplinas"
                        url_image_card="./src/assets/caderno.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                    <Card
                        titulo="Alteração de Turno"
                        url_image_card="./src/assets/tempo.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                    <Card
                        titulo="Solicitar Documentos"
                        url_image_card="./src/assets/documento-1.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                    <Card
                        titulo="Solicitar Serviços"
                        url_image_card="./src/assets/documento.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                    <Card
                        titulo="Caixa de Mensagem"
                        url_image_card="./src/assets/nova-mensagem.png"
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                    <Card
                        titulo="Renovação de Matrícula"
                        url_image_card={Formulario}
                        description="Obtenha apoio sobre a sua trajetória acadêmica"
                        url_view="#"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
