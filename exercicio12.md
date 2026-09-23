# Limitações Arquiteturais e Estratégia de Evolução

## 2. Limitações arquiteturais típicas

| Limitação | Evidência na aplicação | Classificação |
|---|---|---|
| Ausência de autenticação/autorização | Endpoint aberto, sem token ou login | Bloqueante para produção |
| Dados mockados sem validação | Backend retorna JSON fixo, sem schema | Aceitável para demonstração |
| Falta de tratamento de erro e logs | Sem try/catch, sem logging estruturado | Aceitável para demo; bloqueante em produção |
| Sem criptografia ou conformidade LGPD | Comunicação HTTP simples | Bloqueante para produção |

### Visão das limitações

```mermaid
flowchart TD
    A["Aplicação atual"]

    A --> B["Ausência de autenticação"]
    A --> C["Dados mockados"]
    A --> D["Falta de tratamento de erros"]
    A --> E["Sem criptografia / LGPD"]

    B --> B1["Bloqueante para produção"]
    C --> C1["Aceitável para demonstração"]
    D --> D1["Aceitável para demo<br/>Bloqueante em produção"]
    E --> E1["Bloqueante para produção"]
```

## 3. Estratégia de evolução para produção

| Etapa | Ação | Limitação resolvida |
|---|---|---|
| 1. Segurança básica | Autenticação, HTTPS, tokens, LGPD | Ausência de autenticação e criptografia |
| 2. Robustez de dados | Validação de schema, logs, tratamento de erros | Dados mockados e falta de logs |
| 3. Escalabilidade e observabilidade | Banco real, monitoramento, testes automatizados | Falta de persistência e observabilidade |

### Roadmap de evolução

```mermaid
flowchart LR
    A["Aplicação atual"]

    A --> B["1. Segurança básica"]
    B --> B1["Autenticação"]
    B --> B2["HTTPS"]
    B --> B3["Tokens"]
    B --> B4["LGPD"]

    B --> C["2. Robustez de dados"]
    C --> C1["Validação de schema"]
    C --> C2["Logs"]
    C --> C3["Tratamento de erros"]

    C --> D["3. Escalabilidade e observabilidade"]
    D --> D1["Banco real"]
    D --> D2["Monitoramento"]
    D --> D3["Testes automatizados"]

    D --> E["Produção"]
```
