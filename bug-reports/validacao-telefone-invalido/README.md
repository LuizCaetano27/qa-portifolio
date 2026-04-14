# Bug Report – Falha na validação de telefone e campo de contato na abertura de chamado

Sistema: Sistema de Atendimento Web  
Ambiente: QAS  
Tipo de teste: Funcional + UX  
Impacto: Médio  

---

## Contexto

Durante a abertura de chamado, foi identificado que o sistema permite o preenchimento de campos obrigatórios com dados inválidos, como telefone zerado e campo de contato contendo caracteres especiais. Esse comportamento compromete a integridade dos dados e pode impactar diretamente a comunicação com o usuário.

---

## Cenário

- Acessar o sistema de atendimento  
- Iniciar abertura de chamado  
- Preencher os campos obrigatórios de contato  
- No campo telefone, inserir valor zerado (ex: 0000000000)  
- No campo contato, inserir caracteres especiais  
- Finalizar abertura do chamado  

---

## Evidências

(Evidências omitidas para preservar informações sensíveis do ambiente corporativo)

---

## Resultado atual

- O sistema permite abertura de chamado com telefone inválido (sequência de zeros)  
- O sistema permite preenchimento do campo contato com caracteres especiais  
- Não há validação ou feedback ao usuário  

---

## Resultado esperado

- O sistema deve validar o campo telefone, impedindo valores inválidos (ex: sequência de zeros ou formato incorreto)  
- O campo contato deve restringir a entrada de caracteres inválidos  
- Deve ser exibida mensagem orientando o preenchimento correto  

---

## Regra de negócio

Campos obrigatórios devem garantir integridade e validade mínima dos dados informados.

---

## Análise

Indício de ausência de validação no front-end e possível ausência de validação no back-end, permitindo a persistência de dados inválidos.

---

## Sugestões de melhoria

- Implementar validação de formato no campo telefone  
- Restringir caracteres permitidos no campo contato  
- Garantir validação tanto no front-end quanto no back-end  
- Exibir mensagens claras de erro para o usuário  

---
