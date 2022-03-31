package com.backendPleno.SincronizacaoReceita.models;

import lombok.*;


@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class CsvEntrada {
    private String agencia;
    private String conta;
    private double saldo;
    private String status;

    public String toString() {
        return "CsvEntrada{agencia='" + agencia + "\', conta=" + conta + ", saldo='" + saldo + "\', status="+ status +"\' }";
    }
}
