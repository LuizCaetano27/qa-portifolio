Sistema: Alpha CRM  
Licença: 832099  
Empresa: Não se aplica  
Navegadores: Brave (1.88.136), Edge (146.0.3856.72)  
Ambiente: QAS  
Tipo de teste: Funcional + UI  

Impacto: Médio  

## Contexto
Durante a validação do cadastro de item de distribuição, foi identificado comportamento inconsistente na exibição das informações do item na tela de catálogo.

## Cenário
- Acessar o Alpha CRM  
- Navegar até Produtos & Serviços > Distribuição  
- Acessar ou cadastrar um item de distribuição  
- Observar a listagem exibida no catálogo  

## Evidência
(Anexar print)

## Resultado atual
- A listagem do catálogo apresenta apenas a descrição dos itens (ex: "NG Folha", "NG Fiscal")  
- A coluna de código não exibe valor visível  
- A coluna de tipo também não apresenta informação  
- A seção de variáveis não exibe dados associados ao item  

## Resultado esperado
- O sistema deve exibir corretamente todas as colunas do catálogo, incluindo:
  - Código do item  
  - Descrição  
  - Tipo  
- A seção de variáveis deve carregar e exibir corretamente os dados associados ao item selecionado  

## Regra de negócio
O cadastro de item de distribuição deve apresentar todas as informações necessárias para identificação e configuração do item, incluindo código, tipo e variáveis associadas.

## Sugestão de ajustes
- Validar o retorno dos dados do back-end para as colunas do catálogo  
- Verificar se os campos de código e tipo estão sendo corretamente mapeados na camada de front-end  
- Garantir o carregamento correto da seção de variáveis conforme item selecionado  
