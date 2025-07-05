### Como executar

```bash
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Demora um pouco para carregar

Interface de testes (Swagger UI): [http://localhost:8000/docs](http://localhost:8000/docs)

## Endpoints

### `POST http://localhost:8000/api/classificar-noticia`
Classifica um texto como **Fake** ou **True**.

**Body JSON:**
```json
{
  "texto": "Se alimentar bem é bom para à saúde"
}
```

**Resposta:**
```json
  {
    "texto": "Se alimentar bem é bom para à saúde",
    "classificacao": "True",
    "confianca": 96.06,
    "data": "2025-06-28T15:59:59.342856"
  },
```

### `GET http://localhost:8000/api/historico`
Retorna o histórico de classificações realizadas.

### `GET http://localhost:8000/api/status`
Retorna status atual do modelo carregado (tipo, embeddings, versão).