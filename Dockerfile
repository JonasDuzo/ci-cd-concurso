# ETAPA 1 — Escolhe a "base" do contêiner
# É como escolher o sistema operacional
FROM node:20-alpine

# ETAPA 2 — Define a pasta de trabalho
# Todos os próximos comandos rodam aqui dentro
WORKDIR /app

# ETAPA 3 — Copia e instala as dependências
# Copiamos o package.json ANTES do restante
# para aproveitar o cache do Docker
COPY package*.json ./
RUN npm install --production

# ETAPA 4 — Copia o restante do código
COPY src/ ./src/

# ETAPA 5 — Expõe a porta e define o comando
EXPOSE 3000
CMD ["node", "src/server.js"]
