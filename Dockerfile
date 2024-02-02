FROM node:lts

WORKDIR /app

COPY . /app

EXPOSE 8080

CMD [ "node", "app.js" ]