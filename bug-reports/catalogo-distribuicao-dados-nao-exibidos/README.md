# Bug Report – Falha na exibição de código e tipo na listagem de itens

Sistema: CRM Web  
Ambiente: QAS  
Tipo de teste: Funcional + UI  
Impacto: Médio  

## Contexto
Durante a validação do cadastro de itens, foi identificado que a listagem não exibe corretamente informações essenciais, como código e tipo, apresentando apenas a descrição.

## Cenário
- Acessar o sistema CRM  
- Navegar até o módulo de cadastro de itens  
- Acessar ou cadastrar um item  
- Observar a listagem exibida  

## Evidências
(Conteúdo omitido para preservar informações sensíveis do ambiente corporativo)

## Resultado atual
- Apenas a coluna de descrição é exibida  
- A coluna de código não apresenta valor  
- A coluna de tipo não é exibida  
- A seção de variáveis não é carregada  

## Resultado esperado
- O sistema deve exibir corretamente:
  - Código  
  - Descrição  
  - Tipo  
- A seção de variáveis deve carregar corretamente
  
## Análise
Indício de falha no mapeamento dos dados no front-end ou retorno incompleto da API, impactando a renderização das colunas.

## Sugestões de melhoria
- Validar retorno do back-end  
- Verificar mapeamento no front-end  
- Ajustar renderização da tela  
