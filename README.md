<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Start docker-compose im root
```
  sudo docker-compose up -d
```
### To connect database postgres in prisma use the crendentials from docker-compose.yml

file: docker-compose.yml
```yaml
    environment:
      POSTGRES_USER: "ImUserFromDB"
      POSTGRES_PASSWORD: "MUST_BE_STRONG_PASSWORD"
    ...

    ports:
    - 5440:5432 #Use the first port to access external
```

file: .env
```env
DATABASE_URL="postgresql://ImUserFromDB:MUST_BE_STRONG_PASSWORD@0.0.0.0:5440/productsdb?schema=public" 

#The prisma automatically create an database with name productsdb
```

## Installation
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
