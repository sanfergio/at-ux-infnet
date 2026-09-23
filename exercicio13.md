# Princípios de Usabilidade e Decisões de Interface

## Princípios aplicados

| Princípio | Decisão concreta de interface |
|---|---|
| Visibilidade do sistema | Mostrar na tela "Por que este horário?" com motivo do ajuste da IA. |
| Controle e liberdade do usuário | Botões "Aceitar", "Ajustar" e "Desfazer" em cada mudança de horário. |
| Correspondência com o mundo real | Linguagem simples: "Mudamos o horário porque você costuma tomar às 21h". |
| Prevenção de erros | Confirmação antes de aplicar mudança automática. |
| Reconhecimento em vez de memorização | Histórico visível de ajustes com data e motivo. |
| Ajuda e documentação | Link "Entenda como a IA ajusta seus horários" em cada tela. |

## Representação visual

```mermaid
flowchart TD
    A["Princípios de Usabilidade"]

    A --> B["Visibilidade do sistema"]
    B --> B1["Por que este horário?"]
    B1 --> B2["Motivo do ajuste da IA"]

    A --> C["Controle e liberdade"]
    C --> C1["Aceitar"]
    C --> C2["Ajustar"]
    C --> C3["Desfazer"]

    A --> D["Correspondência com o mundo real"]
    D --> D1["Linguagem simples"]
    D1 --> D2["Exemplo: Mudamos o horário<br/>porque você costuma tomar às 21h"]

    A --> E["Prevenção de erros"]
    E --> E1["Confirmar antes<br/>da mudança automática"]

    A --> F["Reconhecimento"]
    F --> F1["Histórico de ajustes"]
    F1 --> F2["Data + motivo"]

    A --> G["Ajuda e documentação"]
    G --> G1["Entenda como a IA<br/>ajusta seus horários"]
```
