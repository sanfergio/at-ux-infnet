# Avaliação Ética e Framework de Confiança

## 1. Avaliação Fairness, Accountability, Safety e Inclusiveness

| Critério | Risco concreto |
|---|---|
| Fairness | Modelo treinado em grandes centros pode ajustar horários de forma inadequada para pacientes rurais ou de baixa renda. |
| Accountability | Sem trilha de auditoria, não se sabe quem decidiu nem por que o horário foi ajustado. |
| Safety | Ajuste automático pode levar a horários incompatíveis com a rotina clínica, causando risco à saúde. |
| Inclusiveness | Idosos com baixa familiaridade digital ou sem acesso a wearable podem ser excluídos ou mal atendidos. |

### Diagrama de riscos

```mermaid
flowchart TD
    A["Sistema de IA para ajuste de horários"]

    A --> B["Fairness"]
    B --> B1["Modelo treinado em grandes centros"]
    B1 --> B2["Risco para pacientes rurais<br/>ou de baixa renda"]

    A --> C["Accountability"]
    C --> C1["Ausência de trilha de auditoria"]
    C1 --> C2["Não é possível identificar<br/>quem decidiu ou por quê"]

    A --> D["Safety"]
    D --> D1["Ajuste automático"]
    D1 --> D2["Horário incompatível<br/>com rotina clínica"]
    D2 --> D3["Risco à saúde"]

    A --> E["Inclusiveness"]
    E --> E1["Baixa familiaridade digital"]
    E --> E2["Sem acesso a wearable"]
    E1 --> E3["Possível exclusão ou<br/>atendimento inadequado"]
    E2 --> E3
```

## 2. Framework de confiança — 3 dimensões

| Dimensão | Critério observável |
|---|---|
| Capacidade técnica | Modelo com acurácia ≥ 90% e taxa de ajustes revertidos ≤ 10%. |
| Benevolência das decisões | Ajustes priorizam segurança clínica e rotina do paciente, não engajamento. |
| Integridade do comportamento | Sistema registra, explica e permite contestar toda mudança automática. |

### Diagrama do framework de confiança

```mermaid
flowchart TD
    A["Framework de Confiança"]

    A --> B["Capacidade técnica"]
    B --> B1["Acurácia ≥ 90%"]
    B --> B2["Ajustes revertidos ≤ 10%"]

    A --> C["Benevolência das decisões"]
    C --> C1["Priorizar segurança clínica"]
    C --> C2["Considerar rotina do paciente"]
    C --> C3["Não priorizar engajamento"]

    A --> D["Integridade do comportamento"]
    D --> D1["Registrar mudanças"]
    D --> D2["Explicar decisões"]
    D --> D3["Permitir contestação"]

    B --> E["Confiança no sistema"]
    C --> E
    D --> E
```
