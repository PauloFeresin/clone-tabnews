### VScode:

- control + l
  - limp[ar terminal
- code "nome de arquivo"
  - Cria um arquivo na atual pasta do terminal
- cmd + p
  - fuzzy search

### git

- git log
- git reflog
- git status
- git diff
- git mv
- renomeia arquivos (ex: git mv .env .env.development)
- git amend
- git rm: remove arquivos da branch atual (git rm arquivo.js)

### linux

- sudo apt update
  - faz o update
- sudo apt install
  - Comando para instalar apps, como `sudo apto install postgresql-client`

### docker

- docker ps
  - lista os containers ativos
- docker ps -all
  - list todos os containers
- docker logs "container name"
  - Mostra os logs do container informado
- docker compose -up
  - Sobe o container
- docker compose -up --detached
  - Sobe o container e libera o terminal
- docker compose up -d --force-recreate
  - Sobe o container sem precisar derrubar antes, para quando houver atualizações no `compose.yaml`
- docker compose -f infra/compose.yaml
  - Muda o local onde o docker vai procurar o compose.yaml

### psql

- psql --host=localhost --username=postgres --port=5432
  - Comando para definir algumas variaveis de conexão ao banco
