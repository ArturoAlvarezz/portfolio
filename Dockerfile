# Etapa 1: lint, pruebas y build del sitio (si algo falla, no se despliega).
FROM node:24-alpine AS build
WORKDIR /app
RUN npm install --global pnpm@10.12.1
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm lint && pnpm test:coverage && pnpm build

# Etapa 2: servir el sitio estático con nginx.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
