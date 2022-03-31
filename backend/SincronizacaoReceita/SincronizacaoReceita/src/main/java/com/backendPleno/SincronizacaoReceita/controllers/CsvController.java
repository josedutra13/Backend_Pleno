package com.backendPleno.SincronizacaoReceita.controllers;

import com.backendPleno.SincronizacaoReceita.models.CsvEntrada;
import com.backendPleno.SincronizacaoReceita.models.CsvSaida;
import com.backendPleno.SincronizacaoReceita.services.ReceitaService;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/csv")
public class CsvController {
    @Autowired
    private ReceitaService receitaService;

    Reader reader;
    {
        try {
            reader = Files.newBufferedReader(Paths.get(".//src//main//java//com//backendPleno//SincronizacaoReceita//carga.csv"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    CsvToBean<CsvEntrada> csvToBean = new CsvToBeanBuilder(reader)
            .withType(CsvEntrada.class)
            .build();

    List<CsvEntrada> csvEntradas = csvToBean.parse();
    List<CsvSaida> csvSaidas = new ArrayList<>();




    @GetMapping
    public List<CsvEntrada> findAllCsvEntrada(){
        return csvEntradas;
    }

    @GetMapping("saida")
    public List<CsvSaida> findAllCsvSaida(){
        if(csvSaidas.isEmpty()){
        for (CsvEntrada csvEntrada : csvEntradas){
            boolean resultado = false;
            try {
                resultado = receitaService.atualizarConta(csvEntrada.getAgencia(),csvEntrada.getConta(),csvEntrada.getSaldo(),csvEntrada.getStatus());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            CsvSaida csvSaida = new CsvSaida();
            csvSaida.setAgencia(csvEntrada.getAgencia());
            csvSaida.setConta(csvEntrada.getConta());
            csvSaida.setSaldo(csvEntrada.getSaldo());
            csvSaida.setStatus(csvEntrada.getStatus());
            csvSaida.setResultado(resultado);

            csvSaidas.add(csvSaida);
        }}

        return csvSaidas;
    }


    @DeleteMapping()
    public void deleteAll(){
        csvSaidas.removeAll(csvSaidas);
    }

}
