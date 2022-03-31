export type CsvEntrada = {
    agencia: string;
    conta: string;
    saldo: number;
    status: string;
}

export type CsvSaida = {
    agencia: string;
    conta: string;
    saldo: number;
    status: string;
    resultado: boolean;
}