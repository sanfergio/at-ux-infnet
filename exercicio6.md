# Diagramas — Ecossistema e Integrações

## 1. Modelagem do Ecossistema

```mermaid
flowchart LR

    P["Paciente idoso"]
    C["Cuidador familiar"]
    W["Wearable"]
    AP["App do paciente"]
    AC["App do cuidador"]
    M["Portal médico"]
    CT["Central de atendimento"]
    IA["IA de alertas e lembretes"]
    F["Farmácia parceira"]

    P <--> W
    P <--> AP
    P <--> CT
    P <--> C

    C <--> AC
    C <--> CT
    C <--> M

    W <--> IA
    W <--> AP

    AP <--> IA
    AP <--> CT
    AP <--> F

    AC <--> IA
    AC <--> CT
    AC <--> M

    M <--> IA
    M <--> CT
    M <--> F

    CT <--> IA
    CT <--> F

    IA <--> F
```

### Fluxo simplificado

```mermaid
flowchart LR

    A["Paciente"]
    B["Wearable"]
    C["IA"]
    D["Central"]
    E["Cuidador"]
    F["Médico"]

    G["App do paciente"]
    H["Farmácia"]
    I["Portal médico"]

    A <--> B
    B <--> C
    C <--> D
    D <--> E
    D <--> F

    G <--> C
    C <--> H

    I <--> C
    I <--> H

    D <--> H
```

## 2. Oportunidades de Integração e Pontos de Atrito

```mermaid
flowchart TB

    IA["IA de alertas e estoque"]

    O1["OPORTUNIDADE 1"]
    O1A["IA identifica estoque baixo"]
    O1B["Solicita aprovação do médico/cuidador"]
    O1C["Farmácia recebe solicitação"]

    O2["OPORTUNIDADE 2"]
    O2A["Central integrada à farmácia"]
    O2B["Confirma entrega"]
    O2C["Acompanha adesão e rastreio"]

    O3["OPORTUNIDADE 3"]
    O3A["Portal médico envia prescrição"]
    O3B["Farmácia recebe diretamente"]
    O3C["Sistema gera lembrete"]

    A1["ATRITO 1"]
    A1A["Reposição automática"]
    A1B["Sem validação clínica"]
    A1C["Risco clínico e legal"]

    A2["ATRITO 2"]
    A2A["Dependência do relato do idoso"]
    A2B["Estoque não integrado ao sistema"]
    A2C["Baixa confiabilidade e atraso"]

    IA --> O1
    O1 --> O1A --> O1B --> O1C

    IA --> O2
    O2 --> O2A --> O2B --> O2C

    IA --> O3
    O3 --> O3A --> O3B --> O3C

    IA --> A1
    A1 --> A1A --> A1B --> A1C

    IA --> A2
    A2 --> A2A --> A2B --> A2C
```

## 3. Mapa Adequado para Cada Pergunta de Design

```mermaid
flowchart TB

    A["PERGUNTAS DE DESIGN"]

    A --> Q1["Como o novo serviço se conecta ao ecossistema?"]
    Q1 --> M1["ECOSYSTEM MAP"]
    M1 --> R1["Mostra nós, atores e integrações<br/>entre farmácia, apps, IA, central e médico"]

    A --> Q2["Qual a jornada emocional completa<br/>do paciente usando o novo serviço?"]
    Q2 --> M2["CUSTOMER JOURNEY MAP<br/>/ EXPERIENCE MAP"]
    M2 --> R2["Mapeia fases, touchpoints,<br/>emoções e atritos ao longo do uso"]

    A --> Q3["Qual estrutura interna sustenta o serviço?"]
    Q3 --> M3["SERVICE BLUEPRINT"]
    M3 --> R3["Detalha frontstage, backstage,<br/>processos de suporte e integrações técnicas"]
```
