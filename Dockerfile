# Bước 1: Build app
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Bước 2: Serve app bằng nginx
FROM nginx:alpine

# Copy file build vào thư mục nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy file cấu hình nginx nếu cần
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
