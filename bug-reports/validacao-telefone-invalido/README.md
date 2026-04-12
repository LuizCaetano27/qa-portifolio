Sistema: Alpha Atendimento / Alpha CRM  
Licença: 832099  
Empresa: Não se aplica  
Navegadores: Brave e Edge  
Versão: 1.88.136 (Brave), 146.0.3856.72 (Edge)  
Ambiente: QAS  
Impacto: Médio  

Tipo: Bug  

---

## Contexto:

Durante a abertura de chamado, o sistema permite o preenchimento de campos obrigatórios com dados inválidos, como telefone zerado e campo de contato contendo caracteres especiais.

Esse comportamento compromete a integridade dos dados e pode impactar diretamente a comunicação com o cliente.

---

## Cenário:

- Acessar o Alpha Atendimento  
- Iniciar abertura de chamado  
- Preencher os campos obrigatórios de contato  
- No campo telefone, inserir valor zerado (ex: 0000000000)  
- No campo contato, inserir caracteres especiais  
- Finalizar abertura do chamado  

---

## Evidências



---

## Resultado atual:

- O sistema permite abertura de chamado com telefone inválido (zerado)  
- O sistema permite preenchimento do campo contato com caracteres especiais  
- Não há validação ou orientação ao usuário  

---

## Resultado esperado:

- O sistema deve validar o campo telefone, impedindo valores inválidos (ex: sequência de zeros ou formato incorreto)  
- O campo contato deve restringir entrada de caracteres inválidos  
- Deve ser exibida mensagem orientando o preenchimento correto  

---

## Regra de negócio:

Campos obrigatórios devem garantir integridade e validade mínima dos dados informados.

---

## Sugestão de ajustes:

- Implementar validação de formato no campo telefone  
- Restringir caracteres permitidos no campo contato  
- Garantir validação no front-end e no back-end  

