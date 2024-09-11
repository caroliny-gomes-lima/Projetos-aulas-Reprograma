# comsome imagem node
FROM node:18 

# cria um diretorio workdir
WORKDIR /app 

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto(roda)
RUN npm ci

# Copie o restante dos arquivos da aplicação para o diretório de trabalho(copia para dentro do container)
COPY . .

# Compile a aplicação TypeScript(roda aaplicação)
RUN npm run build

# Exponha a porta que a aplicação usará (ajuste conforme necessário)
EXPOSE 3000

# Comando para rodar a aplicação(start a apicação)
CMD ["npm", "start"]
