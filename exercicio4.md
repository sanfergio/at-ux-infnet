````markdown
# Service Blueprint — Detecção e Atendimento de Quedas

```mermaid
flowchart LR

    A[1. Detecção da queda]
    B[2. Geração do alerta]
    C[3. Triagem da central]
    D[4. Escalonamento]
    E[5. Encerramento]

    A --> B --> C --> D --> E

    subgraph FRONTSTAGE["Frontstage — visível ao paciente/cuidador"]
        F1[Nada visível ainda]
        F2[Notificação push/SMS<br/>Tela do aplicativo]
        F3[Alerta recebido<br/>Status inicial]
        F4[Ligação, orientação<br/>ou visita]
        F5[Confirmação da resolução<br/>e orientações finais]
    end

    subgraph VISIBILIDADE["Linha de visibilidade"]
        V1[---]
        V2[Linha de visibilidade]
        V3[Linha de visibilidade]
        V4[Linha de visibilidade]
        V5[Linha de visibilidade]
    end

    subgraph BACKSTAGE["Backstage — invisível ao paciente/cuidador"]
        B1[Wearable capta movimento<br/>IA analisa sinais vitais<br/>e padrão de queda]
        B2[Central recebe alerta<br/>pré-classificado pela IA]
        B3[Atendente valida dados<br/>Liga para cuidador/paciente<br/>Confirma gravidade]
        B4[Aciona SAMU, médico<br/>ou equipe interna<br/>Registra decisão]
        B5[Registra caso<br/>Realiza auditoria<br/>Faz acompanhamento]
    end

    subgraph SUPORTE["Processos de suporte"]
        S1[Modelo de IA<br/>Regras de risco<br/>Histórico do paciente]
        S2[Fila de alertas<br/>SLA<br/>Classificação de risco]
        S3[Protocolo de escalonamento<br/>Scripts<br/>Integração telefônica]
        S4[Protocolo de emergência<br/>Contatos<br/>Prontuário]
        S5[Logs<br/>Relatórios<br/>QA<br/>Melhoria contínua]
    end

    A --- F1
    B --- F2
    C --- F3
    D --- F4
    E --- F5

    A --- V1
    B --- V2
    C --- V3
    D --- V4
    E --- V5

    A --- B1
    B --- B2
    C --- B3
    D --- B4
    E --- B5

    A --- S1
    B --- S2
    C --- S3
    D --- S4
    E --- S5
````

# Melhorias Concretas de Interface

```mermaid
flowchart TD

    A[Interface da Central de Atendimento]

    A --> B[Transparência]
    A --> C[Agência]
    A --> D[Controle]

    B --> B1[Problema]
    B --> B2[Melhoria]

    B1 --> B1T[Atendente não entende<br/>por que a IA classificou<br/>como alto ou baixo risco]
    B2 --> B2T[Mostrar fatores explicativos:<br/>aceleração, imobilidade,<br/>histórico de quedas e confiança]

    C --> C1[Problema]
    C --> C2[Melhoria]

    C1 --> C1T[Atendente não consegue<br/>contestar ou ajustar<br/>a classificação]
    C2 --> C2T[Botões:<br/>Concordo | Ajustar risco | Solicitar revisão<br/>com justificativa obrigatória]

    D --> D1[Problema]
    D --> D2[Melhoria]

    D1 --> D1T[Atendente não consegue agir<br/>quando discorda da IA]
    D2 --> D2T[Permitir override manual<br/>e manter sempre disponível:<br/>Acionar emergência agora]
```

```
```
