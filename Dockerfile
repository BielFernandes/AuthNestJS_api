FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Instala o Prisma CLI
RUN npm install prisma --save-dev

# Copia todos os arquivos para o diretório de trabalho
COPY . .

# Gera o cliente Prisma
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# Comando para iniciar a aplicação
CMD ["node", "dist/main"]
