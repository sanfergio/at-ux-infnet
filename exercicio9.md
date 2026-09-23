# Escopo e Prototipação

## 1. Escopo do Ciclo

```mermaid
flowchart LR

    A["ESCOPO DO CICLO"]

    A --> B["ENTRA NESTE CICLO"]

    B --> B1["Explicação do lembrete inteligente<br/>e do papel da IA"]
    B --> B2["Configuração inicial de<br/>horários e medicações"]
    B --> B3["Permissões do cuidador<br/>e do paciente"]
    B --> B4["Simulação de mudança<br/>de horário pela IA"]
    B --> B5["Notificações, ajustes<br/>e canal de ajuda"]
    B --> B6["Boas-vindas e construção<br/>de confiança"]

    A --> C["FICA DE FORA DESTE CICLO"]

    C --> C1["Integração com farmácia"]
    C --> C2["Teleconsulta e wearable"]
    C --> C3["Dashboards avançados"]
    C --> C4["Múltiplos pacientes<br/>por cuidador"]
    C --> C5["Personalização clínica<br/>por patologia"]
    C --> C6["Versão exclusiva<br/>para paciente idoso"]
```

### Critérios de sucesso mensuráveis

```mermaid
flowchart TB

    A["CRITÉRIOS DE SUCESSO"]

    A --> B["80%"]
    B --> B1["Participantes concluem o onboarding<br/>sem ajuda em até 5 minutos"]

    A --> C["90%"]
    C --> C1["Participantes explicam corretamente<br/>por que o horário do lembrete pode mudar"]

    A --> D["SUS ≥ 80<br/>OU<br/>Confiança ≥ 4/5"]
    D --> D1["Na primeira configuração"]
```

## 2. Tipo de Protótipo por Fase

```mermaid
flowchart LR

    A["EXPLORAÇÃO INICIAL"]

    A1["Baixa fidelidade"]
    A2["Papel<br/>Wireframes<br/>Figma simples"]
    A3["Testar conceitos,<br/>terminologia e ordem do fluxo<br/>sem custo alto"]

    B["VALIDAÇÃO COM<br/>POUCOS USUÁRIOS"]

    B1["Média fidelidade"]
    B2["Protótipo clicável<br/>no Figma"]
    B3["Validar compreensão,<br/>navegação e clareza<br/>das explicações da IA"]

    C["VALIDAÇÃO FINAL"]

    C1["Alta fidelidade"]
    C2["Protótipo interativo<br/>com dados simulados"]
    C3["Validar usabilidade,<br/>confiança, acessibilidade<br/>e intenção de uso"]

    A --> B --> C

    A --> A1 --> A2 --> A3
    B --> B1 --> B2 --> B3
    C --> C1 --> C2 --> C3
```

| Fase | Tipo de protótipo | Justificativa |
|---|---|---|
| Exploração inicial | Baixa fidelidade: papel, wireframes ou Figma simples | Testar conceitos, terminologia e ordem do fluxo sem custo alto. |
| Validação com poucos usuários | Média fidelidade: protótipo clicável no Figma | Validar compreensão, navegação e clareza das explicações da IA. |
| Validação final | Alta fidelidade interativo com dados simulados | Validar usabilidade, confiança, acessibilidade e intenção de uso. |
