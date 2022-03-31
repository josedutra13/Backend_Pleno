package com.backendPleno.SincronizacaoReceita.models;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CsvSaida {
   private String agencia;
   private String conta;
   private double saldo;
   private String status;
   private boolean resultado;

}
