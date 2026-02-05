# Sigflux Backend API

Backend para a aplicação Sigflux Mobile com PostgreSQL e Prisma ORM.

## Requisitos

- Node.js 18+ (para desenvolvimento local)
- npm ou yarn
- PostgreSQL 14+ (para desenvolvimento local)
- Docker e Docker Compose (para execução com containers)

## Opção 1: Executar com Docker (Recomendado)

A forma mais fácil de executar o backend é usando Docker Compose.

### Subir o banco de dados e a API

```bash
# Copie o arquivo de ambiente (opcional - ajuste as variáveis)
cp .env.docker .env

# Suba os containers
docker compose up -d

# Veja os logs
docker compose logs -f api
```

### Executar o seed (criar usuário admin)

```bash
docker compose --profile seed up seed
```

### Comandos úteis

```bash
# Parar os containers
docker compose down

# Parar e remover volumes (apaga dados do banco)
docker compose down -v

# Rebuild após alterações
docker compose build --no-cache
docker compose up -d

# Acessar o container da API
docker compose exec api sh

# Acessar o banco de dados
docker compose exec db psql -U sigflux -d sigflux
```

### Variáveis de ambiente Docker

Você pode configurar via `.env` ou diretamente no `docker-compose.yml`:

| Variável | Padrão | Descrição |
|----------|--------|-----------|
| `POSTGRES_USER` | sigflux | Usuário do PostgreSQL |
| `POSTGRES_PASSWORD` | sigflux123 | Senha do PostgreSQL |
| `POSTGRES_DB` | sigflux | Nome do banco |
| `DB_PORT` | 5432 | Porta exposta do banco |
| `API_PORT` | 3000 | Porta exposta da API |
| `JWT_SECRET` | sigflux-secret-key-2024 | Chave JWT |
| `ADMIN_MATRICULA` | 20230001 | Matrícula do admin |
| `ADMIN_PASSWORD` | admin123 | Senha do admin |

---

## Opção 2: Instalação Local

### Instalação

```bash
cd backend
npm install
```

## Configuração do Banco de Dados

1. **Instale o PostgreSQL** (se não estiver instalado):
   ```bash
   # Ubuntu/Debian
   sudo apt install postgresql postgresql-contrib

   # macOS
   brew install postgresql
   ```

2. **Crie o banco de dados**:
   ```bash
   sudo -u postgres psql
   CREATE DATABASE sigflux;
   CREATE USER sigflux_user WITH PASSWORD 'sua_senha';
   GRANT ALL PRIVILEGES ON DATABASE sigflux TO sigflux_user;
   \q
   ```

3. **Configure as variáveis de ambiente**:
   Copie o arquivo `.env.example` para `.env` e ajuste as variáveis:
   ```bash
   cp .env.example .env
   ```

   Edite o `.env`:
   ```env
   # Configuração do Banco de Dados PostgreSQL
   DATABASE_URL="postgresql://sigflux_user:sua_senha@localhost:5432/sigflux?schema=public"

   # Secret para JWT
   JWT_SECRET="sua-chave-secreta-aqui"

   # Porta do servidor
   PORT=3000

   # Configuração do usuário admin (seed)
   ADMIN_MATRICULA="20230001"
   ADMIN_PASSWORD="admin123"
   ADMIN_NOME="Administrador"
   ADMIN_EMAIL="admin@sigflux.com.br"
   ADMIN_CPF="000.000.000-00"
   ADMIN_TELEFONE="(83) 99999-0000"
   ADMIN_CARGO="admin"
   ```

4. **Sincronize o schema com o banco**:
   ```bash
   npm run db:push
   ```

5. **Execute o seed para criar o usuário admin**:
   ```bash
   npm run seed
   ```

## Executando

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Compila o TypeScript |
| `npm start` | Inicia o servidor compilado |
| `npm run seed` | Popula o banco com usuário admin |
| `npm run db:generate` | Gera o Prisma Client |
| `npm run db:push` | Sincroniza schema com o banco |
| `npm run db:migrate` | Executa migrações do Prisma |
| `npm run db:studio` | Abre o Prisma Studio (GUI) |

