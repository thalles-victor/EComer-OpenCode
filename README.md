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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
