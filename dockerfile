FROM node:10.15.3 as base
WORKDIR /opt/app

FROM base as build
COPY ./ ./
RUN npm install
RUN npm run build

FROM base
COPY package*.json process.yml newrelic.js start.sh ./
COPY --from=build /opt/app/build ./build
RUN chmod +x start.sh
RUN npm install pm2@latest -g
RUN npm install --production
EXPOSE 5000
ENTRYPOINT ["./start.sh"]