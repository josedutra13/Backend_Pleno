import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { CsvSaida } from "../Types/csvs";
import { BASE_URL } from "../Utils/requests";


function CsvSaidasComponent() {

    const [csvEntrada, setCsvEntrada] = useState<CsvSaida[]>();

    useEffect(() => {
        axios.get(`${BASE_URL}/csv/saida`).then((response) => {
            console.log(response.data)
            setCsvEntrada(response.data)
        }
        );
    }, []);

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Agencia</th>
                        <th>Conta</th>
                        <th>Saldo</th>
                        <th>Status</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {csvEntrada?.map(csvE => (
                        <tr>
                            <td>{csvE.agencia}</td>
                            <td>{csvE.conta}</td>
                            <td>{csvE.saldo}</td>
                            <td>{csvE.status}</td>
                            <td>{csvE.resultado === true ? "true" : "false"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    );
}

export default CsvSaidasComponent;