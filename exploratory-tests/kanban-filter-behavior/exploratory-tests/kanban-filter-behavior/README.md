# Teste Exploratório – Comportamento de Filtro na Visualização Kanban

Sistema: CRM Web  
Ambiente: QAS  
Tipo de teste: Exploratório  
Foco: Funcional + UX  

---

## Objetivo

Avaliar o comportamento do filtro na visualização Kanban, verificando consistência na aplicação de critérios, retorno de dados e feedback visual ao usuário.

---

## Escopo explorado

- Abertura do modal de filtro  
- Aplicação de critérios (status, período, responsável)  
- Comportamento do botão "Filtrar"  
- Atualização dos dados na tela  
- Feedback visual após aplicação  
- Persistência do filtro aplicado  
- Interação com múltiplos filtros  

---

## Abordagem

Teste exploratório orientado a comportamento e risco, focado em inconsistências na aplicação de filtros e impacto na experiência do usuário.

---

## Checklist exploratório

- [ ] Filtro abre corretamente  
- [ ] Permite selecionar critérios  
- [ ] Botão "Filtrar" executa ação  
- [ ] Dados retornam conforme filtro  
- [ ] Modal fecha no momento correto  
- [ ] Feedback visual é exibido  
- [ ] Filtro permanece aplicado após atualização  
- [ ] Combinação de filtros funciona corretamente  

---

## Cenários explorados

### Cenário 1 – Aplicação básica de filtro
Aplicar um único critério e validar se os dados retornam corretamente.

### Cenário 2 – Combinação de filtros
Aplicar múltiplos critérios simultaneamente e validar consistência dos resultados.

### Cenário 3 – Comportamento do botão Filtrar
Validar se o botão executa corretamente a ação e se o fechamento do modal ocorre de forma consistente.

### Cenário 4 – Persistência do filtro
Verificar se o filtro permanece aplicado após navegação ou atualização da tela.

---

## Resultados encontrados

- Identificada inconsistência na aplicação dos filtros  
- Dados exibidos não correspondem aos critérios definidos  
- Modal de filtro é fechado automaticamente sem confirmação visual clara  

---

## Riscos identificados

- Usuário pode interpretar dados incorretos  
- Possibilidade de tomada de decisão com base em informações inconsistentes  
- Falta de feedback pode gerar confusão na usabilidade  

---

## Conclusão

A funcionalidade de filtro na visualização Kanban apresenta inconsistências que impactam diretamente a confiabilidade dos dados e a experiência do usuário, sendo recomendada a revisão da lógica de aplicação e feedback da funcionalidade.