## Endpoints da API

Base URL: `http://localhost:3000/api`

### Autenticação

- `POST /auth/login` - Login com matrícula e senha
- `POST /auth/validate` - Validar token JWT

### Usuários

- `GET /users` - Listar todos
- `GET /users/:id` - Buscar por ID
- `POST /users` - Criar novo
- `PUT /users/:id` - Atualizar
- `DELETE /users/:id` - Remover
- `PUT /users/:id/password` - Alterar senha

### Pacientes

- `GET /pacientes` - Listar todos
- `GET /pacientes/:id` - Buscar por ID
- `POST /pacientes` - Criar novo
- `PUT /pacientes/:id` - Atualizar
- `DELETE /pacientes/:id` - Remover
- `POST /pacientes/:id/acompanhantes` - Adicionar acompanhante
- `PUT /pacientes/:pacienteId/acompanhantes/:acompanhanteId` - Atualizar acompanhante
- `DELETE /pacientes/:pacienteId/acompanhantes/:acompanhanteId` - Remover acompanhante

### Motoristas

- `GET /motoristas` - Listar todos
- `GET /motoristas/:id` - Buscar por ID
- `POST /motoristas` - Criar novo
- `PUT /motoristas/:id` - Atualizar
- `DELETE /motoristas/:id` - Remover

### Veículos

- `GET /veiculos` - Listar todos
- `GET /veiculos/available` - Listar disponíveis
- `GET /veiculos/:id` - Buscar por ID
- `POST /veiculos` - Criar novo
- `PUT /veiculos/:id` - Atualizar
- `DELETE /veiculos/:id` - Remover

### Casas de Apoio

- `GET /casas-apoio` - Listar todas
- `GET /casas-apoio/:id` - Buscar por ID
- `POST /casas-apoio` - Criar nova
- `PUT /casas-apoio/:id` - Atualizar
- `DELETE /casas-apoio/:id` - Remover

### Viagens

- `GET /viagens` - Listar todas
- `GET /viagens/:id` - Buscar por ID
- `GET /viagens/:id/capacidade` - Capacidade disponível
- `POST /viagens` - Criar nova
- `PUT /viagens/:id` - Atualizar
- `DELETE /viagens/:id` - Remover
- `POST /viagens/:id/passageiros` - Adicionar passageiro
- `DELETE /viagens/:id/passageiros/:pacienteId` - Remover passageiro
- `PUT /viagens/:id/passageiros/:pacienteId/acompanhante` - Atualizar acompanhante
- `POST /viagens/:id/paradas` - Adicionar parada
- `DELETE /viagens/:id/paradas/:casaApoioId` - Remover parada
- `POST /viagens/:id/iniciar` - Iniciar viagem
- `POST /viagens/:id/concluir` - Concluir viagem

## Exemplo de Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"matricula": "20230001", "password": "admin123"}'
```

## Estrutura do Projeto

```
backend/
├── prisma/
│   └── schema.prisma      # Schema do banco de dados
├── src/
│   ├── lib/
│   │   └── prisma.ts      # Cliente Prisma
│   ├── middleware/
│   │   └── auth.ts        # Middleware de autenticação
│   ├── routes/
│   │   ├── auth.ts        # Rotas de autenticação
│   │   ├── users.ts       # Rotas de usuários
│   │   ├── pacientes.ts   # Rotas de pacientes
│   │   ├── motoristas.ts  # Rotas de motoristas
│   │   ├── veiculos.ts    # Rotas de veículos
│   │   ├── casasApoio.ts  # Rotas de casas de apoio
│   │   └── viagens.ts     # Rotas de viagens
│   ├── types/
│   │   └── index.ts       # Tipos TypeScript
│   ├── seed.ts            # Script de seed
│   └── server.ts          # Servidor Express
├── .env                   # Variáveis de ambiente (não commitado)
├── .env.example           # Exemplo de variáveis
├── package.json
└── tsconfig.json
```
