# test-job-backend

# Getting Started
This repository demo for test
## Usage
- Run on localhost with docker (docker, docker-compose must be installed)
* cd /path/project
* docker-compose build
* docker-compose up
* Go http://127.0.0.1:3600 to check working.

## Connect mongodb
- Copy .env-example to .env, then update correct
* NODE_ENV: if environment on production, value is production. Default value is development
* DB_HOST: default value is db. You can change it to correctly