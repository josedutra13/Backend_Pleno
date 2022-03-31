import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CsvEntrada } from "../Types/csvs";
import { BASE_URL } from "../Utils/requests";


function CsvEntradasComponent() {

    const [csvEntrada, setCsvEntrada] = useState<CsvEntrada[]>();

    useEffect(() => {
        axios.get(`${BASE_URL}/csv`).then((response) =>
            setCsvEntrada(response.data)
        );
    }, []);

    return (
        <Container>
            <h2>Csv de Entrada</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Agencia</th>
                        <th>Conta</th>
                        <th>Saldo</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {csvEntrada?.map(csvE => (
                        <tr>
                            <td>{csvE.agencia}</td>
                            <td>{csvE.conta}</td>
                            <td>{csvE.saldo}</td>
                            <td>{csvE.status}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
            <Link to={'csv/saida'} className="buttonAtualização"> <Button >Resultado da atualização</Button></Link>
        </Container>

    );
}

export default CsvEntradasComponent;