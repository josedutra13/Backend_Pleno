import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
    );
}

export default CsvEntradasComponent;