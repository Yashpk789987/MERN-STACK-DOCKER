
# IMPORTANT

FROM node:10-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN cd /app/client && yarn && yarn run build
CMD ["npm", "start"]


# IMPORTANT


# FROM node:10-alpine

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]

