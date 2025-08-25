# build the app
FROM oven/bun:1 AS build
WORKDIR /app

# copy everything and install deps
COPY . .
RUN bun install
RUN bun run build

# serve static files with Caddy
FROM caddy:2-alpine
WORKDIR /srv
COPY --from=build /app/dist /srv

# Use Caddy to serve the dist/ folder
CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":3000"]
