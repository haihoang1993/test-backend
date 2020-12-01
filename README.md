# Test job backend

# Getting Started
This repository test

## Test development
First, run the development:

```bash
npm run dev
# or
yarn dev
```

## Usage docker deploy
- Run on localhost with docker (docker, docker-compose must be installed)
* cd /path/project
* docker-compose build
* docker-compose up
* Go http://127.0.0.1:3600 to check working.

## Automation to deploy
* Build an automation deploy when commit code to branch Main

## Connect mongodb
- Copy .env-example to .env, then update correct
* NODE_ENV: if environment on production, value is production. Default value is development
* DB_HOST: default value is db. You can change it to correctly

## Demo:
* Link Root: http://test.allwilder.net/
* Link Api Document: http://test.allwilder.net/api-docs/
* Link test Graphlq: http://test.allwilder.net/graphql
