FROM node:alpine

WORKDIR /usr/src/app

all:
  BUILD +build
  SAVE ARTIFACT /usr/src/app/dist

build:
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build