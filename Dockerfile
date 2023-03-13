FROM node:14.15.0

WORKDIR /api

COPY --chown=node:node . /api

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
