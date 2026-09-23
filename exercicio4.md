# Diagramas

## 1. Service Blueprint

```mermaid
flowchart TB

    A["1. Detecção da queda"]
    B["2. Geração do alerta"]
    C["3. Triagem da central"]
    D["4. Escalonamento"]
    E["5. Encerramento"]

    A1["Wearable capta movimento<br/>IA analisa sinais vitais e padrão de queda"]
    B1["Notificação push/SMS para cuidador<br/>Tela do aplicativo"]
    C1["Cuidador vê alerta recebido<br/>e status inicial"]
    D1["Cuidador/paciente recebe<br/>ligação, orientação ou visita"]
    E1["Confirmação da resolução<br/>e orientações finais"]

    A2["Wearable capta dados<br/>IA analisa sinais e classifica risco"]
    B2["Central recebe alerta<br/>pré-classificado pela IA"]
    C2["Atendente valida dados<br/>Liga para cuidador/paciente<br/>Confirma gravidade"]
    D2["Atendente aciona SAMU,<br/>médico ou equipe interna<br/>e registra decisão"]
    E2["Registro do caso<br/>Auditoria e acompanhamento"]

    A3["Modelo de IA<br/>Regras de risco<br/>Histórico do paciente"]
    B3["Fila de alertas<br/>SLA<br/>Classificação de risco"]
    C3["Protocolo de escalonamento<br/>Scripts<br/>Integração telefônica"]
    D3["Protocolo de emergência<br/>Contatos<br/>Prontuário"]
    E3["Logs<br/>Relatórios<br/>QA<br/>Melhoria contínua"]

    A --> B --> C --> D --> E

    subgraph F["FRONTSTAGE — visível ao paciente/cuidador"]
        A1
        B1
        C1
        D1
        E1
    end

    subgraph G["BACKSTAGE — invisível"]
        A2
        B2
        C2
        D2
        E2
    end

    subgraph H["PROCESSOS DE SUPORTE"]
        A3
        B3
        C3
        D3
        E3
    end
````

## 2. Transparência, Agência e Controle

```mermaid
flowchart LR

    A["IA classifica o risco"]

    A --> B["TRANSPARÊNCIA"]

    B --> B1["Problema:<br/>Atendente não entende a classificação da IA"]
    B1 --> B2["Melhoria:<br/>Mostrar fatores explicativos"]
    B2 --> B3["Aceleração<br/>Imobilidade<br/>Histórico de quedas<br/>Confiança do modelo"]

    A --> C["AGÊNCIA"]

    C --> C1["Problema:<br/>Atendente não consegue contestar ou ajustar"]
    C1 --> C2["Melhoria:<br/>Permitir revisão da classificação"]
    C2 --> C3["Concordo<br/>Ajustar risco<br/>Solicitar revisão"]
    C3 --> C4["Justificativa obrigatória"]

    A --> D["CONTROLE"]

    D --> D1["Problema:<br/>Atendente não consegue agir se discordar da IA"]
    D1 --> D2["Melhoria:<br/>Permitir intervenção manual"]
    D2 --> D3["Override manual"]
    D2 --> D4["Acionar emergência agora"]

    B3 --> E["Decisão do atendente"]
    C4 --> E
    D3 --> E
    D4 --> E
```
