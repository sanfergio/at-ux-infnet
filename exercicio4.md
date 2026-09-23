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
